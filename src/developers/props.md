---
layout: base
title: Props and methods
permalink: "/developers/props/"
order: 2
---

<style>pre {margin-bottom: 3rem !important} </style>

# {{title}}

<nav aria-labelledby="onthispage">

<h2 class="h5" id="onthispage">On this page:</h2>

- [Props](#props)
  - [Target area and exclusions](#target-area-and-exclusions)
  - [Control panel](#control-panel)
  - [Other features](#other-features)
  - [Annotations](#annotations)
  - [Customize checks](#customize-checks)
  - [Readability module](#readability-module)
- [Deprecated props](#deprecated-props)
- [Methods](#methods)

</nav>

## Props

Props allow you to easily customize the experience for content authors:

1. Set the target area to check. If your content authors can't edit it, don't flag it!
2. Ignore entire sections of a page.
3. Add exclusions to ignore false positives.
4. Turn off or customize specific modules or checks.

Pass in props when you instantiate Sa11y, for example:

```js
const sa11y = new Sa11y({
  checkRoot: "main",
  readabilityRoot: "main",
  containerIgnore: "#pagination, aside",
});
```

<p class="alert alert-info"> <i class="bi bi-info-circle-fill"></i> <strong>Important:</strong> The code snippets on this page display the <strong>default values</strong> for each prop. These values are automatically applied unless overridden or specified otherwise. If a snippet is intended as an example, it will be explicitly labeled as such. </p>

### Target area and exclusions

Identify elements by [CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp) or [HTML sectioning elements.](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html) Use a comma to pass multiple selector unless otherwise indicated.

#### checkRoot

String. Input a **single selector** to scan a specific region of the page. This selector should exist on every page of your website. For example, pass `main` for the main content area.

```js
checkRoot: 'body',
```

#### containerIgnore

String. Ignore specific regions of the page.

```js
containerIgnore: '.sa11y-ignore',
```

#### contrastIgnore

String. Ignore specific elements from the contrast check.

```js
contrastIgnore: '.sr-only',
```

#### outlineIgnore

String. Exclude specific headings from appearing in the Page Outline panel. For example, visually hidden headings that may not make sense to sighted content editors.

```js
outlineIgnore: '',
```

#### headerIgnore

String. Ignore specific headings on the page. These headings will not be annotated or labeled, nor will they appear in the Page Outline.

```js
headerIgnore: '',
```

#### imageIgnore

String. Ignore specific images on the page.

```js
imageIgnore: '',
```

#### linkIgnore

String. Ignore specific links on the page.

```js
linkIgnore: '',
```

#### linkIgnoreSpan

String. Ignore elements within a link or image link to improve accuracy of link checks.

```js
linkIgnoreSpan: '',
```

<div class="p-4 mb-4 bg-light rounded-3">

##### Example

The contents of `<span class="sr-only">` will be ignored, and the non-descript link will display the appropriate error annotation.

```html
<a href="https://www.example.com">learn more <span class="sr-only">external link</span></a>

<script>
  const sa11y = new Sa11y({
    linkIgnoreSpan: ".sr-only",
  });
</script>
```

<p class="alert alert-primary mt-4">
   <strong>Try:</strong> Press <kbd>alt</kbd> <kbd>A</kbd> to enable Sa11y.
</p>

<a href="https://www.example.com=?2" class="mt-3">learn more <span class="sr-only-example bg-dark p-1 text-white rounded">external link</span></a>

</div>

#### linkIgnoreStrings

String. An alternative prop to `linkIgnoreSpan`. Pass a string of regex that matches specific words or phrases. For example, `"\(External\)|\(Opens new tab\)"`.

```js
linkIgnoreStrings: '',
```

#### linksToFlag

String. Check for unwanted URLs, such as those pointing to development environments. For example, `a[href*="dev."]`

```js
linksToFlag: '',
```

#### headerIgnoreSpan

String. Ignore elements within headings to enhance the accuracy of checks and ensure that text isn't displayed within the Page Outline. For example, this prop is used on this very website to exclude the text "Anchor" from the Page Outline.

```js
headerIgnoreSpan: '',
```

#### headerIgnoreStrings

String. An alternative prop to `headerIgnoreSpan`. Pass a string of regex that matches specific words or phrases to be excluded from Page Outline or heading checks. For example, `"\(Anchor\)"`.

```js
headerIgnoreStrings: '',
```

#### ignoreHiddenOverflow

String. Prevent Sa11y from unhiding containers with `overflow: hidden` by passing specific selectors. Since 4.0.6.

```js
ignoreHiddenOverflow: '',
```

### Control panel

Properties that affect Sa11y's control panel.

#### aboutContent

String. Add a custom "About" or "Help" section within the Settings panel. This prop should only ever be populated with static content by developers to mitigate XSS attacks. Since 3.2.0.

```js
aboutContent: '',
```

<div class="p-4 mb-4 bg-light rounded-3">

##### Example

```js
aboutContent: '<h2>Help</h2><p>Questions? Contact the IT Help Desk for support.</p>',
```

</div>

#### panelPosition

String. Move position of panel in any four corners. Choose from `top-left`, `top-right`, `left`, and `right`.

```js
panelPosition: 'right',
```

**Accessibility note:** When the panel is positioned to the left side, the CSS property `flex-direction: row-reverse` is used to reverse the items within the main panel status which contains the issue count, Skip-to-issue button and Dismiss button. This causes a [disconnect between the visual order and DOM order.](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#accessibility_concerns)

#### colourFilterPlugin

Boolean. Set to `false` to turn off and hide Colour filters from Settings panel.

```js
colourFilterPlugin: true,
```

#### exportResultsPlugin

Boolean. Set to `true` if you would like to add buttons that allow users to export issues as CSV or HTML.

```js
exportResultsPlugin: false,
```

#### developerChecksOnByDefault

Boolean. Set to `true` if you would like "Developer checks" enabled by default.

```js
developerChecksOnByDefault: false,
```

#### externalDeveloperChecks

Boolean. Set to `true` to disable internal developer checks but keep the "Developer checks" toggle visible. This helps facilitate integrations with third-party accessibility checkers. Data should be passed in via [Custom Checks]({{'/developers/custom-checks/' | url}}) using the `external: true` property within the results object. Here's an [example integrating axe-core.](https://codepen.io/adamchaboryk/pen/dPYVqzW)

Since 4.2.0.

```js
externalDeveloperChecks: false,
```

#### checkAllHideToggles

Boolean. Set to `true` if you would like to visually hide the "Developer checks" toggle.

```js
checkAllHideToggles: false,
```

#### showHinPageOutline

Boolean. Prefix each item within the Page Outline with an H.

```js
showHinPageOutline: false,
```

#### showTitleInPageOutline

Boolean. Show the page's meta title in the Page Outline. Since 3.2.2.

```js
 showTitleInPageOutline: true,
```

#### showImageOutline

Boolean. Display the "Images" tab between the Outline and Settings tab within the control panel. Since 3.2.0.

```js
showImageOutline: true,
```

#### editImageURLofCMS

String. **Required** prop to help configure "Edit" buttons for Image outline. The content management system's edit URL or path for an image. For example, `/wp-admin/upload.php?item=` or `https://example.com/assets.html/content/dam`. Since 3.2.0.

```js
editImageURLofCMS: '',
```

#### relativePathImageSRC

String. Optional prop to help configure "Edit" buttons for Image outline. This prop is only necessary if images are uploaded to another domain, otherwise it uses the website's [host](https://developer.mozilla.org/en-US/docs/Web/API/Location/host) name to check if the image has a relative path. Since 3.2.0.

```js
relativePathImageSRC: '',
```

#### relativePathImageID

String. Optional prop to help configure "Edit" buttons for Image outline. Some content management system's output a unique class name which includes the image's unique ID, for example `wp-image-` for WordPress. If no string is provided, it will fallback to the image's file extension. Since 3.2.0.

```js
relativePathImageID: '',
```

#### ignoreEditImageURL
Array. Optional prop to help configure "Edit" buttons for Image outline. If an image's src attribute contains any of the strings in this array, the edit button will not be shown for that image.

```js
ignoreEditImageURL: [],
```

#### ignoreEditImageClass
Array. Optional prop to help configure "Edit" buttons for Image outline. If an image has any of the class names listed in this array, the edit button will not be shown for that image.

```js
ignoreEditImageClass: [],
```

### Other features

Features that may help with integrations into various content management systems or frameworks.

#### delayCheck

Integer. Defer the initial page check by a customizable delay of x milliseconds. Useful for accommodating slower-loading JavaScript elements. For example, pass `500` to delay the initial check by 500 milliseconds. Since 3.0.9.

```js
delayCheck: 0,
```

#### delayCustomCheck

Integer. Extend or decrease the amount of time that Sa11y will wait for any custom checks provided via dispatched events. Refer to [Custom Checks]({{'/developers/custom-checks/' | url}}) for guidance. Since 3.1.2.

```js
delayCustomCheck: 500,
```

#### detectSPArouting

Boolean. Detects URL changes and re-checks the page. This prop is designed to improve usability when testing JavaScript rendered content or single page applications (SPA).

```js
detectSPArouting: false,
```

#### doNotRun

String. Using a comma seperated list, provide selectors to unique pages where you do not want Sa11y to appear or check.

```js
doNotRun: '',
```

#### headless

Boolean. Run checks without the GUI (graphical user interface). Since 3.0.0.

```js
headless: false,
```

#### selectorPath

Boolean. Generates a simple CSS selector path of the element within the `results` array. Since 3.0.0.

```js
selectorPath: false,
```

#### shadowComponents

String. Provide a list of all known web components to check. Since 3.0.0.

```js
shadowComponents: '',
```

#### autoDetectShadowComponents

Boolean. Automatically check every element on the page for an open shadow DOM, and check for issues within them. Since 3.0.0.

```js
autoDetectShadowComponents: false,
```

#### customChecks

Please refer to custom checks for guidance. Since 3.0.0.

1. Pass `listen` if you would like Sa11y to "listen" for custom checks.
2. Pass an object if you would like to add custom checks before instantiating Sa11y.
3. Set to `true` if Sa11y is installed locally on your system and add custom checks to `sa11y-custom-checks.js` file.

```js
customChecks: false,
```

### Annotations

Props related to annotations.

#### dismissAnnotations

Boolean. Give content editors the ability to dismiss any warnings. Since 3.0.0.

```js
dismissAnnotations: true,
```

#### dismissAll

Boolean. Set to `false` to turn off "Dismiss all" functionality for all tooltips. Note, only some checks have a "Dismiss all" button by default. Since 4.0.0.

```js
dismissAll: true,
```

#### showGoodLinkButton

Boolean. Show "Good" annotations on links with an accessible name that was defined with an `aria-label` or `aria-labelledby` attribute. Sometimes content authors may wonder why some "learn more" links are not flagged as an error.

```js
showGoodLinkButton: true,
```

#### showGoodImageButton

Boolean. Show "Good" annotations on images that have alt text.

```js
showGoodImageButton: true,
```

#### insertAnnotationBefore

String. Using unique selectors, change the location of where annotations are inserted around the issue's element. This is particularly useful for containers where annotations are inaccessible due to issues like `z-index` values or other layout constraints. For example, you can use this prop to ensure any annotations gets added outside of the element's parent container, like a closed accordion component.

```js
insertAnnotationBefore: '',
```

### Customize checks

As of 4.0, any check can be individually turned off or customized upon instantiation. To customize or turn off a check, find the desired key within the [language file](https://github.com/ryersondmp/sa11y/blob/master/src/js/lang/en.js#L127) or [default options.](https://github.com/ryersondmp/sa11y/blob/master/src/js/utils/default-options.js#L73) You can easily change a:

- Tooltip’s message.
- Classification as a warning or error.
- Classification as a “Developer check”.
- Give “Dismiss all” ability to a check.

Here's an example:

```js
const sa11y = new Sa11y({
  checkRoot: "main",
  checks: {

    // Turn off the "Missing Heading 1" check.
    HEADING_MISSING_ONE: false,

    // Change "Empty table heading" error to a warning,
    // overwrite tooltip content, and
    // allow editors to "Dismiss all"
    TABLES_EMPTY_HEADING: {
      content: 'Please avoid empty table headers within tables!',
      type: 'warning',
      dismissAll: true,
    }

    // Adjust max character count of "Alt is too long" check.
    LINK_IMAGE_LONG_ALT: {
      maxLength: 100,
    },
    IMAGE_ALT_TOO_LONG: {
      maxLength: 100,
    },
  }
});
```

The props below are shared between different checks and are not nested under the "checks" object.

#### susAltStopWords

String. Overwrite the `SUSPICIOUS_ALT_STOPWORDS` array (e.g. image of, graphic of) within the language files. For instance, by passing 'image', only alt text containing the word 'image' at the beginning will be flagged. Since 3.2.0.

```js
susAltStopWords: '',
```

#### linkStopWords

String. Overwrite the `WARNING_ALT_STOPWORDS` array (e.g. click here) in the language files. Since 3.2.0.

```js
linkStopWords: '',
```

#### extraPlaceholderStopWords

String. Add additional stop words to flag at the beginning of an alt text string as a placeholder error. For example, if you pass the word "untitled", any image whose alt text starts with "untitled" will be flagged. Since 3.2.0.

```js
extraPlaceholderStopWords: '',
```

#### imageWithinLightbox

String. Use this prop to customize how images within links are processed. This is ideal for scenarios like lightboxes or image galleries, where images are wrapped in anchor tags solely for magnifying purposes. In such cases, the tooltip will provide more appropriate guidance, as these images are not typical functional links pointing to specific URLs. To configure, pass a unique selector specific to the anchor wrapped around the lightbox image. For example, pass `.lightbox` for `<a href="#" class="lightbox"><img src="car.png" alt/></a>`. Since 4.0.7.

```js
imageWithinLightbox: '',
```

#### contrastPlugin

Boolean. Set to `false` to turn off all contrast checking.

```js
contrastPlugin: true,
```

### contrastAPCA

Boolean. Set to `true` to use the Advanced Perceptual Contrast Algorithm (APCA) contrast algorithn. APCA is a new colour contrast model that is based on colour perception. In addition to lightness/darkness contrast, it also considers font size and weight. APCA is the candidate contrast method for WCAG 3, but it is still in beta. WCAG 3 is still in development and subject to change. The APCA model should not be used for WCAG 2 conformance.

```js
contrastAPCA: false,
```

### contrastAAA
Boolean. Set to `true` to use Level AAA contrast thresholds. WCAG Level AAA requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text.

```js
contrastAAA: false,
```

#### formLabelsPlugin

Boolean. Set to `false` to turn off all input/form labels checks.

```js
formLabelsPlugin: true,
```

### Readability module

The readability module is based on [Flesch reading ease.](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch_reading_ease)

#### readabilityPlugin

Boolean. Set to `false` to turn off and hide Readability check from the Settings panel.

```js
readabilityPlugin: true,
```

#### readabilityRoot

String. Target area for readability check. For example, pass `main` for main content area. Accepts a **single selector** only.

```js
readabilityRoot: "body";
```

#### readabilityIgnore

String. Ignore specific content from readability check. `<li>` tags within navigation landmarks are excluded by default.

```js
readabilityIgnore: "";
```

## Deprecated props

The following props are deprecated, but their functionality can still be achieved using the new props structure for checks.

<details>
  <summary>View deprecated props</summary>

#### linksAdvancedPlugin

Boolean. Set to `false` to turn off and hide Links (Advanced) check from Settings panel.

```js
linksAdvancedPlugin: true,
```

#### nonConsecutiveHeadingIsError

Boolean. Set to `false` if you would like skipped headings to be flagged as a warning instead. By default Sa11y flags skipped headings as an error, however, this is not a WCAG failure.

```js
nonConsecutiveHeadingIsError: true,
```

#### flagLongHeadings

Boolean. Flag headings longer than 170 characters. This is not a WCAG criterion.

```js
flagLongHeadings: true,
```

#### missingH1

Boolean. Set to `false` if you would like to turn off this ruleset.

```js
missingH1: true,
```

#### altTextMaxCharLength

Integer. Modify the alt text character count for warning message about excessively long alt.

```js
altTextMaxCharLength: 250,
```

#### headingMaxCharLength

Integer. Modify the heading text character count for warning message about excessively long headings.

```js
headingMaxCharLength: 170,
```

#### URLTextMaxCharLength

Integer. Modify the URL text character count for warning message about URLs used as link text.

```js
URLTextMaxCharLength: 40,
```

#### URLAsLinkTextWarning

Boolean. Set to `false` to turn off warning message about URLs used as link text.

```js
URLAsLinkTextWarning: true,
```

#### badLinksQA

Boolean. Related to `linksToFlag` prop.

```js
badLinksQA: true,
```

#### strongItalicsQA

Boolean. Flags entire paragraphs that are bold or italicized.

```js
strongItalicsQA: true,
```

#### pdfQA

Boolean. Warning about PDF content.

```js
pdfQA: true,
```

#### documentQA

Boolean. Warning for Office and Google Workspace documents.

```js
documentQA: true,
```

#### documentLinks

String. Default values for `documentQA` prop.

```js
documentLinks: 'a[href$=".doc"], a[href$=".docx"], a[href*=".doc?"], a[href*=".docx?"], a[href$=".ppt"], a[href$=".pptx"], a[href*=".ppt?"], a[href*=".pptx?"], a[href^="https://docs.google"], a[href^="https://sway."]',
```

#### langQA

Boolean. Error if page language is not set.

```js
langQA: true,
```

#### blockquotesQA

Boolean. Warning if blockquote suspiciously resembles a heading.

```js
blockquotesQA: true,
```

#### tablesQA

Boolean. Various errors about inaccessible HTML tables.

```js
tablesQA: true,
```

#### allCapsQA

Boolean. Warning about use of ALL CAPS. **Note:** Sometimes this check can be problematic because of regex usage. Set to `false` if you experience any issues.

```js
allCapsQA: true,
```

#### fakeHeadingsQA

Boolean. Warning about bolded text that suspiciously resembles a heading. Uses regex.

```js
fakeHeadingsQA: true,
```

#### fakeListQA

Boolean. Warning about suspiciously formatted content that should be a semantic list.

```js
fakeListQA: true,
```

#### duplicateIdQA

Boolean. Error if duplicate `id` exists on the page.

```js
duplicateIdQA: true,
```

#### underlinedTextQA

Boolean. Warning for underlined text.

```js
underlinedTextQA: true,
```

#### pageTitleQA

Boolean. Error if meta page `<title>` is missing or empty.

```js
pageTitleQA: true,
```

#### subscriptQA

Boolean. Warning if `<sup>` and `<sub>` tags are used to format entire sentences.

```js
subscriptQA: true,
```

#### tablesQAmissingTH

Set to false to turn off check that flags missing table headers as an error.

```js
tablesQAmissingTH: true,
```

#### tablesQAsemanticHeadings

Set to false to turn off check that flags semantic headings within a table as an error.

```js
tablesQAsemanticHeadings: true,
```

#### tablesQAemptyTH

Set to false to turn off check that flags empty table headers within a table as an error.

```js
tablesQAemptyTH: true,
```

#### tablesQAemptyTHisError

Set to false to change check that flags empty table headers from an error to a warning.

```js
tablesQAemptyTHisError: true,
```

#### embeddedContentAll

Boolean. Set to `false` to ignore all iFrames.

```js
embeddedContentAll: true,
```

#### embeddedContentAudio

Boolean. Warning about audio content and transcripts.

```js
embeddedContentAudio: true,
```

#### embeddedContentVideo

Boolean. Warning about video content and captions.

```js
embeddedContentVideo: true,
```

#### embeddedContentDataViz

Boolean. Warning about data visualizations.

```js
embeddedContentDataViz: true,
```

#### embeddedContentTitles

Boolean. Warning about iFrame missing a descriptive title or accessible name.

```js
embeddedContentTitles: true,
```

#### embeddedContentGeneral

Boolean. General warning about unknown iFrame content.

```js
embeddedContentGeneral: true,
```

#### videoContent

String. Common video players.

```js
videoContent: 'video, youtube.com, vimeo.com, yuja.com, panopto.com',
```

#### audioContent

String. Common podcast widgets or audio players.

```js
audioContent: 'audio, soundcloud.com, simplecast.com, podbean.com, buzzsprout.com, blubrry.com, transistor.fm, fusebox.fm, libsyn.com',
```

#### dataVizContent

String. Common data visualization widgets.

```js
dataVizContent: 'datastudio.google.com, tableau',
```

</details>

## Methods

These helper methods streamline integration into content management systems.

### sa11y.resetAll();

Use this function to reset Sa11y's interface and remove all annotations from the page. Pass `false` as a parameter to reset the page while keeping Sa11y's panel open.

### sa11y.checkAll();

Utilize this function to initiate another scan of the page. You can optionally pass different selectors for `checkRoot` and `readabilityRoot` than those initially specified upon instantiation, like so: `sa11y.checkAll(checkRoot, readabilityRoot);`.

<div class="ms-5">

#### Example

View a [live demo of "travelling" roots.](https://ryersondmp.github.io/sa11y/demo/en/traveling-root)

```javascript
// Initial instantiation.
Sa11y.Lang.addI18n(Sa11yLangEn.strings);
const sa11y = new Sa11y.Sa11y({
  checkRoot: "main",
  readabilityRoot: "main",
});

// Re-checks the page after 2 seconds.
setTimeout(() => {
  sa11y.resetAll(false);
  sa11y.checkAll();
}, 2000);

// Re-checks the page after 4 seconds, but with different target roots.
setTimeout(() => {
  sa11y.resetAll(false);
  sa11y.checkAll("body", "body");
}, 4000);
```

</div>

### sa11y.disabled();

Employ this function to temporarily deactivate the accessibility checker. It closes the panel (if open) and applies the <code>disabled</code> attribute, graying out the toggle and blocking user interaction.

### sa11y.enable();

Utilize this function to restore functionality to the accessibility checker. It removes the <code>disabled</code> attribute from the primary toggle, enabling users to interact with it again.

### sa11y.find(selector, desiredRoot, exclude)

This is a powerful utility to find elements in the DOM that match the given selector. It will also find elements with any specified shadow DOMs. It can accept up to 3 parameters and returns an array of elements.

- **selector** (string) - The CSS selector to match elements against, e.g. `a[href]`
- **desiredRoot** (string) - The root element to start the search from. Can be one of 'document', 'readability', 'root', or a custom selector for the desired root element. In most cases, you should pass `root` which is the root area that Sa11y was specified to check.
- <span class="badge bg-warning text-dark">Optional</span> **exclude** (string) - Elements to exclude from the search, specified as a CSS selector.

<div class="ms-5">

#### Example

`const links = sa11y.find('a[href]', 'root', '.ignore');`

This will return an array of links (with an `href` attribute) within the area that Sa11y was specified to target via the `checkRoot` prop. It excludes any links that have the class `.ignore`.

</div>

### sa11y.prepareDismissal(string)

Create a dismissal key to facilitate the dismissal of items. This feature is essential if you want to enable custom warning dismissibility.

### sa11y.sanitizeHTML(string)

This function takes a string containing HTML as input and returns a sanitized version where special characters are replaced with their respective HTML entities. It's particularly useful when returning text within a tooltip, ensuring that any potentially harmful content is properly escaped to prevent security vulnerabilities.

### sa11y.truncateString(string, maxLength)

Truncates a string to the specified length and appends an ellipsis. Useful for shortening content in tooltip messages. Since 4.2.0.

## Feedback

Provide feedback on props via [GitHub](https://github.com/ryersondmp/sa11y/issues) or [Report a bug.](https://forms.gle/sjzK9XykETaoqZv99)

{% set collectionName = "developers" %}
{% include "partials/pagination.njk" %}
