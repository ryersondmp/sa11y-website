---
layout: base
title: Props & methods
permalink: '/developers/props/'
order: 2
---

<style>pre {margin-bottom: 3rem !important} </style>

# {{title}}

Props allow you to easily customize the experience for content authors. For example:
1. Set the target area to check. If your content authors can't edit it, don't flag it!
2. Ignore entire sections of a page.
3. Add exclusions to ignore false positives.
4. Turn off specific modules or checks.

## Example
```js
const sa11y = new Sa11y({
  checkRoot: "main",
  readabilityRoot: "main",
  formLabelsPlugin: false,
  containerIgnore: "#pagination, aside",
});
```

## Target area and exclusions
Identify elements by [CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp) or [HTML sectioning elements.](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html) Use a comma to pass multiple selector unless otherwise indicated.

### checkRoot
String. Input a **single selector** to scan a specific region of the page. This selector should exist on every page of your website. For example, pass `main` for the main content area.

```js
checkRoot: 'body',
```

### containerIgnore
String. Ignore specific regions of the page.

```js
containerIgnore: '.sa11y-ignore',
```

### contrastIgnore
String. Ignore specific elements from the contrast check.

```js
contrastIgnore: '.sr-only, [role="menu"] *',
```

### outlineIgnore
String. Exclude specific headings from appearing in the Page Outline panel. For example, visually hidden headings that may not make sense to sighted content editors.

```js
outlineIgnore: '',
```

### headerIgnore
String. Ignore specific headings on the page. These headings will not be annotated or labeled, nor will they appear in the Page Outline.

```js
headerIgnore: '',
```

### imageIgnore
String. Ignore specific images on the page.

```js
imageIgnore: '',
```

### linkIgnore
String. Ignore specific links on the page.

```js
linkIgnore: 'nav, [role="navigation"]',
```

### linkIgnoreSpan
String. Ignore elements within a link or image link to improve accuracy of link checks.

```js
linkIgnoreSpan: '',
```


<div class="p-4 mb-4 bg-light rounded-3">

#### Example
The contents of `<span class="sr-only">` will be ignored, and the non-descript link will display the appropriate error annotation.

```html
<a href="#">learn more <span class="sr-only">external link</span></a>

<script>
  const sa11y = new Sa11y({
    linkIgnoreSpan: '.sr-only',
  });
</script>
```

<p class="alert alert-primary mt-4">
   <strong>Try:</strong> Press <kbd>alt</kbd> <kbd>A</kbd> to enable Sa11y.
</p>

<a href="#" class="mt-3">learn more <span class="sr-only-example bg-dark p-1 text-white rounded">external link</span></a>

</div>

### linkIgnoreStrings
String. An alternative prop to `linkIgnoreSpan`. Pass a string of regex that matches specific words or phrases. For example, `"\(External\)|\(Opens new tab\)"`.

```js
linkIgnoreStrings: '',
```

### linksToFlag
String. Check for unwanted URLs, such as those pointing to development environments. For example, `a[href*="dev."]`

```js
linksToFlag: '',
```

## Other features
Features that may help with integrations into various content management systems or frameworks.

### delayCheck
Integer. Defer the initial page check by a customizable delay of x milliseconds. Useful for accommodating slower-loading JavaScript elements. For example, pass `500` to delay the initial check by 500 milliseconds. Available as of 3.0.9.

```js
delayCheck: 0,
```

### showGoodLinkButton
Boolean. Show "Good" annotations on links with an accessible name that was defined with an `aria-label` or `aria-labelledby` attribute. Sometimes content authors may wonder why some "learn more" links are not flagged as an error.

```js
showGoodLinkButton: true,
```

### detectSPArouting
Boolean. Detects URL changes and re-checks the page. This prop is designed to improve usability when testing JavaScript rendered content or single page applications (SPA).

```js
detectSPArouting: false,
```

### doNotRun
String. Using a comma seperated list, provide selectors to unique pages where you do not want Sa11y to appear or check.

```js
doNotRun: '',
```

### dismissAnnotations
Boolean. Give content editors the ability to dismiss any warnings.

```js
dismissAnnotations: true,
```

### headless
Boolean. Run checks without the GUI (graphical user interface).

```js
headless: false,
```

### selectorPath
Boolean. Generates a simple CSS selector path of the element within the `results` array.

```js
selectorPath: false,
```

### shadowComponents
String. Provide a list of all known web components to check.

```js
shadowComponents: '',
```

### autoDetectShadowComponents
Boolean. Automatically check every element on the page for an open shadow DOM, and check for issues within them.

```js
autoDetectShadowComponents: false,
```

### panelPosition
String. Move position of panel in any four corners. Choose from `top-left`, `top-right`, `left`, and `right`.

```js
panelPosition: 'right',
```

**Accessibility note:** When the panel is positioned to the left side, the CSS property `flex-direction: row-reverse` is used to reverse the items within the main panel status which contains the issue count, Skip-to-issue button and Dismiss button. This causes a [disconnect between the visual order and DOM order.](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#accessibility_concerns)

### showHinPageOutline
Boolean. Prefix each item within the Page Outline with an H.

```js
showHinPageOutline: false,
```

### customChecks
Boolean. If you develop your own custom checks within `sa11y-custom-checks.js`, you must set this property to `true`.

```js
customChecks: false,
```

## Customizing rulesets
Use these props to customize specific rulesets.

### nonConsecutiveHeadingIsError
Boolean. Set to `false` if you would like skipped headings to be flagged as a warning instead. By default Sa11y flags skipped headings as an error, however, this is not a WCAG failure.

```js
nonConsecutiveHeadingIsError: true,
```

### flagLongHeadings
Boolean. Flag headings longer than 170 characters. This is not a WCAG criterion.

```js
flagLongHeadings: true,
```

### missingH1
Boolean. Set to `false` if you would like to turn off this ruleset.

```js
missingH1: true,
```

### altTextMaxCharLength
Integer. Modify the alt text character count for warning message about excessively long alt.

```js
altTextMaxCharLength: 250,
```

### headingMaxCharLength
Integer. Modify the heading text character count for warning message about excessively long headings.

```js
headingMaxCharLength: 170,
```

### URLTextMaxCharLength
Integer. Modify the URL text character count for warning message about URLs used as link text.

```js
URLTextMaxCharLength: 40,
```

### URLAsLinkTextWarning
Boolean. Set to `false` to turn off warning message about URLs used as link text.

```js
URLAsLinkTextWarning: true,
```

## Readability module
The readability module is based on [Flesch reading ease.](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch_reading_ease)

### readabilityPlugin
Boolean. Set to `false` to turn off and hide Readability check from the Settings panel.

```js
readabilityPlugin: true,
```

### readabilityRoot
String. Target area for readability check. For example, pass `main` for main content area. Accepts a **single selector** only.

```js
readabilityRoot: 'body'
```

### readabilityIgnore
String. Ignore specific content from readability check. `<li>` tags within navigation landmarks are excluded by default.

```js
readabilityIgnore: ''
```

## Toggleable rulesets in Settings panel
Turn off specific checks within the Settings panel.

### contrastPlugin
Boolean. Set to `false` to turn off and hide contrast check from Settings panel.

```js
contrastPlugin: true,
```

### formLabelsPlugin
Boolean. Set to `false` to turn off and hide Form labels check from Settings panel.

```js
formLabelsPlugin: true,
```

### linksAdvancedPlugin
Boolean. Set to `false` to turn off and hide Links (Advanced) check from Settings panel.

```js
linksAdvancedPlugin: true,
```

### colourFilterPlugin
Boolean. Set to `false` to turn off and hide Colour filters from Settings panel.

```js
colourFilterPlugin: true,
```

### checkAllHideToggles
Boolean. Set to `true` if you would like to visually hide all toggle switches in the Settings panel. This will not hide the Dark Mode or Colour Filter toggles.

```js
checkAllHideToggles: false,
```

### exportResultsPlugin
Boolean. Set to `true` if you would like to add buttons that allow users to export issues as CSV or HTML.

```js
exportResultsPlugin: false,
```

## Quality assurance module
Turn off or modify specific quality assurance checks.

### badLinksQA
Boolean. Related to `linksToFlag` prop.

```js
badLinksQA: true,
```

### strongItalicsQA
Boolean. Flags entire paragraphs that are bold or italicized.

```js
strongItalicsQA: true,
```

### pdfQA
Boolean. Warning about PDF content.

```js
pdfQA: true,
```

### documentQA
Boolean. Warning for Office and Google Workspace documents.

```js
documentQA: true,
```

### documentLinks
String. Default values for `documentQA` prop.

```js
documentLinks: '.ppt, .doc, .xls, .csv, sway.com, docs.google.com',
```

### langQA
Boolean. Error if page language is not set.

```js
langQA: true,
```

### blockquotesQA
Boolean. Warning if blockquote suspiciously resembles a heading.

```js
blockquotesQA: true,
```

### tablesQA
Boolean. Various errors about inaccessible HTML tables.

```js
tablesQA: true,
```

### allCapsQA
Boolean. Warning about use of ALL CAPS. **Note:** Sometimes this check can be problematic because of regex usage. Set to `false` if you experience any issues.

```js
allCapsQA: true,
```

### fakeHeadingsQA
Boolean. Warning about bolded text that suspiciously resembles a heading. Uses regex.

```js
fakeHeadingsQA: true,
```

### fakeListQA
Boolean. Warning about suspiciously formatted content that should be a semantic list.

```js
fakeListQA: true,
```

### duplicateIdQA
Boolean. Error if duplicate `id` exists on the page.

```js
duplicateIdQA: true,
```

### underlinedTextQA
Boolean. Warning for <u>underlined</u> text.

```js
underlinedTextQA: true,
```

### pageTitleQA
Boolean. Error if meta page `<title>` is missing or empty.

```js
pageTitleQA: true,
```

### subscriptQA
Boolean. Warning if `<sup>` and `<sub>` tags are used to format entire sentences.

```js
subscriptQA: true,
```

### tablesQAmissingTH
Set to false to turn off check that flags missing table headers as an error.

```js
tablesQAmissingTH: true,
```

### tablesQAsemanticHeadings
Set to false to turn off check that flags semantic headings within a table as an error.

```js
tablesQAsemanticHeadings: true,
```

### tablesQAemptyTH
Set to false to turn off check that flags empty table headers within a table as an error.

```js
tablesQAemptyTH: true,
```

### tablesQAemptyTHisError
Set to false to change check that flags empty table headers from an error to a warning.

```js
tablesQAemptyTHisError: true,
```

## Embedded content (iFrames) module
All properties related to embedded content checks.

### embeddedContentAll
Boolean. Set to `false` to ignore all iFrames.

```js
embeddedContentAll: true,
```

### embeddedContentAudio
Boolean. Warning about audio content and transcripts.

```js
embeddedContentAudio: true,
```

### embeddedContentVideo
Boolean. Warning about video content and captions.

```js
embeddedContentVideo: true,
```

### embeddedContentDataViz
Boolean. Warning about data visualizations.

```js
embeddedContentDataViz: true,
```

### embeddedContentTitles
Boolean. Warning about iFrame missing a descriptive title or accessible name.

```js
embeddedContentTitles: true,
```

### embeddedContentGeneral
Boolean. General warning about unknown iFrame content.

```js
embeddedContentGeneral: true,
```

### videoContent
String. Common video players.

```js
videoContent: 'video, youtube.com, vimeo.com, yuja.com, panopto.com',
```

### audioContent
String. Common podcast widgets or audio players.

```js
audioContent: 'audio, soundcloud.com, simplecast.com, podbean.com, buzzsprout.com, blubrry.com, transistor.fm, fusebox.fm, libsyn.com',
```

### dataVizContent
String. Common data visualization widgets.

```js
dataVizContent: 'datastudio.google.com, tableau',
```

## Methods
These helper methods streamline integration into content management systems.

### sa11y.disabled();
Employ this function to temporarily deactivate the accessibility checker. It closes the panel (if open) and applies the <code>disabled</code> attribute, graying out the toggle and blocking user interaction.

### sa11y.enable();
Utilize this function to restore functionality to the accessibility checker. It removes the <code>disabled</code> attribute from the primary toggle, enabling users to interact with it again.

## Feedback
Provide feedback on props via [GitHub](https://github.com/ryersondmp/sa11y/issues) or [Report a bug.](https://forms.gle/sjzK9XykETaoqZv99)

{% include "partials/pagination-developers.njk" %}
