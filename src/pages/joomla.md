---
layout: base
title: Joomla Plugin
permalink: '/joomla/'
order: 3
---

# {{title}} {% joomlaIcon %}

Sa11y is proudly a core feature within [Joomla](https://www.joomla.org/) as of version 4.1 and above — no installation necessary! Within Joomla, Sa11y is recognized as the **Joomla Accessibility Checker,** also referred to as Jooa11y.

## Accessibility Check
When editing an article, you can quickly check a page for accessibility using the **Accessibility Check** button within the Toolbar.

<img width="1100" class="img-fluid img-thumbnail mb-4" alt="Screenshot of the Accessibility Check within the Joomla Toolbar while editing a page." src="{{ '/images/screenshots/joomla-toolbar.png' | url }}">

## Settings page
Jooa11y works out-of-the-box, although you can use the settings page to customize the experience for website authors and adapt Jooa11y to your theme. If your website authors can't fix it - don't check it!

1. From the Administrator page, go to **System**.
2. Go to **Plugins**.
3. Search for **Accessibility Checker**.
3. Select **System - Joomla Accessibility Checker**.

For additional assistance navigating through the different settings, select the **Toggle Inline Help** button.

<p class="alert alert-warning"><i class="bi bi-exclamation-octagon-fill"></i> <strong>Note:</strong> Basic knowledge of HTML and CSS is recommended for the following settings.</p>

### Adding exclusions
You can ignore repetitive elements or create exclusions using [CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp) or [HTML sectioning elements](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html) within the **Ignore Regions** field. Use a comma to seperate multiple selectors or elements.

### Extra Properties

**Extra Properties** allow you to further customize the experience for content authors or ensure compatibility with your Joomla template. Each prop should have a key and value pair. View a list of <a href="{{ '/developers/props/' | url}}">all props.</a>

<details class="mb-3">
  <summary>Example: adding extra properties</summary>

  Setting the <a href="{{ '/developers/props/#colourfilterplugin' | url}}">`colourFilterPlugin`</a> property to `false` will hide the **Colour filter** feature in the Settings panel.

  <img width="800" class="img-fluid img-thumbnail mb-4" alt="Extra Properties field in Joomla admin settings." src="{{ '/images/screenshots/joomla-extra-props.png' | url }}">

  <img width="800" class="img-fluid img-thumbnail mb-4" alt="Colour filter featured hidden within Settings panel." src="{{ '/images/screenshots/joomla-colour-filter.webp' | url }}">

</details>

### Turn Off Checks
Available in **Joomla 5.3** and above. To turn off a check, find the desired key within the [language file](https://github.com/ryersondmp/sa11y/blob/master/src/js/lang/en.js#L127) or [default options.](https://github.com/ryersondmp/sa11y/blob/master/src/js/utils/default-options.js#L73)

<details>
  <summary>Example: turning off a check</summary>

  Setting the `QA_UPPERCASE` key to `false` will turn off the check for excessive uppercase or all-caps text.

  <img width="800" class="img-fluid img-thumbnail mb-4" alt="Turn off checks field in Joomla admin settings." src="{{ '/images/screenshots/joomla-turn-off-checks.png' | url }}">
</details>


<hr aria-hidden="true" class="mt-5">

## Frequently asked questions

### I do not see any errors or warnings on the page?
Use the "Skip to issue" button or press <kbd>alt</kbd> <kbd>S</kbd>. If you still do not see them, it's most likely an accessibility issue with your theme. Consult a web developer to have a look.

The issue may also be caused by conflicting or overlapping elements. Developers, please view documentation on <a href="{{ '/developers/conflicting-css/' | url }}">conflicting CSS.</a>

### I tagged my PDFs in Acrobat, although I still get a warning?
Sa11y is not able to check for accessibility issues within PDFs. Sa11y will flag all PDFs as a warning regardless if they are accessible or not.

### My videos have closed captions, although I still get a warning?
If your video has accurate closed captions, please ignore this warning. Sa11y is not able to validate or confirm if videos have accurate captions.
