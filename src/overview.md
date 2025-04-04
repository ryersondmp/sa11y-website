---
layout: base
title: Overview
permalink: '/overview/'
order: 1
---

# {{title}}
Most accessibility tools are designed for developers and often require knowledge of code to make sense of the results. Sa11y is designed for content authors and has a focus on content related issues and successes. Sa11y visually highlights issues at the source with a simple tooltip on how to fix them.

Sa11y includes some developer related checks, but it is not a comprehensive code analysis tool, nor is it a [web accessibility overlay.](https://www.a11yproject.com/posts/should-i-use-an-accessibility-overlay/) Sa11y works best in an accessibility-ready theme or website.

## What does "Sa11y" mean
"a11y" is a numeronym for the word "accessibility," where *11* represents the number of letters between *a* and *y*. The use of "a11y" on the internet is mostly used to identify content or tools related to digital accessibility. The "S" in Sa11y stands for "straightforward" or "simple," conveying the idea of "straightforward accessibility."

## Checks
Sa11y helps identify accessibility issues with images, links, heading structure, and contrast. It also prompts you to review other things, like closed captions for videos, excessive uppercase letters, text that is too small, and much more.

Building an inclusive experience requires intention. Sa11y is designed to facilitate **quality** content accessibility. For example, it not only flags missing alt text but also lets you review alt text across all images to ensure relevance and quality.

For developers, Sa11y checks for issues like missing page titles, unlabelled buttons and form elements. However, it does not detect invalid ARIA attributes.

In total, [Sa11y has over 80 checks]({{ '/get-started/checks/' | url }}).

## Automatic
Sa11y does a quick scan after the page is fully loaded. If there are any errors or warnings, Sa11y will display a notification badge with the total number of issues detected. Red indicates errors, while yellow indicates there are warnings only. Be sure to review your page even if there are no errors or warnings!

<img width="300" src="{{ '/images/screenshots/notification.webp' | url }}" alt="Three Sa11y toggles: one with a red notification badge, one yellow, and one without any badge." class="img-fluid" loading="lazy">

## States
Sa11y has three states.

<div class="row">
    <div class="col-lg-4">
        <div class="h-100 bg-light rounded-3">
            <div class="text-center pt-4">
              <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#D30016" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
            </div>
            <div class="p-3">
                <h3>Errors</h3>
                <p>Accessibility or usability issues are detected and need to be fixed.</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="h-100 bg-light rounded-3">
            <div class="text-center pt-4">
              <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#966f0d" d="M504 256c0 137-111 248-248 248S8 393 8 256C8 119.1 119 8 256 8s248 111.1 248 248zM262.7 90c-54.5 0-89.3 23-116.5 63.8-3.5 5.3-2.4 12.4 2.7 16.3l34.7 26.3c5.2 3.9 12.6 3 16.7-2.1 17.9-22.7 30.1-35.8 57.3-35.8 20.4 0 45.7 13.1 45.7 33 0 15-12.4 22.7-32.5 34C247.1 238.5 216 254.9 216 296v4c0 6.6 5.4 12 12 12h56c6.6 0 12-5.4 12-12v-1.3c0-28.5 83.2-29.6 83.2-106.7 0-58-60.2-102-116.5-102zM256 338c-25.4 0-46 20.6-46 46 0 25.4 20.6 46 46 46s46-20.6 46-46c0-25.4-20.6-46-46-46z"/></svg>
            </div>
            <div class="p-3">
                <h3>Warnings</h3>
                <p>Warns you of potential accessibility or usability issues, and prompts you to manually <strong>review</strong> an element.</p>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="h-100 bg-light rounded-3">
         <div class="text-center pt-4">
            <svg fill="#36844e" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M173.9 439.4l-166.4-166.4c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.7 432.1 72.6c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2l-294.4 294.4c-10 10-26.2 10-36.2 0z"/></svg>
         </div>
          <div class="p-3">
              <h3>Good</h3>
              <p>No apparent accessibility or usability issues are detected. A "thumbs up" to let you know you're good.</p>
          </div>
        </div>
    </div>
</div>

<hr class="mt-5" aria-hidden="true">
<nav aria-label="Pagination" class="pt-4">
  <ul class="pagination justify-content-center">
    <li class="mx-2"><a class="btn btn-sa11y" href="{{ '/get-started/how-to-use/' | url }}">Next: How to use <i class="bi bi-arrow-right"></i></a></li>
 </ul>
</nav>
