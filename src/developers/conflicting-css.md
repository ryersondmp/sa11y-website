---
layout: base
title: Conflicting CSS
permalink: '/developers/conflicting-css/'
order: 3
---

# {{title}}
Sometimes annotations are unreachable because of conflicting CSS or because the issue is in a hidden location on the page. Using custom CSS or the [Customizer](https://wordpress.com/support/customizer/) within WordPress, you can adjust elements on the page when **Sa11y is active.**

Find the element you would like to change, and add `[data-sa11y-active="true"]` before it.

<p class="alert alert-primary">
   <strong>Try:</strong> For each example, use a mouse or keyboard <kbd>alt</kbd> <kbd>A</kbd> to toggle Sa11y on and off.
</p>

## Example #1
A simple example of revealing a hidden `<div>`.

<style>[data-sa11y-active="true"] #dog {display: block !important;}</style>
```css
[data-sa11y-active="true"] #dog {display: block;}
```

<div style="display: none" class="example mt-4 p-4" id="dog">
    <img loading="lazy" width="300" class="img-fluid" src="{{ '/images/doggy1.jpg' | url }}" alt="doggy.jpg">
</div>

## Example #2
Open all accordion panels to make it easier to review the page.
<style>[data-sa11y-active="true"] .accordion-collapse {display: block !important;}</style>
```css
[data-sa11y-active="true"] .accordion-collapse {display: block;}
```

<div class="accordion mt-4" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <img loading="lazy" width="300" class="img-fluid" src="{{ '/images/doggy2.jpg' | url }}" alt="Two miniature Schnauzer's laying on grass.">
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <img loading="lazy" width="300" class="img-fluid" src="{{ '/images/doggy3.jpg' | url }}">
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <img loading="lazy" width="300" class="img-fluid" src="{{ '/images/doggy1.jpg' | url }}" alt="placeholder">
      </div>
    </div>
  </div>
</div>

{% set collectionName = "developers" %}
{% include "partials/pagination.njk" %}
