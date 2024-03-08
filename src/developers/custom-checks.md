---
layout: base
title: Custom checks
permalink: '/developers/custom-checks/'
order: 4
---

<style>pre {margin-bottom: 3rem !important}</style>

# {{title}}
Unlock the full potential of Sa11y beyond accessibility checks. Craft custom checks that encourage proper component usage or align with your web style guidelines. Sa11y not only aids in identifying accessibility issues but also contributes to enhancing usability and overall user experience.

## Different ways of adding custom checks
There are three methods for incorporating custom checks, ordered by their level of flexibility:

### 1. Have Sa11y "listen" for custom checks
Using an event dispatcher, have Sa11y "listen" for custom checks. Sa11y will wait for a dispatched event before running all checks.

- **Benefits:** No build step required. Keep Sa11y easily up-to-date via CDN or when using official plugin.
- **Cons:** Limited [helper methods and functions.]({{ '/developers/props/#methods' | url }})
- **Good for:** cases where Sa11y is integrated within content management systems like Joomla, WordPress, or Drupal, where direct JavaScript file uploads may not be feasible. Custom checks logic can be provide via plugins that allow for the insertion of inline JavaScript or through a separate JavaScript file uploaded manually.

#### Example code
When instantiating, include the string `listen` within the `customChecks` prop. Sa11y will wait for up to 500 milliseconds before continuing with the rest of the core checks. You have the option to adjust this timing by modifying the `delayCustomCheck: 500` prop.

```javascript
// Instantiate
const sa11y = new Sa11y({
  checkRoot: 'main',
  customChecks: 'listen',
});
```
Add your custom checks within the event listener wherever it is convenient:
```javascript
document.addEventListener('sa11y-custom-checks', () => {

  const accordions = sa11y.find('.sa11y-accordion-example', 'root');
  accordions.forEach((accordion) => {
    const form = accordion.querySelector('form');
    if (!!form && form.length) {
      sa11y.results.push({
        element: accordion,
        type: 'error',
        content: 'Do <strong>not nest forms</strong> within the Accordion component. If the form contains validation issues, a person may not see the form feedback since the accordion panel goes back to its original closed state.',
        inline: false,
        position: 'beforebegin',
      });
    }
  });

  // Event is dispatched to let Sa11y know custom checks are done.
  const allDone = new CustomEvent('sa11y-resume');
  document.dispatchEvent(allDone);
});
```

### 2. Passing a results object upon instantiation
Passing a `results` object via `customChecks` prop when instantiating.
- **Benefits:** No build step or local installation required. Keep Sa11y easily up-to-date via CDN.
- **Cons:** No access to helper methods and functions.
- **Good for:** rapid development of custom checks without local installation.

#### Example code
Order is crucial. Custom checks must precede instantiation. Bring Your Own Code (BYoC): no access to Sa11y's helper methods and utilities. If necessary, copy and paste any one of these [utility functions.](https://github.com/ryersondmp/sa11y/blob/master/src/js/utils/utils.js)

```javascript
// Initialize array
let customResults = [];

// Should match the root area you are checking for.
const root = document.querySelector('main');

const accordions = root.querySelectorAll('.sa11y-accordion-example');
accordions.forEach((accordion) => {
  const form = accordion.querySelector('form');
  if (!!form && form.length) {
    customResults.push({
      element: accordion,
      type: 'error',
      content: 'Do <strong>not nest forms</strong> within the Accordion component. If the form contains validation issues, a person may not see the form feedback since the accordion panel goes back to its original closed state.',
      inline: false,
      position: 'beforebegin',
    });
  }
});

// Instantiate.
const sa11y = new Sa11y({
  checkRoot: 'main',
  customChecks: customResults,
});
```

### 3. Locally using build step
Install Sa11y locally and create custom checks within `/src/sa11y-custom-checks.js`.
- **Benefits:** Full access to all helper [utilities](https://github.com/ryersondmp/sa11y/tree/master/src/js/utils/utils.js) and [elements](https://github.com/ryersondmp/sa11y/blob/master/src/js/utils/elements.js). Custom checks compiled into core library resulting in a single, minified JavaScript file.
- **Cons:** Requires Sa11y to be installed locally and a build step.
- **Good for:** developers who prefer to have a local installation and keep everything in one place.

Add your custom logic via [sa11y-custom-checks.js](https://github.com/ryersondmp/sa11y/blob/master/src/js/sa11y-custom-checks.js) and be sure to set `customChecks` prop to `true` when instantiating.

<hr class="mt-5" aria-hidden="true">

## Anatomy of a custom check
You can create custom checks with just a few lines of code. There are two types of annotations you can create:

1. Button annotations appended at the source of the issue.
2. Page issues that are displayed within Sa11y's panel.

Simply populate the `results` object.

### Annotation
- **element** (Element) - Issue element
- **type** (String) - Type of issue: `error`, `warning`, or `good`
- **content** (String) - Tooltip message.
- **inline** (Boolean) - Optional. Set to `true` to display annotation inline with text.
- **position** (String) - Where to insert annotation. View [`insertAdjacentHTML()` parameters.](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML#parameters)
- **dismiss** (String) - Optional. A string that uniquely identifies the found issue.
  - **Important:** Errors cannot be dismissed, only warnings can.
  - **Important:** The dismissal key must be unique for each check. It's recommended to pass the element's inner text for example.
    - If using the event dispatcher method for custom checks, use the [`sa11y.prepareDismissal`]({{'/developers/props/#sa11y-preparedismissal-string' | url }}) method to generate a key. If using the second method (passing an object upon instantiation), copy and paste the `prepareDismissal()` function from the [utilities](https://github.com/ryersondmp/sa11y/tree/master/src/js/utils/utils.js) file.

### Page Issue
Simply pass a **type** and **content** to create a Page Issue that's displayed in the main panel.
- **type** (String) - Type of issue: `error`, `warning`, or `good`
- **content** (String) - Issue message.
- **dismiss** (String) - Optional. A string that uniquely identifies the found issue.
  - Errors cannot be dismissed, only warnings can.
  - It's very **important** that the key is unique.

<p class="alert alert-primary">
   <strong>Try:</strong> Press <kbd>alt</kbd> <kbd>A</kbd> to enable Sa11y and view an example "Page Issue."
</p>

## Recipes
The following recipes utilize the first 'listen' method of adding custom checks. Inspect the script area of this page to see it in action!

### Overusing a component on a page
The example detects if more than one announcement is detected on a page, although it could be easily extended to anything. Too many slideshows? Too many accordions? You name it.

```js
const announcement = sa11y.find('.sa11y-announcement-component', 'root');
if (announcement.length > 1) {
  for (let i = 1; i < announcement.length; i++) {
    const key = sa11y.prepareDismissal(announcement[i].textContent);
    sa11y.results.push({
      element: announcement[i],
      type: 'warning',
      content: 'More than one Announcement component found! The Announcement component should be used strategically and sparingly. It should be used to get attention or indicate that something is important. Misuse of this component makes it less effective or impactful. Secondly, this component is semantically labeled as an Announcement for people who use screen readers.',
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
const accordions = sa11y.find('.sa11y-accordion-example', 'root');
accordions.forEach(($el) => {
  const form = $el.querySelector('form');
  if (!!form && form.length) {
    results.push({
      element: $el,
      type: 'error',
      content: 'Do <strong>not nest forms</strong> within the Accordion component. If the form contains validation issues, a person may not see the form feedback since the accordion panel goes back to its original closed state.',
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
