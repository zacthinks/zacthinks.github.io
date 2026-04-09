import { pipeline } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2";

const LOCAL_MODEL_PATH = "./models/all-MiniLM-L6-v2";
const REMOTE_MODEL_ID = "Xenova/all-MiniLM-L6-v2";

const state = {
  items: [],
  keywordTerms: [],
  semanticQuery: "",
  semanticScores: null,
  semanticThreshold: null,
  semanticDomain: null,
  semanticColorDomain: null,
  semanticExtractor: null,
  pointOrder: [],
};

const COLORS = {
  base: "#111111",
  fallback: "#111111",
};

const plotEl = document.getElementById("plot");
const detailsEl = document.getElementById("detailsContent");
const dayFilterEl = document.getElementById("dayFilter");
const sessionTypeFilterEl = document.getElementById("sessionTypeFilter");
const recordTypeFilterEl = document.getElementById("recordTypeFilter");
const startTimeEl = document.getElementById("startTime");
const endTimeEl = document.getElementById("endTime");
const startTimeLabelEl = document.getElementById("startTimeLabel");
const endTimeLabelEl = document.getElementById("endTimeLabel");
const keywordInputEl = document.getElementById("keywordInput");
const semanticInputEl = document.getElementById("semanticInput");
const semanticBtnEl = document.getElementById("semanticBtn");
const clearSemanticBtnEl = document.getElementById("clearSemanticBtn");
const semanticStatusEl = document.getElementById("semanticStatus");
const semanticLegendEl = document.getElementById("semanticLegend");
const semanticMinLabelEl = document.getElementById("semanticMinLabel");
const semanticMaxLabelEl = document.getElementById("semanticMaxLabel");
const semanticThresholdEl = document.getElementById("semanticThreshold");
const semanticThresholdValueEl = document.getElementById("semanticThresholdValue");
const plotStatusEl = document.getElementById("plotStatus");
const loadingScreenEl = document.getElementById("loadingScreen");
const loadingMessageEl = document.getElementById("loadingMessage");

function minutesToClock(totalMinutes) {
  const minutes = Math.max(0, Math.min(1439, Number(totalMinutes) || 0));
  const h24 = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const ampm = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 || 12;
  return `${h12}:${String(mins).padStart(2, "0")} ${ampm}`;
}

function parseTerms(text) {
  return (text || "")
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
}

function cosineSimilarity(a, b) {
  if (!a || !b || a.length !== b.length) return 0;
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i += 1) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

function getBaseColor(item) {
  return COLORS.base || COLORS.fallback;
}

function setStatus(text) {
  semanticStatusEl.textContent = text;
}

function setPlotStatus(text) {
  if (plotStatusEl) {
    plotStatusEl.textContent = text;
  }
}

function scoreToSliderValue(score) {
  if (!state.semanticDomain) return 0;
  const range = state.semanticDomain.max - state.semanticDomain.min;
  if (range <= 0) return 0;
  const normalized = (score - state.semanticDomain.min) / range;
  return Math.round(Math.max(0, Math.min(1, normalized)) * 100);
}

function sliderValueToScore(value) {
  if (!state.semanticDomain) return null;
  const t = Math.max(0, Math.min(100, Number(value) || 0)) / 100;
  return state.semanticDomain.min + t * (state.semanticDomain.max - state.semanticDomain.min);
}

function updateSemanticThresholdLabel() {
  if (!semanticThresholdValueEl || !state.semanticDomain || state.semanticThreshold === null) {
    if (semanticThresholdValueEl) {
      semanticThresholdValueEl.textContent = "Any";
    }
    return;
  }
  semanticThresholdValueEl.textContent = `>= ${state.semanticThreshold.toFixed(3)}`;
}

function setLoadingMessage(text) {
  if (loadingMessageEl) {
    loadingMessageEl.textContent = text;
  }
}

function hideLoadingScreen() {
  if (!loadingScreenEl) return;
  loadingScreenEl.classList.add("hidden");
  window.setTimeout(() => {
    loadingScreenEl.remove();
  }, 220);
}

function itemMatchesKeyword(item, terms) {
  if (!terms.length) return true;
  const haystack = item.search_text || "";
  return terms.every((t) => haystack.includes(t));
}

function passesFilters(item) {
  const selectedDay = dayFilterEl.value;
  const selectedSessionType = sessionTypeFilterEl.value;
  const selectedRecordType = recordTypeFilterEl.value;
  const startAfter = Number(startTimeEl.value);
  const endBefore = Number(endTimeEl.value);

  const dayOk = !selectedDay || item.day === selectedDay;
  const sessionTypeOk = !selectedSessionType || item.session_type === selectedSessionType;
  const recordTypeOk = !selectedRecordType || item.record_type === selectedRecordType;
  const timeOk = item.start_minutes >= startAfter && item.end_minutes <= endBefore;

  return dayOk && sessionTypeOk && recordTypeOk && timeOk;
}

function computeVisibleIndices() {
  const indices = [];
  const hasSemantic = Array.isArray(state.semanticScores);
  for (let i = 0; i < state.items.length; i += 1) {
    const item = state.items[i];
    const filterOk = passesFilters(item);
    const keywordOk = itemMatchesKeyword(item, state.keywordTerms);
    const semanticOk =
      !hasSemantic || state.semanticThreshold === null || state.semanticScores[i] >= state.semanticThreshold;
    if (filterOk && keywordOk && semanticOk) {
      indices.push(i);
    }
  }
  return indices;
}

function percentile(values, p) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const idx = Math.min(sorted.length - 1, Math.max(0, Math.floor(p * (sorted.length - 1))));
  return sorted[idx];
}

function computeSemanticColorDomain(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    return { min: 0, max: 1 };
  }
  let min = percentile(scores, 0.05);
  let max = percentile(scores, 0.95);
  if (!Number.isFinite(min)) min = 0;
  if (!Number.isFinite(max)) max = min + 1;
  if (max - min < 1e-6) {
    max = min + 1e-6;
  }
  return { min, max };
}

function buildMarkerStyle(visibleIndices) {
  const hasSemantic = Array.isArray(state.semanticScores);
  const colors = [];
  const opacity = [];
  const sizes = [];

  let minS = 0;
  let maxS = 1;
  if (hasSemantic) {
    const domain = state.semanticColorDomain || computeSemanticColorDomain(state.semanticScores);
    minS = domain.min;
    maxS = domain.max;
  }

  for (const i of visibleIndices) {
    const item = state.items[i];

    if (hasSemantic) {
      const s = state.semanticScores[i];
      const t = (s - minS) / (maxS - minS);
      const clamped = Math.max(0, Math.min(1, t));
      const hue = 230 - Math.round(230 * clamped);
      const sat = 72;
      const light = 48 - Math.round(16 * clamped);
      colors.push(`hsl(${hue} ${sat}% ${light}%)`);
      opacity.push(0.93);
      sizes.push(8);
    } else {
      colors.push(getBaseColor(item));
      opacity.push(0.9);
      sizes.push(8);
    }
  }

  return { colors, opacity, sizes, hasSemantic, minS, maxS };
}

function updateSemanticLegend(style) {
  if (!style.hasSemantic) {
    semanticLegendEl.classList.add("hidden");
    semanticMinLabelEl.textContent = "low";
    semanticMaxLabelEl.textContent = "high";
    if (semanticThresholdEl) {
      semanticThresholdEl.disabled = true;
      semanticThresholdEl.setAttribute("disabled", "disabled");
      semanticThresholdEl.value = "0";
    }
    updateSemanticThresholdLabel();
    return;
  }

  if (!state.semanticDomain && Array.isArray(state.semanticScores) && state.semanticScores.length) {
    const minScore = Math.min(...state.semanticScores);
    const maxScore = Math.max(...state.semanticScores);
    state.semanticDomain = {
      min: Number.isFinite(minScore) ? minScore : 0,
      max: Number.isFinite(maxScore) && maxScore > minScore ? maxScore : (Number.isFinite(minScore) ? minScore + 1e-6 : 1),
    };
  }

  if (state.semanticThreshold === null && state.semanticDomain) {
    state.semanticThreshold = state.semanticDomain.min;
  }

  semanticLegendEl.classList.remove("hidden");
  const minLabel = state.semanticDomain ? state.semanticDomain.min : style.minS;
  const maxLabel = state.semanticDomain ? state.semanticDomain.max : style.maxS;
  semanticMinLabelEl.textContent = minLabel.toFixed(3);
  semanticMaxLabelEl.textContent = maxLabel.toFixed(3);

  if (semanticThresholdEl) {
    semanticThresholdEl.removeAttribute("disabled");
    semanticThresholdEl.disabled = false;
    if (state.semanticThreshold !== null) {
      semanticThresholdEl.value = String(scoreToSliderValue(state.semanticThreshold));
    }
  }
  updateSemanticThresholdLabel();
}

function updatePlot() {
  const visibleIndices = computeVisibleIndices();
  const style = buildMarkerStyle(visibleIndices);

  const x = visibleIndices.map((i) => state.items[i].umap_x);
  const y = visibleIndices.map((i) => state.items[i].umap_y);
  const text = visibleIndices.map((i) => state.items[i].title);
  const customdata = visibleIndices.map((i) => state.items[i].id);

  Plotly.restyle(plotEl, {
    x: [x],
    y: [y],
    text: [text],
    customdata: [customdata],
    "marker.color": [style.colors],
    "marker.opacity": [style.opacity],
    "marker.size": [style.sizes],
  });

  updateSemanticLegend(style);

  const visibleCount = visibleIndices.length;
  const semanticPart = state.semanticScores ? " with semantic scoring" : "";
  const thresholdPart =
    state.semanticScores && state.semanticThreshold !== null
      ? ` (cosine >= ${state.semanticThreshold.toFixed(3)})`
      : "";
  setPlotStatus(`${visibleCount}/${state.items.length} points visible${semanticPart}${thresholdPart}.`);
}

function parseDaySortKey(dayLabel) {
  const match = /^(?:[A-Za-z]{3})\s+(\d{1,2})\/(\d{1,2})$/.exec(dayLabel || "");
  if (!match) {
    return Number.POSITIVE_INFINITY;
  }
  const month = Number(match[1]);
  const day = Number(match[2]);
  return month * 100 + day;
}

function renderDetails(item) {
  const who = item.record_type === "session" ? item.chair : item.authors;
  const whoLabel = item.record_type === "session" ? "Chair" : "Authors";

  detailsEl.innerHTML = `
    <h3>${item.title || "Untitled"}</h3>
    <p class="meta"><strong>Type:</strong> ${item.record_type} | <strong>Session Type:</strong> ${item.session_type}</p>
    <p class="meta"><strong>Day/Time:</strong> ${item.day} | ${item.time_text || "N/A"}</p>
    <p class="meta"><strong>Location:</strong> ${item.location || "N/A"}</p>
    <p class="meta"><strong>Sub-unit:</strong> ${item.sub_unit || "N/A"}</p>
    <p class="meta"><strong>${whoLabel}:</strong> ${who || "N/A"}</p>
    <div class="abstract">${item.abstract || "No abstract available."}</div>
    <a class="link" target="_blank" rel="noopener noreferrer" href="${item.direct_link}">Open in AERA Program</a>
  `;
}

async function ensureSemanticExtractor() {
  if (state.semanticExtractor) return state.semanticExtractor;
  setStatus("Loading semantic model in browser...");

  try {
    state.semanticExtractor = await pipeline("feature-extraction", LOCAL_MODEL_PATH);
    return state.semanticExtractor;
  } catch (localError) {
    console.warn("Local semantic model load failed, falling back to remote model.", localError);
  }

  state.semanticExtractor = await pipeline("feature-extraction", REMOTE_MODEL_ID);
  return state.semanticExtractor;
}

async function runSemanticSearch() {
  const query = (semanticInputEl.value || "").trim();
  state.semanticQuery = query;

  if (!query) {
    state.semanticScores = null;
    state.semanticThreshold = null;
    state.semanticDomain = null;
    state.semanticColorDomain = null;
    updatePlot();
    setStatus("Semantic search cleared.");
    return;
  }

  semanticBtnEl.disabled = true;
  clearSemanticBtnEl.disabled = true;

  try {
    const extractor = await ensureSemanticExtractor();
    setStatus("Embedding semantic query...");

    const out = await extractor(query, { pooling: "mean", normalize: true });
    const queryVec = Array.from(out.data);

    state.semanticScores = state.items.map((item) => cosineSimilarity(queryVec, item.embedding));
    state.semanticColorDomain = computeSemanticColorDomain(state.semanticScores);
    const minScore = Math.min(...state.semanticScores);
    const maxScore = Math.max(...state.semanticScores);
    state.semanticDomain = {
      min: Number.isFinite(minScore) ? minScore : 0,
      max: Number.isFinite(maxScore) && maxScore > minScore ? maxScore : (Number.isFinite(minScore) ? minScore + 1e-6 : 1),
    };
    state.semanticThreshold = state.semanticDomain.min;
    if (semanticThresholdEl) {
      semanticThresholdEl.value = "0";
      semanticThresholdEl.disabled = false;
    }
    updateSemanticThresholdLabel();
    updatePlot();
    setStatus("Semantic search complete.");
  } catch (err) {
    console.error(err);
    setStatus("Semantic search failed. Check console/network.");
  } finally {
    semanticBtnEl.disabled = false;
    clearSemanticBtnEl.disabled = false;
  }
}

function populateFilterOptions() {
  const uniqueDays = [...new Set(state.items.map((x) => x.day).filter(Boolean))].sort(
    (a, b) => parseDaySortKey(a) - parseDaySortKey(b) || a.localeCompare(b)
  );
  const uniqueSessionTypes = [...new Set(state.items.map((x) => x.session_type).filter(Boolean))].sort();

  for (const day of uniqueDays) {
    const opt = document.createElement("option");
    opt.value = day;
    opt.textContent = day;
    dayFilterEl.appendChild(opt);
  }

  for (const s of uniqueSessionTypes) {
    const opt = document.createElement("option");
    opt.value = s;
    opt.textContent = s;
    sessionTypeFilterEl.appendChild(opt);
  }
}

function attachEvents() {
  dayFilterEl.addEventListener("change", updatePlot);
  sessionTypeFilterEl.addEventListener("change", updatePlot);
  recordTypeFilterEl.addEventListener("change", updatePlot);

  startTimeEl.addEventListener("input", () => {
    if (Number(startTimeEl.value) > Number(endTimeEl.value)) {
      endTimeEl.value = startTimeEl.value;
    }
    startTimeLabelEl.textContent = minutesToClock(startTimeEl.value);
    endTimeLabelEl.textContent = minutesToClock(endTimeEl.value);
    updatePlot();
  });

  endTimeEl.addEventListener("input", () => {
    if (Number(endTimeEl.value) < Number(startTimeEl.value)) {
      startTimeEl.value = endTimeEl.value;
    }
    startTimeLabelEl.textContent = minutesToClock(startTimeEl.value);
    endTimeLabelEl.textContent = minutesToClock(endTimeEl.value);
    updatePlot();
  });

  keywordInputEl.addEventListener("input", () => {
    state.keywordTerms = parseTerms(keywordInputEl.value);
    updatePlot();
  });

  semanticBtnEl.addEventListener("click", runSemanticSearch);
  semanticInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      runSemanticSearch();
    }
  });

  clearSemanticBtnEl.addEventListener("click", () => {
    semanticInputEl.value = "";
    state.semanticScores = null;
    state.semanticThreshold = null;
    state.semanticDomain = null;
    state.semanticColorDomain = null;
    if (semanticThresholdEl) {
      semanticThresholdEl.value = "0";
      semanticThresholdEl.disabled = true;
    }
    updateSemanticThresholdLabel();
    setStatus("Semantic search idle.");
    updatePlot();
  });

  if (semanticThresholdEl) {
    const onSemanticThresholdChange = () => {
      if (!Array.isArray(state.semanticScores)) return;
      state.semanticThreshold = sliderValueToScore(semanticThresholdEl.value);
      updateSemanticThresholdLabel();
      updatePlot();
    };

    semanticThresholdEl.addEventListener("input", onSemanticThresholdChange);
    semanticThresholdEl.addEventListener("change", onSemanticThresholdChange);
  }

  plotEl.on("plotly_click", (eventData) => {
    const point = eventData?.points?.[0];
    if (!point) return;
    const idx = point.customdata;
    const item = state.items[idx];
    if (item) renderDetails(item);
  });
}

async function loadData() {
  const dataFiles = ["./data_part1.json", "./data_part2.json"];
  setLoadingMessage("Loading data files...");
  const payloads = await Promise.all(
    dataFiles.map(async (path) => {
      setLoadingMessage(`Loading ${path.replace("./", "")}`);
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Failed to load ${path}: ${response.status}`);
      }
      return response.json();
    })
  );

  const mergedItems = payloads.flatMap((payload) => payload.items || []);
  state.items = mergedItems.map((item, index) => ({
    ...item,
    embedding: Array.isArray(item.embedding) ? item.embedding : [],
    umap_x: Number(item.umap_x) || 0,
    umap_y: Number(item.umap_y) || 0,
    start_minutes: Number(item.start_minutes) || 0,
    end_minutes: Number(item.end_minutes) || 0,
    search_text: (item.search_text || "").toLowerCase(),
    id: index,
  }));
}

async function initPlot() {
  setLoadingMessage("Building the map...");
  const trace = {
    x: state.items.map((d) => d.umap_x),
    y: state.items.map((d) => d.umap_y),
    mode: "markers",
    type: "scattergl",
    customdata: state.items.map((d) => d.id),
    text: state.items.map((d) => d.title),
    hovertemplate: "%{text}<extra></extra>",
    marker: {
      color: state.items.map((d) => getBaseColor(d)),
      opacity: 0.9,
      size: 8,
      line: { width: 0 },
    },
  };

  const layout = {
    margin: { l: 20, r: 10, b: 35, t: 15 },
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(255,255,255,0.55)",
    xaxis: { title: "", zeroline: false, gridcolor: "rgba(0,0,0,0.08)", showticklabels: false, ticks: "" },
    yaxis: { title: "", zeroline: false, gridcolor: "rgba(0,0,0,0.08)", showticklabels: false, ticks: "" },
  };

  const config = { responsive: true, displaylogo: false };
  await Plotly.newPlot(plotEl, [trace], layout, config);
}

async function main() {
  try {
    startTimeLabelEl.textContent = minutesToClock(startTimeEl.value);
    endTimeLabelEl.textContent = minutesToClock(endTimeEl.value);

    setLoadingMessage("Preparing the interface...");
    await loadData();
    populateFilterOptions();
    await initPlot();
    attachEvents();
    updatePlot();
  } catch (err) {
    console.error(err);
    setStatus("Failed to initialize app. See console.");
    detailsEl.textContent = "App initialization failed. Please check data.json and console output.";
  } finally {
    hideLoadingScreen();
  }
}

main();
