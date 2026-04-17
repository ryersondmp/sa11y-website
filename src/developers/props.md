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

**Note:** As of 4.4.0, you can now pass in multiple selectors.

```js
checkRoot: 'body',
```

#### fixedRoots

DOM reference. This prop enables passing DOM references directly as evaluation targets. Since 4.4.0.

```js
Sa11y.Lang.addI18n(Sa11yLangEn.strings);
setTimeout(() => {
  const fixedRoots = document.querySelector('iframe').contentWindow.document.body.querySelector('main');
  const sa11y = new Sa11y.Sa11y({
    fixedRoots: [fixedRoots],
  });
}, 100);
```

#### containerIgnore

String. Ignore specific regions of the page.

```js
containerIgnore: '.sa11y-ignore',
```

#### ignoreByTest

Object. Ignore specific elements for individual tests. Since 5.0.0.

```js
ignoreByTest: {
    LABELS_ARIA_LABELS_INPUT: ':is(header, footer) [type="search"]',
    LABELS_PLACEHOLDER: ':is(header, footer) [type="search"]',
  },
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

#### ignoreContentOutsideRoots

Boolean. When set to `true`, any elements identified by Sa11y will be ignored entirely. For example, the Page Outline excludes headings outside the specified root(s). Previously, all headings under `<body>` were shown regardless of designated root.

```js
ignoreContentOutsideRoots: false,
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

Accepts an array, comma seperated string, or a regular expression. An alternative prop to `linkIgnoreSpan`. Pass in regex that matches specific words or phrases. For example, `"\(External\)|\(Opens new tab\)"` or an array of strings `['(External)']`.

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

Accepts an array, comma seperated string, or a regular expression. An alternative prop to `headerIgnoreSpan`. Pass a string of regex that matches specific words or phrases to be excluded from Page Outline or heading checks. For example, `"\(Anchor\)"`.

```js
headerIgnoreStrings: '',
```

#### ignoreHiddenOverflow

String. Prevent Sa11y from unhiding containers with `overflow: hidden` by passing specific selectors. Since 4.0.6.

```js
ignoreHiddenOverflow: '',
```

#### ignoreAriaOnElements
String. Allow developers to exclude specific elements from accessible-name calculations, improving compatibility with WYSIWYG editors and CMS-generated markup. For example, `'h1,h2,h3,h4,h5,h6'`. Since 4.4.0.

```js
ignoreAriaOnElements: false,
```

#### ignoreTextInElements
String. Allow developers to exclude specific elements from accessible-name calculations, improving compatibility with WYSIWYG editors and CMS-generated markup. For example, `'.inner-node-hidden-in-CSS'`. Since 4.4.0.

```js
ignoreTextInElements: false,
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

#### initialHeadingLevel
Array. Specifies the heading level a section should begin with to prevent false “skipped heading level” errors. This is useful when WYSIWYG content begins with an `<h3>` but appears after an `<h2>` from the page template. Since 4.4.0.

```js
initialHeadingLevel: false,
```

##### Example
The `selector` key represents the target area. The `previousHeading` key represents the starting heading level for that section.

```js
initialHeadingLevel: [
  {
    selector: '#h4-root',
    previousHeading: 2,
  }
],
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

String. Adds to the suspicious alt words array (e.g. image of, graphic of) within the language files. For instance, by passing 'image', only alt text containing the word 'image' at the beginning will be flagged. Since 3.2.0.

```js
susAltStopWords: '',
```

#### linkStopWords

String. Adds to the link stop words array (e.g. click here, learn more) in the language files. Since 3.2.0.

```js
linkStopWords: '',
```

#### extraPlaceholderStopWords

String. Add additional stop words to flag at the beginning of an alt text string as a placeholder error. For example, if you pass the word "untitled", any image whose alt text starts with "untitled" will be flagged. Since 3.2.0.

```js
extraPlaceholderStopWords: '',
```

#### altPlaceholder
Array. Accepts an array of CMS-generated placeholder strings used when alt attributes are empty. Matching values ensure the image is treated as decorative. For example: `<img src="/dog.png" alt="This image has an empty alt attribute; its file name is dog.png">` will be flagged as decorative. Since 4.4.0.

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

#### contrastAlgorithm

String. The `contrastAPCA` and `contrastAAA` props have been removed and replaced with a single contrastAlgorithm prop, which accepts one of: `AA`, `AAA`, or `APCA`.

```js
contrastAlgorithm: 'AA',
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

String. Target area for readability check. For example, pass `main` for main content area. Accepts a **single selector** only. **Note:** As of 4.4.0, you can now pass in multiple selectors.

```js
readabilityRoot: "body";
```

#### readabilityIgnore

String. Ignore specific content from readability check. `<li>` tags within navigation landmarks are excluded by default.

```js
readabilityIgnore: "";
```

### Language of parts module
This new ruleset leverages on-device AI to automatically detect and validate the language of your content, ensuring it matches a web page’s language declaration. This feature helps identify issues pertaining to the following WCAG success criteria:
- **Language of Page (Level A):** Verifies that the primary language declared in the document matches the actual content on the page.
- **Language of Parts (Level AA):** Scans individual text blocks and image alt text to ensure shifts in language are correctly identified via the lang attribute.

#### Implementation notes
- This is an experimental browser API and is only available in Chrome at this time.
- For better performance, Sa11y will only run this check once on a page. It will stop scanning remaining element nodes after the first detection. If significant text changes are detected on the page, Sa11y will trigger a fresh scan.
- This feature utilizes a built-in browser [Language Detector API](https://developer.chrome.com/docs/ai/language-detection). All language analysis is performed locally on your machine, ensuring your page content is never sent to a cloud server or external third party for processing.

**Disclaimer:** Please note that AI-detection is not 100% accurate and is intended only to flag glaring issues for manual review; results should always be verified by a human.

#### langOfPartsPlugin
Boolean. This experimental check is off by default. To start using these rules, update your configuration with the following properties:

```js
langOfPartsPlugin: false,
```

#### langOfPartsCache
Boolean. Set to `true` to enable smarter caching. This prevents redundant scans by storing results for up to 200 URLs and only triggers a fresh analysis if it detects a change in page text, declared language, or previously flagged elements.

```js
langOfPartsCache: true,
```

## Methods

These helper methods streamline integration into content management systems.

As of Sa11y 5.0, all [utility functions](https://github.com/ryersondmp/sa11y/blob/master/src/js/utils/utils.js) are exposed and can be used in a similar fashion.

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
