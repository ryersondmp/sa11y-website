---
layout: base
title: Settings
permalink: '/get-started/settings/'
order: 4
---

# {{title}}

Sa11y has additional settings and checks that can be enabled in the **Settings** tab.

## Developer checks
Developer checks include more complex issues that may require some code knowledge to fix. Although these checks can be toggled on and off, it does not mean they are unimportant! Depending on the website theme or plugin, they may not need to be tested every time. For example, some form plugins automatically provide a label for each form input.

<p><strong><i class="bi bi-journal-code"></i> Developers:</strong> You can use use <a href="/developers/props">props</a> to hide "Developer checks" from your content authors if necessary.</p>
<p><strong><i class="bi bi-wordpress"></i> WordPress admins:</strong> You can hide these checks from the plugin settings page.</p>

### Note on developer checks
Sa11y isn't designed to replace comprehensive automated tools, but to complement them. Sa11y doesn't check for complex developer issues like proper ARIA implementation.

<hr aria-hidden="true" class="my-5">

## Readability
Sa11y can **estimate** the readability score from all paragraphs and list content. A “good” readability score is an indication that your writing is understandable and easy to digest. It is based on the average length of sentences and words on your page, using a formula known as the [Flesch reading-ease test (Wikipedia).](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch_reading_ease) A "good" reading score is between 60 and 100. Sometimes, it may be difficult to achieve a good readability score. Remember that this feature is only used to **estimate** the readability of your content. It should only be used as a **reference,** and not an indication of conformance. Sa11y calculates the readability score based on all paragraph (&lt;p&gt; tags) and list content (&lt;li&gt; tags). A low score does not affect the pass or fail state of Sa11y.

### Tips to improve readability score
- Keep sentences around 15 words on average.
- Avoid sentences greater than 25 words.
- Split long sentences up, or use bullet points.
- Avoid complex words or words with many syllables.

<hr aria-hidden="true" class="my-5">

## Export results
Sa11y can export results into a CSV or HTML file. This file contains all of the warnings and errors found on a web page, including summaries of the issue and previews of the related element, when applicable.

In WordPress and Joomla, this feature is off by default.

<hr aria-hidden="true" class="my-5">

## Colour filters
Colour filters let you simulate various colour vision deficiencies (CVD) within a page. Use these colour filters on maps, charts, graphs, and other elements. CVD is caused by an abnormality in the cone cells of the retina in the eye. These cone cells are responsible for detecting color, and they come in three types: red, green, and blue. People with CVD have a deficiency or absence of one or more of these cone cell types, which affects their ability to distinguish certain colors.

### How to use colour filters

<p class="alert alert-primary">
   <strong>Try:</strong> While Sa11y is enabled, select the <strong>Settings</strong> tab, and then select the <strong>Colour Filter</strong> selection button. You can choose between four different colour filters.
</p>

- **Protanopia:** Unable to perceive red light.
- **Deuteranopia:** Unable to perceive green light.
- **Tritanopia:** Unable to perceive blue light.
- **Monochromacy:** Unable to perceive any red, green, and blue light. People with monochromacy see shades of gray.

Check for elements that are difficult to perceive or distinguish against other colours.

### Limitations
Colour filter simulations are not entirely accurate because they cannot accurately replicate how the brain of someone with CVD perceives colors. However, these colour filters can still be helpful in identifying potential color combinations that may be difficult for people with CVD to distinguish.

### About these colour filters
The colour filters used in Sa11y are from the [DaltonLens library.](https://daltonlens.org) To learn more about the different models and literature review, please check out: [Review of Open Source Color Blindness Simulations.](https://daltonlens.org/opensource-cvd-simulation/)

<script>
localStorage.setItem("sa11y-panel", "Opened");
localStorage.setItem("sa11y-settings", "Opened");
localStorage.removeItem("sa11y-images");
localStorage.removeItem("sa11y-outline");
</script>

{% set collectionName = "getstarted" %}
{% include "partials/pagination.njk" %}