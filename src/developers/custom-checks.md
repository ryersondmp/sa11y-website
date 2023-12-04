---
layout: base
title: Custom checks
permalink: '/developers/custom-checks/'
order: 4
---

# {{title}}
You can extend Sa11y beyond checking for accessibility issues. For example, create checks that promote better usability, or encourage proper use of components and web style guidelines. All custom checks should be created within `/src/sa11y-custom-checks.js`.

## How to create a custom check
You can create custom checks with just a few lines of JavaScript. There are two types of annotations you create: Button annotations appended at the source of the issue, and full page issues that are displayed within Sa11y's panel. There are several [utilities](https://github.com/ryersondmp/sa11y/tree/master/src/js/utils/utils.js) functions and [elements](https://github.com/ryersondmp/sa11y/blob/master/src/js/utils/elements.js) you can use.

Simply populate the `results` object to flag an issue.

### Annotation
- **element** - Issue element (Element)
- **type** - Type of issue: Error, Warning, or Pass. (String)
- **content** -  Tooltip message. (String)
- **inline** - Display annotation inline with text. (Boolean)
- **position** - Where to insert annotation. View [`insertAdjacentHTML()` parameters.](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML#parameters) (String)
- **dismiss** - A string that uniquely identifies the found issue used for all warnings.
  - Errors cannot be dismissed, only warnings can.
  - It's very **important** that the key is unique. It's recommended to pass the element's inner text for example. Use the `Utils.prepareDismissal` utility function to generate a key.

### Page Issue
Simply pass a **type** and **content** to create a Page Issue that's displayed in the main panel.
- **type** - Type of issue: Error, Warning, or Pass. (String)
- **content** - Issue message. (String)

## Recipes
Both recipes below are included in [sa11y-custom-checks.js](https://github.com/ryersondmp/sa11y/blob/master/src/js/sa11y-custom-checks.js) for reference.

### Overusing a component on a page
The example detects if more than one announcement is detected on a page, although it could be easily extended to anything. Too many slideshows? Too many accordions? You name it.

```js
const $checkAnnouncement = find('.sa11y-announcement-component', 'root');
  if ($checkAnnouncement.length > 1) {
    for (let i = 1; i < $checkAnnouncement.length; i++) {
      const key = Utils.prepareDismissal($checkAnnouncement[i].textContent);
      results.push({
        element: $checkAnnouncement[i],
        type: Constants.Global.WARNING,
        content: C.ANNOUNCEMENT_MESSAGE,
        inline: false,
        position: 'beforebegin',
        dismiss: key,
      });
    }
  }
```

<h4>Demo</h4>
<div class="example p-5">
    <section class="alert alert-primary sa11y-announcement-component" aria-label="Announcement"><i class="bi bi-megaphone-fill"></i> This is an announcement component!</section>
    <section class="alert alert-primary sa11y-announcement-component" aria-label="Announcement"><i class="bi bi-megaphone-fill"></i> This is another announcement component!</section>
</div>

<hr aria-hidden="true" class="mt-5">

### Accordion component contains a form
Forms nested within accordion components can be problematic if it uses server-sided validation. The page will reload, and the accordion usually returns back to its closed state. This is problematic for everyone.

```js
const $checkAccordions = find('.sa11y-accordion-example', 'root');
$checkAccordions.forEach(($el) => {
  const checkForm = $el.querySelector('form');
  if (!!checkForm && checkForm.length) {
    results.push({
      element: $el,
      type: Constants.Global.ERROR,
      content: C.ACCORDION_FORM_MESSAGE,
      inline: false,
      position: 'beforebegin',
    });
  }
});
```

#### Demo
<div class="example p-5">
    <div class="accordion sa11y-accordion-example" id="accordion">
    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Contact us!
        </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordion">
        <div class="accordion-body">
            <form>
                <div class="p-3">
                    <label for="name">Last name</label>
                    <input type="text" id="name">
                </div>
                <div class="p-3">
                    <label for="lname">First name</label>
                    <input type="text" id="lname">
                </div>
                <div class="p-3">
                    <input class="btn btn-primary" type="submit" value="Submit" disabled>
                </div>
            </form>
        </div>
        </div>
    </div>
    </div>
</div>

<hr aria-hidden="true" class="mt-5">

## Add or suggest a recipe
Share your recipe on [GitHub.](https://github.com/ryersondmp/sa11y/issues)

{% include "partials/pagination-developers.njk" %}
