---
layout: base
title: WordPress Plugin
permalink: '/wordpress/'
order: 4
---

<h1>{{title}} <i class="bi bi-wordpress"></i></h1>

## Install
The easiest way to install Sa11y on WordPress is to use the plugin search. Alternatively, you can download and install Sa11y manually from the [plugin page.](https://wordpress.org/plugins/sa11y/)

<img width="1100" class="img-fluid img-thumbnail mb-4" alt="Screenshot of the Add Plugins page with Sa11y in the search bar and results." src="{{ '/images/screenshots/wordpress-add-plugin.webp' | url }}">

1. Log in to your WordPress site.
2. Go to the **Dashboard**
3. Go to **Plugins** <i class="bi bi-arrow-right"></i><span class="sr-only">, then</span> **Add New**
4. In the search field, type: `Sa11y`
5. Go to the **Install Now** button.
6. Now press the **Activate** button.

If successfully installed, Sa11y will appear in the bottom right corner when navigating between pages of your website. You can also use Sa11y in **Preview** mode when editing a page.

## Advanced Settings page
Sa11y works out-of-the-box, although you can use the Advanced Settings page to customize the experience for website authors and adapt Sa11y to your theme. If your website authors can't fix it - don't check it!

1. Go to the **Dashboard**
2. Go to **Settings** <i class="bi bi-arrow-right"></i><span class="sr-only">, then</span> **Sa11y**

### Adding exclusions

<p class="alert alert-warning"><i class="bi bi-exclamation-octagon-fill"></i> <strong>Note:</strong> Basic knowledge of HTML and CSS is recommended.</p>

 You can ignore repetitive elements or create exclusions using [CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp) or [HTML sectioning elements.](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html) For each exclusion field, you can pass one or more selectors. Use a comma to seperate multiple selectors or elements.

Sa11y ignores the Comments section on all pages by default. The parent container for the comments section has a unique `id` of `#comments`. Use commas to pass additional selectors, for example `#comments, footer, .social-widget`. In this example, the WordPress comments section will be ignored, the footer of the page, and any element that has a CSS class name of `social-widget`.

### Adding sources to check embedded content
This section contains a list of common video, audio, and data visualization sources. For example, if your videos are hosted on another website (`https://youtu.be/dQw4w9WgXcQ`) - add `youtu.be` as a video source so the correct warning displays.

### Advanced customization with props
You can use the extra props (properties) field to turn off specific checks or enable other features. Use a comma to seperate multiple boolean (true or false) props in this field. View a list of <a href="{{ '/developers/props/' | url}}">all props.</a>

For example, if you would like to hide "Good" buttons for links that have an accessible name via ARIA attributes, you can pass the following prop `showGoodLinkButton: false` in this field.

<hr aria-hidden="true" class="mt-5">

## Frequently asked questions

### I do not see any errors or warnings on the page?
Use the "Skip to issue" button or press <kbd>alt</kbd> <kbd>S</kbd>. If you still do not see them, it's most likely an accessibility issue with your theme. Consult a web developer to have a look.

The issue may also be caused by conflicting or overlapping elements. Developers, please view documentation on <a href="{{ '/developers/conflicting-css/' | url }}">conflicting CSS.</a>

### I tagged my PDFs in Acrobat, although I still get a warning?
Sa11y is not able to check for accessibility issues within PDFs. Sa11y will flag all PDFs as a warning regardless if they are accessible or not.

### My videos have closed captions, although I still get a warning?
If your video has accurate closed captions, please ignore this warning. Sa11y is not able to validate or confirm if videos have accurate captions.

## Feedback
Please [report bugs or leave feedback](https://forms.gle/sjzK9XykETaoqZv99) to improve Sa11y. If you have a GitHub account, you can submit your [issue on GitHub.](https://github.com/ryersondmp/sa11y/issues)