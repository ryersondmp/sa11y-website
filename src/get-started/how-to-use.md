---
layout: base
title: How to use
permalink: '/get-started/how-to-use/'
order: 1
---

# {{title}}

Select the toggle in the bottom right corner. If using assistive technology, the button is labelled "Check Accessibility". You can also press <kbd>alt</kbd> <kbd>A</kbd> with a keyboard.

## Skip to issue
Use the "Skip to issue" button to quickly cycle through all annotations. The tooltip will automatically open. You can also press <kbd>alt</kbd> <kbd>S</kbd> or <kbd>alt</kbd> <kbd>&gt;</kbd> with a keyboard.

To go to the previous issue, press <kbd>alt</kbd> <kbd>W</kbd> or <kbd>alt</kbd> <kbd>&lt;</kbd>

### Hidden content
If you do not see an annotation, use the "Skip to issue" button to find it. An alert will pop up with a preview of the issue message. If you still do not know what the alert is referencing, it might be a false positive or an issue that a developer might need to fix.

<div class="text-center p-3 bg-light rounded-3">
    <img loading="lazy" class="img-fluid" width="800" src="{{ '/images/screenshots/skip-to-issue.webp' | url }}" alt="Screenshot of Skip to issue button and an alert stating that the item may be hidden in an accordion or tab component.">
</div>

<hr aria-hidden="true" class="my-5">

## Dismiss annotations
This feature gives content editors the ability to **temporarily dismiss** any “good” or “warning” annotation on a page while they are working.

**Dismiss**

Try dismissing the warning that appears when Sa11y is enabled. Then select the "Show dismissed" (<svg width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-90.2-70.7c.2-.4 .4-.9 .6-1.3c5.2-11.5 3.1-25-5.3-34.4l-7.4-8.3C497.3 319.2 480 273.9 480 226.8l0-18.8c0-77.4-55-142-128-156.8L352 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 19.2c-42.6 8.6-79 34.2-102 69.3L38.8 5.1zM406.2 416L160 222.1l0 4.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S115.4 416 128 416l278.2 0zm-40.9 77.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>)  button to restore the dismissed warning. This will restore all dismissed annotations on a page.

### Dismiss all
Some annotations have a “Dismiss all” button that will temporarily turn off that check for the current page.

Only some annotations have a “Dismiss all” button, for example:
- Links that open in a new tab or window without warning.
- Links that have identical text as another link, although it points to a different page.
- Links to PDF documents.
- Contrast that cannot be programmatically determined.

### Limitations
Dismissed annotations are unique to the web page you are editing. Dismissing a single warning will not dismiss every instance of that issue across your website. This feature uses your browser’s local web storage (a type of cookie) to “remember” which warnings you dismissed. If you clear your browser’s cache and cookies, all dismissed alerts will be restored.


<script>
localStorage.removeItem("sa11y-panel");
localStorage.removeItem("sa11y-settings");
localStorage.removeItem("sa11y-images");
localStorage.removeItem("sa11y-outline");
</script>

{% set collectionName = "getstarted" %}
{% include "partials/pagination.njk" %}