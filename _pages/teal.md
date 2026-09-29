---
layout: single
title: "TeAL"
permalink: /teal/
author_profile: false
---

<div class="teal-landing">

<section class="teal-hero">
  <div class="teal-hero__eyebrow">TEXT ANALYSIS LAB</div>
  <h2>An end-to-end project environment for computer-assisted text analysis.</h2>
  <p class="teal-hero__lead">TeAL is an accessible and extensible framework and software environment designed to support transparent, intentional, rigorous, and reproducible multi-stage computer-assisted text analysis. A TeAL project is meant to carry an analysis from the first import through transformations, representations, measurement, validation, and downstream analysis while preserving the relationships that make those stages intelligible.</p>

  <div class="teal-actions">
    <a class="teal-button teal-button--primary" href="#quick-start"><i class="fas fa-bolt" aria-hidden="true"></i> Quick start</a>
    <a class="teal-button" href="#architecture"><i class="fas fa-diagram-project" aria-hidden="true"></i> Architecture</a>
    <a class="teal-button" href="/files/teal_cheat_sheet.pdf"><i class="fas fa-file-pdf" aria-hidden="true"></i> Cheat sheet</a>
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
    <h2>Text analysis is often a series of workflows, not a single model.</h2>
  </div>

  <p>Real text analyses move through many stages: importing and cleaning corpora, decomposing text, constructing representations, exploring patterns, developing measures, validating them, and carrying results into downstream analyses. In ordinary workflows, those stages can become scattered across notebooks, DataFrames, model objects, temporary files, and unrelated libraries. Along the way, lineage and provenance can disappear, metadata can become detached from the objects it describes, context can become difficult to recover, and reporting how a result was actually produced can become its own research project.</p>

  <p>TeAL keeps these pieces inside a single persistent project. Artifacts remain linked to the evidence and operations from which they were derived; inherited data and metadata can be recovered through lineage when the relationship permits it; and the project retains the structure needed to inspect, extend, rerun, and report a complicated analysis without manually reconstructing its history.</p>

  <div class="teal-principles">
    <div class="teal-principle">
      <i class="fas fa-door-open" aria-hidden="true"></i>
      <strong>Accessible</strong>
      <span>Common project infrastructure handles much of the bookkeeping, alignment, batching, persistence, and integration that researchers would otherwise have to build themselves.</span>
    </div>
    <div class="teal-principle">
      <i class="fas fa-puzzle-piece" aria-hidden="true"></i>
      <strong>Extensible</strong>
      <span>TeAL is organized around general operator and translator contracts rather than a fixed menu of methods, so new analytic tools can be integrated into the same project architecture.</span>
    </div>
    <div class="teal-principle">
      <i class="fas fa-route" aria-hidden="true"></i>
      <strong>Transparent</strong>
      <span>Stable keys, lineage, operation provenance, stored operator state, and explicit project structure preserve how derived objects relate to their sources.</span>
    </div>
    <div class="teal-principle">
      <i class="fas fa-note-sticky" aria-hidden="true"></i>
      <strong>Intentional</strong>
      <span>Versioned memos can travel with projects, artifacts, operations, and operators so methodological reasoning remains part of the analysis rather than an afterthought.</span>
    </div>
  </div>
</section>

<section class="teal-section" id="architecture">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">PROJECT ARCHITECTURE</span>
    <h2>The project is the unit of analysis management.</h2>
  </div>

  <p>A TeAL <code>Project</code> owns durable, keyed <code>Artifacts</code> and records the operations that connect them. The result is not a single linear pipeline. A project can branch into multiple representations, subsets, models, and analyses; new data can enter later; branches can be compared or recombined; and researchers can return to earlier artifacts without losing the relationships among them.</p>

  <div class="teal-architecture-grid">
    <div class="teal-architecture-card">
      <i class="fas fa-diagram-project" aria-hidden="true"></i>
      <div>
        <h3>Lineage and provenance</h3>
        <p>TeAL records both artifact-to-artifact lineage and the operations and operators that produced new artifacts. A downstream result remains connected to its sources and its production history.</p>
      </div>
    </div>
    <div class="teal-architecture-card">
      <i class="fas fa-tags" aria-hidden="true"></i>
      <div>
        <h3>Stable identity and metadata</h3>
        <p>Keys—not physical row order—align related artifacts. When lineage permits, data and metadata remain available lazily from upstream artifacts instead of having to be copied into every descendant.</p>
      </div>
    </div>
    <div class="teal-architecture-card">
      <i class="fas fa-database" aria-hidden="true"></i>
      <div>
        <h3>Economical storage</h3>
        <p>Structural operations such as sampling, subsetting, splitting, and rekeying can create keys-only descendants that inherit their underlying representation through lineage rather than duplicating the full data payload.</p>
      </div>
    </div>
    <div class="teal-architecture-card">
      <i class="fas fa-gauge-high" aria-hidden="true"></i>
      <div>
        <h3>Scalable execution</h3>
        <p>The execution layer supports batched processing and, where an operator permits it, parallel translation. Individual tools can inherit these project-level execution patterns instead of reimplementing them from scratch.</p>
      </div>
    </div>
    <div class="teal-architecture-card">
      <i class="fas fa-cubes" aria-hidden="true"></i>
      <div>
        <h3>Extensible translators</h3>
        <p>TeAL's translator contract describes inputs, outputs, lineage, state, and execution rather than assuming a particular kind of model. New representations and analytic procedures can therefore participate in the same artifact graph.</p>
      </div>
    </div>
    <div class="teal-architecture-card">
      <i class="fas fa-align-left" aria-hidden="true"></i>
      <div>
        <h3>Context stays reachable</h3>
        <p>Researchers can move from derived objects back toward the source evidence, retrieve neighboring observations, and request inherited metadata when interpreting results.</p>
      </div>
    </div>
  </div>
</section>

<section class="teal-section teal-scope">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">WHAT LIVES INSIDE TEAL?</span>
    <h2>A growing analytic ecosystem, built on the same architecture.</h2>
  </div>

  <p>TeAL already includes tools for corpus ingestion and restructuring, text cleaning and linguistic decomposition, sparse and dense representations, dimensionality reduction, topic models, embeddings, dictionaries and lexicons, supervised prediction, external-result registration, visualization, and audited measurement. Those built-ins are useful, but they are not the boundary of the system: they are implementations of a more general architecture designed to accommodate new methods as they appear.</p>

  <details class="teal-details">
    <summary>Examples of currently implemented tools</summary>
    <div class="teal-details__body">
      <span>CSV / JSONL / Parquet / Excel / TXT / PDF ingestion</span>
      <span>Sampling, subsetting, splitting, joins, merges, aggregation, rekeying</span>
      <span>spaCy sentence and token decomposition</span>
      <span>Count matrices, TF-IDF, SVD/LSA, LDA, UMAP, Word2Vec</span>
      <span>Sentence-transformer and contextual-transformer representations</span>
      <span>Dictionaries, lexicons, classifiers, and frozen predictors</span>
      <span>Coreference, semantic-role labeling, and word-sense disambiguation</span>
      <span>Queries, KWIC, nearest neighbors, summaries, diagnostics, and visualizations</span>
    </div>
  </details>
</section>

<section class="teal-section teal-quick-start" id="quick-start">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">QUICK START</span>
    <h2>Start with a project. Keep working in the project.</h2>
  </div>

  <p>A TeAL analysis begins by creating a project and importing data into it. Transformations produce new durable artifacts inside that project; aliases make important objects easy to recover; and reopening the project later restores access to the same project structure.</p>

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

lengths.query(
    data_columns=["text"],
    metadata_columns=["group", "text_words"],
    metadata_mode="full",
    limit=20,
)

# Later
p = teal.Project.open("study.teal")
docs = p.get_artifact("documents")</code></pre>

  <div class="teal-inline-links">
    <a href="https://github.com/zacthinks/text-analysis-lab#installation"><i class="fas fa-download" aria-hidden="true"></i> Installation</a>
    <a href="https://github.com/zacthinks/text-analysis-lab#quick-start"><i class="fas fa-book-open" aria-hidden="true"></i> Full quick start</a>
    <a href="/files/teal_cheat_sheet.pdf"><i class="fas fa-file-pdf" aria-hidden="true"></i> Cheat sheet</a>
  </div>
</section>

<section class="teal-section">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">PROJECT CENTER</span>
    <h2>Use a visual interface where a scripting interface is the wrong tool.</h2>
  </div>

  <p>Not every part of project management is pleasant or informative in code. The TeAL Project Center is a localhost browser interface backed directly by the project catalog, giving researchers visual access to the same project rather than creating a second source of truth.</p>

  <div class="teal-feature-pair">
    <div class="teal-feature-card">
      <i class="fas fa-diagram-project" aria-hidden="true"></i>
      <div>
        <h3>Artifact Map</h3>
        <p>Browse a branching project graph, switch between lineage and operation-provenance views, inspect artifacts and operations, preview tables, and follow how derived objects relate to one another.</p>
      </div>
    </div>
    <div class="teal-feature-card">
      <i class="fas fa-note-sticky" aria-hidden="true"></i>
      <div>
        <h3>Memo Center</h3>
        <p>Browse and search project, standalone, artifact, operation, and operator memos; write in Markdown; and inspect or restore version history.</p>
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
    <p>TeAL can hand compatible Artifacts to <a href="/geco/">GeCo</a> for interactive exploration, qualitative coding, and classifier development. Stable identity is preserved across the boundary, so human judgments and frozen predictors can return to TeAL as project artifacts for subsequent analysis.</p>
  </div>
  <div class="teal-geco__flow" aria-label="TeAL and GeCo integration">
    <span>TeAL project</span>
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
    <span>Explore and develop in GeCo</span>
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
    <span>Return codes or predictors</span>
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
    <span>Continue in TeAL</span>
  </div>
</section>

<section class="teal-section teal-cheat" id="cheat-sheet">
  <div class="teal-cheat__copy">
    <span class="teal-section__kicker">CHEAT SHEET</span>
    <h2>One-page TeAL reference.</h2>
    <p>The printable cheat sheet covers the core project model and common commands for importing, querying, translating, restructuring, working with GeCo, inspecting provenance, memoing, visualizing, and managing artifacts.</p>
  </div>
  <a class="teal-cheat__pdf" href="/files/teal_cheat_sheet.pdf">
    <i class="fas fa-file-pdf" aria-hidden="true"></i>
    <strong>TeAL Cheat Sheet</strong>
    <span>Open PDF</span>
  </a>
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
    <a href="/files/teal_cheat_sheet.pdf">
      <i class="fas fa-file-pdf" aria-hidden="true"></i>
      <strong>Cheat sheet</strong>
      <span>Open the one-page command reference.</span>
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
