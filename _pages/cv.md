---
layout: single
title: "CV (PDF)"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

{% assign cv_url = '/files/Zachary_Lim_CV.pdf' | relative_url %}

<div class="pdf-container" style="max-width: 1000px; margin: 0 auto;">
  <div class="pdf-actions" style="margin-bottom: 0.75rem; display:flex; justify-content: flex-end; gap: 0.75rem;">
    <a class="btn btn--primary" href="{{ cv_url }}" target="_blank" rel="noopener">Open PDF</a>
    <a class="btn" href="{{ cv_url }}" download>Download</a>
  </div>

  <object data="{{ cv_url }}" type="application/pdf" width="100%" height="1000" style="border: 1px solid #e5e7eb; border-radius: 6px;">
    <p>Your browser can’t display PDFs inline. You can <a href="{{ cv_url }}" target="_blank" rel="noopener">open the CV in a new tab</a> or <a href="{{ cv_url }}" download>download it</a>.</p>
  </object>
</div>

<noscript>
  <p>JavaScript is disabled. <a href="{{ cv_url }}" target="_blank" rel="noopener">Open the CV</a>.</p>
</noscript>
