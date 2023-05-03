---
layout: base
title: Overview
permalink: '/overview/'
order: 1
---

# {{title}}
Most accessibility tools are designed for developers and often require knowledge of code to make sense of the results. Sa11y is designed for content authors and focuses on content related issues and successes.

## Checks
Sa11y has over 50 checks.

<div class="accordion" id="accordionExample" style="max-width: 800px;">
  <div class="accordion-item">
    <h3 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Errors
      </button>
    </h3>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul class="ul-dual">
            <li>Images
                <ul>
                    <li>Missing alternative text.</li>
                    <li>Alt text contains a file extension.</li>
                    <li>Alt text contains only placeholder text.</li>
                </ul>
            </li>
            <li>Links
                <ul>
                    <li>Nondescript link text like "learn more" or "click here".</li>
                    <li>Empty hyperlinks.</li>
                    <li>Links that only contain an icon font without an accessible name or label.</li>
                </ul>
            </li>
            <li>Tables
                <ul>
                    <li>Missing table headers.</li>
                    <li>Empty table headers.</li>
                    <li>Table contains semantic headings.</li>
                </ul>
            </li>
            <li>Headings
                <ul>
                    <li>Headings that skip levels.</li>
                    <li>Page does not start with a Heading 1 or Heading 2.</li>
                    <li>Empty headings.</li>
                    <li>Missing Heading 1.</li>
                </ul>
            </li>
            <li>Poor text contrast.</li>
            <li>Inputs missing labels.</li>
            <li>Page language not declared.</li>
            <li>Elements with duplicate IDs.</li>
            <li>Missing page title.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Warnings
      </button>
    </h3>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
          <ul class="ul-dual">
            <li>Headings
                <ul>
                    <li>Headings that are too long (Not a WCAG 2.1 requirement).</li>
                    <li>Suspiciously short blockquotes that may actually be headings.</li>
                    <li>Suspicious bold text that may actually be headings.</li>
                </ul>
            </li>
            <li>Images
                <ul>
                    <li>Decorative images</li>
                    <li>Hyperlinked images: ensure alt text describes link location.</li>
                    <li>Images containing redundant words in alt text like "image of" or "graphic of".</li>
                    <li>&lt;figure&gt; images that have duplicate alt and caption text.</li>
                    <li>&lt;figure&gt; images that are indicated as decorative and have caption text.</li>
                </ul>
            </li>
            <li>A list of items that should be converted into a semantic list.</li>
            <li>Large quantities of ALL CAPS/Uppercase.</li>
            <li>Contrast that cannot be programmatically determined, such as text with an image background.</li>
            <li>Closed captions for videos.</li>
            <li>Transcripts for podcasts and audio content.</li>
            <li>Twitter widgets that may be problematic for keyboard users.</li>
            <li>Reminder to manually review social media and other iFrame embeds</li>
            <li>Check PDF for accessibility or recommend to convert into an accessible web page.</li>
            <li>Links (Advanced)
                <ul>
                    <li>Links that open in a new tab without warning.</li>
                    <li>Links with identical names should have an equivalent purpose.</li>
                    <li>Links to PDF and other files without warning.</li>
                </ul>
            </li>
            <li>Underlined text.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Successes
      </button>
    </h3>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul>
            <li>Images that have alternative text.</li>
            <li>Links that have an accessible name using ARIA.</li>
        </ul>
      </div>
    </div>
  </div>
</div>


## Automatic
<div class="row">
    <div class="col-lg-8">
        <p>Sa11y does a quick scan after the page is fully loaded. If there are any errors or warnings, Sa11y will display a notification badge with the total number of issues detected. Red indicates errors, while yellow indicates there are warnings only. Although be sure to review your page even if there are no errors or warnings!</p>
    </div>
    <div class="col-lg-4">
        <div class="p-1 bg-light rounded-3">
            <img src="{{ '/images/screenshots/notification.webp' | url }}" alt="Three Sa11y toggles: one with a red notification badge, one yellow, and one without any badge." class="img-fluid" loading="lazy">
        </div>
    </div>
</div>

## States
Sa11y has three simple states.

<div class="row">
    <div class="col-lg-4">
        <div class="h-100 bg-light rounded-3">
            <img loading="lazy" class="img-fluid rounded-3" width="500" src="{{ '/images/screenshots/sa11y-error.webp' | url }}" alt="Screenshot of panel that shows 4 accessibility errors and 3 warnings.">
            <div class="p-3">
                <h3>Errors</h3>
                <p>Accessibility or usability issues are detected and need to be fixed.</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="h-100 bg-light rounded-3">
            <img loading="lazy" class="img-fluid rounded-3" width="500" src="{{ '/images/screenshots/sa11y-warning.webp' | url }}" alt="Screenshot of panel that shows 2 warnings.">
            <div class="p-3">
                <h3>Warnings</h3>
                <p>Warns you of potential accessibility or usability issues, and prompts you to manually <strong>review</strong> an element.</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="h-100 bg-light rounded-3">
            <img loading="lazy" class="img-fluid rounded-3" width="500" src="{{ '/images/screenshots/sa11y-no-errors.webp' | url }}" alt="Screenshot of panel that shows no accessibility errors or warnings.">
            <div class="p-3">
                <h3>Good</h3>
                <p>No apparent accessibility or usability issues are detected. A "thumbs up" to let you know you're good.</p>
            </div>
        </div>
    </div>
</div>

## Page outline
The Show Outline button displays the page's heading structure, similar to the table of contents for a book. The page outline gives you a visual idea of how each part is interconnected.

<div class="row">
    <div class="col-lg-6 text-center">
        <div class="p-3 h-100 bg-light rounded-3">
            <img loading="lazy" class="img-fluid" width="500" src="{{ '/images/screenshots/outline-errors.webp' | url }}" alt="Screenshot of the Page Outline panel with hierarchy issues.">
        </div>
    </div>
    <div class="col-lg-6 text-center">
        <div class="p-3 h-100 bg-light rounded-3">
            <img loading="lazy" class="img-fluid" width="500" src="{{ '/images/screenshots/outline-no-errors.webp' | url }}" alt="Screenshot of the Page Outline panel with a clean, good heading hierarchy.">
        </div>
    </div>
</div>

<hr class="mt-5" aria-hidden="true">

## Quality assurance
Creating an inclusive experience requires intention. Sa11y does not only flag images missing alt text, but you can easily review the alt text on **all** images for relevance and quality. Sa11y has several checks to ensure alt and link text follow best practices.

<p class="alert alert-primary">
   <strong>Try:</strong> Press <kbd>alt</kbd> <kbd>A</kbd> to enable Sa11y, and then review the alt text for each image!
</p>

<div class="row">
    <div class="col-lg-6">
        <div class="p-3 bg-light rounded-3">
            <img loading="lazy" class="img-fluid" src="{{ '/images/doggy3.jpg' | url }}" alt="Bear">
        </div>
    </div>
    <div class="col-lg-6">
        <div class="p-3 bg-light rounded-3">
            <img loading="lazy" class="img-fluid" src="{{ '/images/doggy1.jpg' | url }}" alt="doggy.jpg">
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-6">
        <div class="p-3 bg-light rounded-3">
            <a href="https://en.wikipedia.org/wiki/Dog" class="overlay-link">
                <div class="img-overlay">
                    <img loading="lazy" class="img-fluid" alt src="{{ '/images/doggy2.jpg' | url }}">
                    <div class="overlay">
                        <div class="text">Learn more about dogs.</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="p-3 bg-light rounded-3">
            <a href="https://en.wikipedia.org/wiki/Dog"><img loading="lazy" class="img-fluid" alt="About dogs on Wikipedia" src="{{ '/images/doggy4.jpg' | url }}"></a>
        </div>
    </div>
</div>

<hr class="mt-5" aria-hidden="true">

## Additional settings

<div class="row">
    <div class="col-lg-4">
        <p>Sa11y has four additional checks and a dark mode setting that can be enabled in the Settings tab. Although these checks can be toggled on and off, it does not mean they are not important! Depending on the website theme or plugin, they may not need to be tested for every time. For example, some form plugins automatically provide a label for each form input.</p>
        <p><strong><i class="bi bi-journal-code"></i> Developers:</strong> You can use use <a href="/developers/props">props</a> to hide these additional checks.</p>
        <p><strong><i class="bi bi-wordpress"></i> WordPress admins:</strong> You can hide these checks from the plugin settings page.</p>
    </div>
    <div class="col-lg-8">
        <img loading="lazy" class="img-fluid rounded-3" width="900" src="{{ '/images/screenshots/settings-panel.webp' | url }}" alt="Screenshot of settings panel in dark mode showing toggles for contrast, form labels, links (advanced), readability and dark mode. There is also a tooltip warning about links that open in a new tab without warning.">
    </div>
</div>

### Readability
Sa11y can **estimate** the readability score from all paragraphs and list content. A good readability score is an indication that your writing is understandable and easy to digest. It is based on the average length of sentences and words on your page, using a formula known as the [Flesch reading-ease test (Wikipedia).](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch_reading_ease) A "good" reading score is between 60 and 100. Sometimes it may be difficult to achieve a good readability score. Most of your pages may say "difficult". Remember that this feature is only used to **estimate** the readability of your content. It should only be used as a **reference,** and not an indication of conformance. Sa11y calculates the readability score based on all paragraph (&lt;p&gt; tags) and list content (&lt;li&gt; tags). A low score does not affect the pass or fail state of Sa11y.

#### Tips to improve score
- Keep sentences around 15 words on average.
- Avoid sentences greater than 25 words.
- Split long sentences up, or use bullet points.
- Avoid complex words or words with many syllables.

### Colour filters
Colour filters let you simulate various colour vision deficiencies (CVD) within a page. Use these colour filters on maps, charts, graphs, and other elements. CVD is caused by an abnormality in the cone cells of the retina in the eye. These cone cells are responsible for detecting color, and they come in three types: red, green, and blue. People with CVD have a deficiency or absence of one or more of these cone cell types, which affects their ability to distinguish certain colors.

You can choose between four different colour filters:

- **Protanopia:** Unable to perceive red light.
- **Deuteranopia:** Unable to perceive green light.
- **Tritanopia:** Unable to perceive blue light.
- **Monochromacy:** Unable to perceive any red, green, and blue light. People with monochromacy see shades of gray.

#### Limitations
Colour filter simulations are not entirely accurate because they cannot accurately replicate how the brain of someone with CVD perceives colors. However, these colour filters can still be helpful in identifying potential color combinations that may be difficult for people with CVD to distinguish.

#### About these colour filters
The colour filters used in Sa11y are from the [DaltonLens library.](https://daltonlens.org) To learn more about the different models and literature review, please check out: [Review of Open Source Color Blindness Simulations.](https://daltonlens.org/opensource-cvd-simulation/)

<hr class="mt-5" aria-hidden="true">

## Dismiss warnings
This feature gives content editors the ability to **temporarily dismiss** any warnings on a page while they are working. To restore all warnings on a page, simply select the “Show dismissed warnings” button.

### Limitations
Dismissed warnings are unique to the web page you are editing. Dismissing a single warning will not dismiss every instance of that issue across your website. This feature uses your browser’s local web storage (a type of cookie) to “remember” which warnings you dismissed. If you clear your browser’s cache and cookies, all dismissed alerts will be restored.

<hr class="mt-5" aria-hidden="true">

## How to use
Click the toggle in the bottom right corner. If using assistive technology, the button is labelled "Check Accessibility". You can also press <kbd>alt</kbd> <kbd>A</kbd> with a keyboard.

<div class="row">
    <div class="col-lg-6">
        <h3>Skip to issue</h3>
        <p>Use the "Skip to issue" button to quickly cycle through all annotations. The tooltip will automatically open. You can also press <kbd>alt</kbd> <kbd>S</kbd> or <kbd>alt</kbd> <kbd>&gt;</kbd> with a keyboard.</p>
        <p>To go to the previous issue, press <kbd>alt</kbd> <kbd>W</kbd> or <kbd>alt</kbd> <kbd>&lt;</kbd>.
    </div>
    <div class="col-lg-6">
        <h3>Hidden content</h3>
        <p>If you do not see an annotation, use the "Skip to issue" button to find it. An alert will pop up with a preview of the issue message. If you do not know what the alert is referencing, it might be a false positive or an issue that a developer might need to fix.</p>
    </div>
</div>

<div class="text-center p-3 bg-light rounded-3">
    <img loading="lazy" class="img-fluid" width="800" src="{{ '/images/screenshots/skip-to-issue.webp' | url }}" alt="Screenshot of Skip to issue button and an alert stating that the item may be hidden in an accordion or tab component.">
</div>

{% include "partials/pagination.njk" %}