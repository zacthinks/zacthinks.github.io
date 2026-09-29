---
layout: single
title: "TeAL"
permalink: /teal/
author_profile: false
---

<div class="teal-landing">

<section class="teal-hero">
  <div class="teal-hero__eyebrow">TEXT ANALYSIS LAB</div>
  <h2>Keep the analysis, not just the output.</h2>
  <p class="teal-hero__lead">TeAL is an accessible and extensible framework and software environment for multi-stage computer-assisted text analysis. It is designed to enable transparent, intentional, rigorous, and reproducible analysis while giving new tools and models a common infrastructure into which they can be integrated as they emerge.</p>

  <div class="teal-actions">
    <a class="teal-button teal-button--primary" href="#quick-start"><i class="fas fa-bolt" aria-hidden="true"></i> Quick start</a>
    <a class="teal-button" href="#capabilities"><i class="fas fa-layer-group" aria-hidden="true"></i> Capabilities</a>
    <a class="teal-button" href="#cheat-sheet"><i class="fas fa-table-list" aria-hidden="true"></i> Cheat sheet</a>
    <a class="teal-button" href="https://github.com/zacthinks/text-analysis-lab"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
  </div>

  <div class="teal-badges">
    <span><i class="fas fa-code-branch" aria-hidden="true"></i> Development release 0.2.0</span>
    <span><i class="fab fa-python" aria-hidden="true"></i> Python 3.10+</span>
    <span><i class="fas fa-scale-balanced" aria-hidden="true"></i> MIT License</span>
  </div>
</section>

<section class="teal-section">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">WHY TEAL?</span>
    <h2>Text analysis is a workflow, not a single model.</h2>
  </div>

  <p>Real text analyses move through many stages: importing and cleaning corpora, decomposing text, constructing representations, exploring patterns, developing measures, validating them, and carrying results into downstream analysis. Those stages often end up scattered across notebooks, DataFrames, model objects, and unrelated libraries. TeAL keeps them inside one persistent project so that the pieces of an analysis remain connected to one another and to the evidence from which they were derived.</p>

  <div class="teal-principles">
    <div class="teal-principle">
      <i class="fas fa-door-open" aria-hidden="true"></i>
      <strong>Accessible</strong>
      <span>A common environment for multi-stage text analysis reduces the amount of infrastructure researchers have to assemble before they can do substantive work.</span>
    </div>
    <div class="teal-principle">
      <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
      <strong>Extensible</strong>
      <span>New models, representations, and external results can be brought into the same project rather than forcing a new workflow every time the technology changes.</span>
    </div>
    <div class="teal-principle">
      <i class="fas fa-route" aria-hidden="true"></i>
      <strong>Traceable</strong>
      <span>Stable keys, artifact lineage, operation provenance, and stored configuration make it possible to inspect how a result came to exist.</span>
    </div>
    <div class="teal-principle">
      <i class="fas fa-note-sticky" aria-hidden="true"></i>
      <strong>Intentional</strong>
      <span>Versioned memos can be attached to projects, artifacts, operations, and operators so that methodological reasoning lives alongside the analysis.</span>
    </div>
  </div>
</section>

<section class="teal-section teal-core">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">THE CORE MODEL</span>
    <h2>One project. Durable artifacts. Explicit provenance.</h2>
  </div>

  <p>A TeAL <code>Project</code> owns durable, keyed <code>Artifacts</code>. Structural operations create new Artifacts and extend the project graph; analysis and visualization can inspect those objects without silently changing the graph. Keys—not physical row order—preserve identity across related objects.</p>

  <div class="teal-flow" aria-label="Typical TeAL workflow">
    <div class="teal-flow__node"><i class="fas fa-file-import" aria-hidden="true"></i><strong>Import</strong><span>documents</span></div>
    <div class="teal-flow__arrow" aria-hidden="true">→</div>
    <div class="teal-flow__node"><i class="fas fa-broom" aria-hidden="true"></i><strong>Transform</strong><span>clean / decompose</span></div>
    <div class="teal-flow__arrow" aria-hidden="true">→</div>
    <div class="teal-flow__node"><i class="fas fa-shapes" aria-hidden="true"></i><strong>Represent</strong><span>features / geometry</span></div>
    <div class="teal-flow__arrow" aria-hidden="true">→</div>
    <div class="teal-flow__node"><i class="fas fa-tags" aria-hidden="true"></i><strong>Measure</strong><span>codes / models</span></div>
    <div class="teal-flow__arrow" aria-hidden="true">→</div>
    <div class="teal-flow__node"><i class="fas fa-chart-line" aria-hidden="true"></i><strong>Analyze</strong><span>inspect / infer</span></div>
  </div>

  <div class="teal-core__note">
    <i class="fas fa-link" aria-hidden="true"></i>
    <span>Each durable transformation preserves links backward. You can ask not only <em>what is this result?</em> but also <em>what produced it, from which evidence, under which configuration?</em></span>
  </div>
</section>

<section class="teal-section" id="capabilities">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">CAPABILITIES</span>
    <h2>A common workspace across the text-analysis pipeline.</h2>
  </div>

  <div class="teal-capability-grid">
    <div class="teal-capability">
      <i class="fas fa-folder-tree" aria-hidden="true"></i>
      <h3>Corpora &amp; structure</h3>
      <p>Import CSV, JSONL, Parquet, Excel, folders, text, and PDFs; sample, subset, split, restrict, merge, join, aggregate, and restructure keyed data.</p>
    </div>
    <div class="teal-capability">
      <i class="fas fa-cubes" aria-hidden="true"></i>
      <h3>Representations</h3>
      <p>Build count and TF-IDF matrices, SVD/LSA, LDA, UMAP, Word2Vec, sentence-transformer, and contextual-transformer representations.</p>
    </div>
    <div class="teal-capability">
      <i class="fas fa-language" aria-hidden="true"></i>
      <h3>Linguistic structure</h3>
      <p>Decompose text with spaCy and work with parts of speech, dependencies, entities, coreference, semantic roles, and word senses.</p>
    </div>
    <div class="teal-capability">
      <i class="fas fa-ruler-combined" aria-hidden="true"></i>
      <h3>Coding &amp; measurement</h3>
      <p>Use dictionaries, lexicons, classical classifiers, frozen predictors, externally produced results, and audited machine-coded measurements.</p>
    </div>
    <div class="teal-capability">
      <i class="fas fa-magnifying-glass-chart" aria-hidden="true"></i>
      <h3>Explore &amp; inspect</h3>
      <p>Query keyed data, recover context, run KWIC and nearest-neighbor searches, summarize artifacts, compare representations, and visualize results.</p>
    </div>
    <div class="teal-capability">
      <i class="fas fa-clock-rotate-left" aria-hidden="true"></i>
      <h3>Project memory</h3>
      <p>Reuse named artifacts safely, inspect lineage and operation provenance, keep versioned memos, and logically delete, purge, or restore project objects.</p>
    </div>
  </div>
</section>

<section class="teal-section teal-quick-start" id="quick-start">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">QUICK START</span>
    <h2>A persistent analysis starts with a project.</h2>
  </div>

  <p>Create a project, import a corpus, translate it into a new Artifact, and query the result. The project can be reopened later with the same aliases, keys, lineage, and provenance intact.</p>

<pre class="teal-code"><code>import text_analysis_lab as teal
from text_analysis_lab import translators as tr

p = teal.Project.create("study.teal", name="Study")

docs = p.read_csv(
    "docs.csv",
    text_fields="text",
    metadata_fields=["group", "date"],
    alias="documents",
)

lengths = p.translate(
    tr.TextLength({"text": ["words", "characters"]}),
    docs,
    alias="document_lengths",
)["output"]

lengths.preview(20)</code></pre>

  <div class="teal-inline-links">
    <a href="https://github.com/zacthinks/text-analysis-lab#installation"><i class="fas fa-download" aria-hidden="true"></i> Installation</a>
    <a href="https://github.com/zacthinks/text-analysis-lab#quick-start"><i class="fas fa-book-open" aria-hidden="true"></i> Full quick start</a>
    <a href="https://github.com/zacthinks/text-analysis-lab"><i class="fab fa-github" aria-hidden="true"></i> Source</a>
  </div>
</section>

<section class="teal-section">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">PROJECT CENTER</span>
    <h2>Inspect the project without creating a second source of truth.</h2>
  </div>

  <p>The TeAL Project Center is a localhost browser interface backed directly by the project catalog. It is a view onto the same project you use from Python, not a parallel database or a separate analysis environment.</p>

  <div class="teal-feature-pair">
    <div class="teal-feature-card">
      <i class="fas fa-diagram-project" aria-hidden="true"></i>
      <div>
        <h3>Artifact Map</h3>
        <p>Browse the artifact graph, switch between lineage and operation-provenance views, inspect storage and dimensions, preview tables, and open artifact memos.</p>
      </div>
    </div>
    <div class="teal-feature-card">
      <i class="fas fa-note-sticky" aria-hidden="true"></i>
      <div>
        <h3>Memo Center</h3>
        <p>Browse and search project, standalone, artifact, operation, and operator memos; edit in Markdown; and inspect or restore version history.</p>
      </div>
    </div>
  </div>

<pre class="teal-code teal-code--compact"><code>p.launch_project_center()

# Or jump directly to a view
p.launch_artifact_map()
p.launch_memo_center()</code></pre>
</section>

<section class="teal-section teal-geco">
  <div class="teal-geco__copy">
    <span class="teal-section__kicker">TEAL + GECO</span>
    <h2>Programmatic infrastructure meets interactive development.</h2>
    <p>TeAL can hand compatible Artifacts to <a href="/geco/">GeCo</a> for interactive exploration, qualitative coding, and classifier development. Stable identity is preserved across the boundary, so human judgments and frozen predictors can return to TeAL as ordinary project objects for later analysis.</p>
  </div>
  <div class="teal-geco__flow" aria-label="TeAL and GeCo integration">
    <span>TeAL Artifacts</span>
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
    <span>Explore &amp; develop in GeCo</span>
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
    <span>Export codes / predictors</span>
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
    <span>Continue in TeAL</span>
  </div>
</section>

<section class="teal-section" id="cheat-sheet">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">CHEAT SHEET</span>
    <h2>The core command patterns on one page.</h2>
  </div>

  <p>The TeAL cheat sheet is organized around the things you actually do inside a project: start and open projects, inspect and query Artifacts, translate, restructure data, connect to GeCo, register external results, inspect provenance, memo decisions, visualize, reuse artifacts, and manage deletion and restoration.</p>

  <div class="teal-cheat-grid">
    <div>
      <strong>Start / open / import</strong>
      <code>Project.create(...)</code>
      <code>Project.open(...)</code>
      <code>p.read_csv(...)</code>
    </div>
    <div>
      <strong>Inspect / query</strong>
      <code>artifact.preview(...)</code>
      <code>artifact.query(...)</code>
      <code>artifact.get_context(...)</code>
    </div>
    <div>
      <strong>Transform</strong>
      <code>p.translate(...)</code>
      <code>p.sample(...)</code>
      <code>p.split(...)</code>
    </div>
    <div>
      <strong>Project memory</strong>
      <code>p.launch_project_center()</code>
      <code>p.add_standalone_memo(...)</code>
      <code>artifact.delete(...)</code>
    </div>
  </div>

  <p class="teal-cheat-note"><i class="fas fa-file-pdf" aria-hidden="true"></i> A printable one-page PDF cheat sheet is maintained alongside TeAL and will be linked here as part of the documentation pass.</p>
</section>

<section class="teal-section teal-resources">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">RESOURCES</span>
    <h2>Go deeper.</h2>
  </div>

  <div class="teal-resource-grid">
    <a href="https://github.com/zacthinks/text-analysis-lab">
      <i class="fab fa-github" aria-hidden="true"></i>
      <strong>Source code</strong>
      <span>Browse the repository and current README.</span>
    </a>
    <a href="https://github.com/zacthinks/text-analysis-lab#installation">
      <i class="fas fa-terminal" aria-hidden="true"></i>
      <strong>Installation</strong>
      <span>Set up the current development release.</span>
    </a>
    <a href="https://github.com/zacthinks/text-analysis-lab/issues">
      <i class="fas fa-circle-exclamation" aria-hidden="true"></i>
      <strong>Issues</strong>
      <span>Report a bug or follow active development.</span>
    </a>
    <a href="/geco/">
      <i class="fas fa-shapes" aria-hidden="true"></i>
      <strong>GeCo</strong>
      <span>Interactive qualitative exploration and measure development.</span>
    </a>
  </div>
</section>

</div>
