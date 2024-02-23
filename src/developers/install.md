---
layout: base
title: Install
permalink: '/developers/'
order: 1
---

# {{title}}

Sa11y is a customizable, framework-agnostic JavaScript plugin. It's made with vanilla JavaScript and CSS. Sa11y can target specific areas of the page, and can also check inside web components/open [Shadow DOMs.](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)

To install on your website, insert Sa11y right before the closing `<body>` tag. You only need three files to get started:

- **sa11y.css** - The main stylesheet. Should be included in the `<head>` of the document (if possible).
- **lang/en.js** - Language file. View [supported languages.](#languages)
- **sa11y.js** - The main script which contains all logic.

## Install via GitHub or npm
Fork on [GitHub](https://github.com/ryersondmp/sa11y) or `npm i sa11y`

## Demo and local development
A light server for development is included. Any change inside `/src` folder files will trigger the build process for the files and will reload the page with the new changes. To use this environment:

1. Fork or download the [latest release](https://github.com/ryersondmp/sa11y/releases)
2. Be sure you have node installed and up to date.
3. Execute `npm install`
4. In a terminal execute: `npm run serve`. Then open `http://localhost:8080/docs/demo/en/` in your browser.

<p><a href="https://ryersondmp.github.io/sa11y/demo/" class="btn btn-sa11y">View live demo</a></p>

## Example installation (modules)
```html
<!-- Stylesheet -->
<link rel="stylesheet" href="sa11y.min.css"/>

<!-- Javascript -->
<script type="module">
  import { Sa11y, Lang } from '../assets/js/sa11y.esm.js';
  import Sa11yLangEn from '../assets/js/lang/en.js';

  // Set translations
  Lang.addI18n(Sa11yLangEn.strings);

  // Instantiate
  const sa11y = new Sa11y({
    checkRoot: "body",
  });
</script>
```

## Example installation (regular script)
```html
<link rel="stylesheet" href="sa11y.min.css"/>

<!-- Sa11y (fork the latest code from GitHub) -->
<script src="/dist/js/sa11y.umd.min.js"></script>
<script src="/dist/js/lang/en.umd.js"></script>

<!-- Instantiate -->
<script>
  Sa11y.Lang.addI18n(Sa11yLangEn.strings);
  const sa11y = new Sa11y.Sa11y({
    checkRoot: "body",
    // Add props here!
  });
</script>
```

## CDN via jsDelivr
The CDN link below is the latest and greatest (stable) release of Sa11y. Current version: `@{{site.sa11yBuild}}`

```html
<!-- Stylesheet -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@{{site.sa11yBuild}}/dist/css/sa11y.min.css"/>

<!-- Script -->
<script src="https://cdn.jsdelivr.net/combine/gh/ryersondmp/sa11y@{{site.sa11yBuild}}/dist/js/lang/en.umd.js,gh/ryersondmp/sa11y@{{site.sa11yBuild}}/dist/js/sa11y.umd.min.js"></script>

<!-- Instantiate-->
<script>
  Sa11y.Lang.addI18n(Sa11yLangEn.strings);
  const sa11y = new Sa11y.Sa11y({
    checkRoot: "body",
    // Add props here!
  });
</script>
```

### CDN with automatic updates
The CDN link below automatically fetches the `@latest` stable release. This is essentially how the bookmarklet is served.

<p class="alert alert-danger"><strong>Warning:</strong> This is not recommended for production... or you know, use at your own risk. 😬</p>

```html
<!-- Stylesheet -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/dist/css/sa11y.min.css"/>

<!-- Script -->
<script src="https://cdn.jsdelivr.net/combine/gh/ryersondmp/sa11y@latest/dist/js/lang/en.umd.js,gh/ryersondmp/sa11y@latest/dist/js/sa11y.umd.min.js"></script>

<!-- Instantiate-->
<script>
  Sa11y.Lang.addI18n(Sa11yLangEn.strings);
  const sa11y = new Sa11y.Sa11y({
    checkRoot: "body",
    // Add props here!
  });
</script>
```

## Example Adobe Experience Manager (AEM) installation
Ideally, Sa11y's assets would be added via AEM's clientlibs. This example script demonstrates how you would **instantiate** Sa11y in AEM environments using Touch UI. It includes a utility function to monitor switches between "Preview" and "Edit" modes in the Page Editor. To overcome Touch UI's limitations with fixed elements, Sa11y's panel is positioned at either the top left or top right corner of the page.

```javascript
// Instantiate
Sa11y.Lang.addI18n(Sa11yLangEn.strings);
const sa11y = new Sa11y.Sa11y({
  checkRoot: "body",
  panelPosition: "top-right", // or "top-left"
});

// Function to check if Page Editor is in Preview or Edit mode.
const checkEditorMode = (elementSelector, className, callback) => {
  const targetElement = document.querySelector(elementSelector);
  const observer = new MutationObserver(mutationsList => {
    const isEditMode = targetElement.classList.contains(className);
    callback(isEditMode);
  });
  observer.observe(targetElement, { attributes: true, attributeFilter: ['class'] });
  return observer;
};

// If in Edit mode, Sa11y will be temporary disabled and grayed out.
const checkPageState = checkEditorMode('html', 'aem-AuthorLayer-Edit', isEditMode => {
  isEditMode ? sa11y.disabled() : sa11y.enabled();
});
```

<hr class="mt-5" aria-hidden="true">

## Languages
Sa11y has been translated into French, Polish, Ukrainian, Swedish, Spanish, and German, with over a dozen machine translations available in various other languages. You can view all [translations on GitHub.](https://github.com/ryersondmp/sa11y/tree/master/src/js/lang)

Do you want to help translate or improve Sa11y? Consider [contributing!](https://github.com/ryersondmp/sa11y/blob/master/CONTRIBUTING.md) Translations may either be contributed back to the repository with a pull request on GitHub, or translated files can be returned to: [{{site.contactEmail}}](mailto:{{site.contactEmail}})

### CDN
To utilize CDN links above, simply replace `lang/en.umd.js` with your preferred language code.

### Readability
Sa11y's readability feature is based on [Flesch reading-ease test (Wikipedia)](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch_reading_ease) and [Lix (Wikipedia).](https://en.wikipedia.org/wiki/Lix_(readability_test)) The Flesch reading-ease formula has been adapted to also support Dutch, Italian, French, German, Portuguese, and Spanish. Lix formula supports Danish, Finnish, Norwegian (Bokmål & Nynorsk), and Swedish.


{% include "partials/pagination-developers.njk" %}
