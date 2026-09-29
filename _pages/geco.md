---
layout: single
title: "GeCo"
permalink: /geco/
author_profile: false
---

<div class="teal-landing geco-landing">

<section class="teal-hero geco-hero">
  <div class="teal-hero__eyebrow">GEOMETRIC CODER</div>
  <h2>Qualitative analysis across multiple representations, from exploration to computational extension.</h2>
  <p class="teal-hero__lead">GeCo is an interactive environment for exploring data across multiple researcher-chosen representations. It formalizes and scales qualitative analysis, supporting contextual interpretation, comparison, coding, and memoing alongside the development of codes that can be extended across a corpus using supervised models.</p>

  <div class="teal-actions">
    <a class="teal-button teal-button--primary" href="#quick-start"><i class="fas fa-bolt" aria-hidden="true"></i> Quick start</a>
    <a class="teal-button" href="#workflow"><i class="fas fa-route" aria-hidden="true"></i> Workflow</a>
    <a class="teal-button" href="#interface"><i class="fas fa-window-maximize" aria-hidden="true"></i> Interface</a>
    <a class="teal-button" href="https://github.com/zacthinks/GeCo"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
  </div>

  <div class="teal-badges">
    <span><i class="fas fa-flask" aria-hidden="true"></i> Pre-alpha 0.8.15</span>
    <span><i class="fas fa-window-maximize" aria-hidden="true"></i> Local browser interface</span>
    <span><i class="fab fa-python" aria-hidden="true"></i> Python 3.11+</span>
    <span><i class="fas fa-scale-balanced" aria-hidden="true"></i> MIT License</span>
  </div>
</section>

<section class="teal-section">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">WHY GECO?</span>
    <h2>Use computation to support qualitative inquiry on qualitative terms.</h2>
  </div>

  <p>Qualitative analysis depends on close reading, context, comparison, interpretation, revisiting, memoing, and the gradual development and refinement of concepts. GeCo keeps those practices at the center while adding computational ways to organize attention: researchers can view the same observations through different representations, move deliberately among neighborhoods and outliers, search and filter the corpus, compare cases in context, and preserve the analytic encounters through which codes develop.</p>

  <p>The representations are not interpretations. Similarity, distance, neighborhoods, isolation, and model disagreement provide candidate relations that a researcher can inspect; they do not decide what a case means or whether a code is valid. GeCo uses those relations to make purposeful comparison easier, then lets researchers use their own judgments to guide what the system shows them next.</p>

  <div class="teal-principles">
    <div class="teal-principle">
      <i class="fas fa-user-pen" aria-hidden="true"></i>
      <strong>Researcher-directed</strong>
      <span>The researcher determines what matters, what a code means, which comparisons are useful, and whether a proposed assignment should be accepted.</span>
    </div>
    <div class="teal-principle">
      <i class="fas fa-shapes" aria-hidden="true"></i>
      <strong>Multiple representations</strong>
      <span>No single geometry is treated as the true structure of a corpus. Different representations make different relations available for inspection.</span>
    </div>
    <div class="teal-principle">
      <i class="fas fa-align-left" aria-hidden="true"></i>
      <strong>Context-preserving</strong>
      <span>Navigation, coding, and model recommendations remain connected to the surrounding source context rather than reducing observations to isolated points.</span>
    </div>
    <div class="teal-principle">
      <i class="fas fa-bridge" aria-hidden="true"></i>
      <strong>Qualitative to computational</strong>
      <span>Human-developed codes can become the basis for supervised models that help direct further review and extend developed judgments across a corpus.</span>
    </div>
  </div>
</section>

<section class="teal-section" id="workflow">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">GEOMETRIC CODING</span>
    <h2>A workflow for making comparison more purposeful.</h2>
  </div>

  <p>Geometric coding begins before the researcher has committed the corpus to a single substantive coding scheme. General-purpose representations make the material provisionally navigable, while qualitative judgment determines what is analytically meaningful. The workflow remains iterative: exploration can reshape codes, coding can redirect exploration, and model recommendations can expose new examples, counterexamples, ambiguities, or boundaries.</p>

  <div class="geco-workflow-grid">
    <div class="geco-workflow-card">
      <div class="geco-workflow-card__number">1</div>
      <div>
        <h3>Represent broadly</h3>
        <p>Place the same observations in several researcher-chosen geometries—lexical, semantic, metadata-based, or otherwise—so that no single representation determines how the corpus is organized.</p>
      </div>
    </div>
    <div class="geco-workflow-card">
      <div class="geco-workflow-card__number">2</div>
      <div>
        <h3>Explore purposefully</h3>
        <p>Navigate neighborhoods and outliers, move toward or away from a focal case, search literally or semantically, filter on metadata, revisit prior encounters, and read observations in context.</p>
      </div>
    </div>
    <div class="geco-workflow-card">
      <div class="geco-workflow-card__number">3</div>
      <div>
        <h3>Develop through comparison</h3>
        <p>Create and revise codes through examples, counterexamples, uncertain cases, contextual reading, and memos. Navigation and interpretation happen together rather than in separate stages.</p>
      </div>
    </div>
    <div class="geco-workflow-card">
      <div class="geco-workflow-card__number">4</div>
      <div>
        <h3>Apply and review</h3>
        <p>When a code is sufficiently developed, code-specific classifiers and active-learning recommendations can help locate informative or likely cases. Machine proposals remain inspectable and reviewable before they become assignments.</p>
      </div>
    </div>
  </div>

  <div class="geco-workflow-note">
    <i class="fas fa-arrows-rotate" aria-hidden="true"></i>
    <span>This is not a one-way pipeline. Researchers can move among representations, exploration, coding, model development, and review as the analysis changes.</span>
  </div>
</section>

<section class="teal-section" id="interface">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">THE INTERFACE</span>
    <h2>The software is the workspace.</h2>
  </div>

  <p>GeCo is designed around a visual browser interface rather than around a Python API. The current pre-alpha release still uses Python to create and configure a project, but the analytic work itself is organized into five connected workspaces. The longer-term aim is to make project setup visual as well, so researchers should not need to become programmers simply to use computational assistance in qualitative analysis.</p>

  <div class="geco-workspace-grid">
    <div class="geco-workspace-card">
      <i class="fas fa-compass" aria-hidden="true"></i>
      <h3>Explore</h3>
      <p>Move through geometries and views; search, filter, and navigate; read observations in context; create codes; assign Present, Absent, or Unsure judgments; and write linked memos without leaving the corpus map.</p>
    </div>
    <div class="geco-workspace-card">
      <i class="fas fa-chart-line" aria-hidden="true"></i>
      <h3>Develop</h3>
      <p>Train code-specific classifiers, compare model families or committees, inspect predictions, and use active-learning recommendations such as most likely, least likely, most uncertain, or greatest disagreement.</p>
    </div>
    <div class="geco-workspace-card">
      <i class="fas fa-list-check" aria-hidden="true"></i>
      <h3>Apply &amp; Review</h3>
      <p>Generate a reviewable draft of model proposals, inspect probabilities and provenance, make individual or bulk decisions, and commit only the judgments the researcher has actually reviewed.</p>
    </div>
    <div class="geco-workspace-card">
      <i class="fas fa-tags" aria-hidden="true"></i>
      <h3>Codes</h3>
      <p>Search and revise code descriptions, inspect positive extensions, manage teaching examples, and examine coded observations within registered geometries and views.</p>
    </div>
    <div class="geco-workspace-card">
      <i class="fas fa-note-sticky" aria-hidden="true"></i>
      <h3>Memos</h3>
      <p>Write and version project memos, organize them with hashtags, link them directly to evidence, and follow those references back into the corpus.</p>
    </div>
  </div>
</section>

<section class="teal-section geco-bridge">
  <div class="geco-bridge__copy">
    <span class="teal-section__kicker">FROM CODING TO COMPUTATIONAL EXTENSION</span>
    <h2>Qualitative coding and supervised learning can be parts of the same workflow.</h2>
    <p>In GeCo, classifiers are attached to researcher-defined codes rather than treated as separate analytic products. Human judgments provide the evidence from which a classifier learns; the classifier can then recommend cases that may sharpen a boundary, expose disagreement, or extend an established code; and those recommendations return to the researcher for interpretation and review.</p>
    <p>This makes supervised learning an extension of qualitative code development rather than a handoff from a qualitative phase to an unrelated computational phase. Scale becomes a consequence of the workflow, not its defining purpose.</p>
  </div>
  <div class="geco-bridge__flow" aria-label="Qualitative coding and supervised learning in GeCo">
    <span>Read, compare, interpret</span>
    <i class="fas fa-arrow-down" aria-hidden="true"></i>
    <span>Develop a code</span>
    <i class="fas fa-arrow-down" aria-hidden="true"></i>
    <span>Train from human judgments</span>
    <i class="fas fa-arrow-down" aria-hidden="true"></i>
    <span>Recommend informative cases</span>
    <i class="fas fa-arrow-down" aria-hidden="true"></i>
    <span>Review, revise, and continue</span>
  </div>
</section>

<section class="teal-section teal-quick-start" id="quick-start">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">QUICK START</span>
    <h2>Create the workspace, then work in the interface.</h2>
  </div>

  <p>Today, a GeCo project is configured in Python by supplying a corpus, its stable keys, the text field, and one or more geometries. Once the project exists, <code>launch()</code> opens the local visual workspace in the browser.</p>

<pre class="teal-code"><code>import pandas as pd

from geometric_coder import GeometricCoder
from geometric_coder.recipes import lemma_tfidf, semantic_english

rows = pd.read_csv("documents.csv")

coder = GeometricCoder.create(
    project_dir="study.geco",
    data=rows,
    keys=["document_id", "sentence_id"],
    text="text",
    modality="text",
    metadata=["speaker"],
    geometries={
        "lexical": lemma_tfidf(),
        "semantic": semantic_english(),
    },
)

coder.launch()</code></pre>

  <div class="teal-inline-links">
    <a href="https://github.com/zacthinks/GeCo#installation"><i class="fas fa-download" aria-hidden="true"></i> Installation</a>
    <a href="https://github.com/zacthinks/GeCo#quick-start"><i class="fas fa-book-open" aria-hidden="true"></i> Full quick start</a>
    <a href="https://github.com/zacthinks/GeCo"><i class="fab fa-github" aria-hidden="true"></i> Source</a>
  </div>
</section>

<section class="teal-section teal-geco geco-teal">
  <div class="teal-geco__copy">
    <span class="teal-section__kicker">GECO + TEAL</span>
    <h2>Interactive qualitative work inside a larger analytic project.</h2>
    <p>GeCo can be used on its own, but it also integrates with <a href="/teal/">TeAL</a>. TeAL can supply a fixed document universe together with one or more representations and views; GeCo can then provide the interactive environment for exploration, coding, and classifier development. Human codes and frozen predictors can return to TeAL as durable artifacts for subsequent analysis.</p>
  </div>
  <div class="teal-geco__flow" aria-label="TeAL and GeCo integration">
    <span>TeAL project artifacts</span>
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
    <span>Explore and develop in GeCo</span>
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
    <span>Export codes or predictors</span>
    <i class="fas fa-arrow-right" aria-hidden="true"></i>
    <span>Continue in TeAL</span>
  </div>
</section>

<section class="teal-section geco-scope">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">CURRENT SCOPE</span>
    <h2>Exploratory by design.</h2>
  </div>

  <p>GeCo is currently an exploratory environment for qualitative inquiry and measure development. Its geometries, classifiers, proposals, and diagnostic views help researchers explore, compare, develop, and extend interpretations; they are not presented as confirmatory statistical evidence on their own. Downstream validation and inference belong in the larger research design and can be carried out elsewhere, including through TeAL.</p>

  <details class="teal-details">
    <summary>Examples of current capabilities</summary>
    <div class="teal-details__body">
      <span>Multiple lexical and semantic geometries with transform-capable views</span>
      <span>Literal, regex, semantic, interval, and metadata filtering</span>
      <span>Neighborhood, outlier, random, similarity, and disagreement navigation</span>
      <span>Contextual reading, contiguous span coding, teaching examples, and versioned memos</span>
      <span>Seven code-specific classifier families plus classifier committees</span>
      <span>Active-learning recommendations and prediction-geometry views</span>
      <span>Reviewable Apply drafts with auditable commits and preserved provenance</span>
      <span>Incremental corpus ingestion and externally backed TeAL representations</span>
    </div>
  </details>
</section>

<section class="teal-section teal-resources">
  <div class="teal-section__heading">
    <span class="teal-section__kicker">RESOURCES</span>
    <h2>Go deeper.</h2>
  </div>

  <div class="teal-resource-grid geco-resource-grid">
    <a href="https://github.com/zacthinks/GeCo">
      <i class="fab fa-github" aria-hidden="true"></i>
      <strong>Source code</strong>
      <span>Browse the repository and current README.</span>
    </a>
    <a href="https://github.com/zacthinks/GeCo#installation">
      <i class="fas fa-terminal" aria-hidden="true"></i>
      <strong>Installation</strong>
      <span>Set up the current pre-alpha release.</span>
    </a>
    <a href="/research/#geometric-coding">
      <i class="fas fa-file-lines" aria-hidden="true"></i>
      <strong>Geometric Coding</strong>
      <span>Read the research-project description and methodological framing.</span>
    </a>
    <a href="/teal/">
      <i class="fas fa-diagram-project" aria-hidden="true"></i>
      <strong>TeAL</strong>
      <span>Connect GeCo to a persistent multi-stage text-analysis project.</span>
    </a>
    <a href="https://github.com/zacthinks/GeCo/issues">
      <i class="fas fa-circle-exclamation" aria-hidden="true"></i>
      <strong>Issues</strong>
      <span>Report a bug or follow active development.</span>
    </a>
  </div>
</section>

</div>
