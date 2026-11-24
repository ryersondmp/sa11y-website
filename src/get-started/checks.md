---
layout: base
title: Checks
permalink: '/get-started/checks/'
order: 6
---

# {{title}}
Sa11y has over 100 checks.

<nav aria-labelledby="onthispage">

<h2 class="h5" id="onthispage">On this page:</h2>

- [Content author checks](#content-author-checks)
- [Developer checks](#developer-checks)

</nav>

## Content author checks
List of content author errors and warnings.

### Structure and headings

1. **Skipped heading levels.** Headings that are more than one level below the previous heading level disrupt the page's content order and hierarchy, making it harder to follow.

1. **Empty headings.** Headings that do not contain any text are announced to assistive technology users and may cause confusion. Delete the empty heading or change the formatting to normal/paragraph text.

1. **Headings that are too long.** Headings longer than 160 characters should be brief (no longer than a sentence), informative, and unique. Use semantic headings to organize content and convey page structure.

1. **Headings that only contain unpronounceable characters.** Headings should not contain only symbols, private Unicode characters, or icon fonts.

1. **Page does not start with Heading 1 or Heading 2.** The first heading on a page should be a Heading 1 or Heading 2. A Heading 1 should be the start of the main content section and describes the overall purpose of the page.

1. **Missing Heading 1.** Heading 1 should be the start of the main content area and describes the overall purpose of the page.

1. **Heading is a decorative image.** Headings that only contain a decorative image are functionally empty to assistive technology. Change the formatting to normal/paragraph text or add alt text to the image.

1. **Blockquote used as headings.** Blockquotes should not be used as headings. Use semantic heading elements instead.

1. **Bold and/or large text used as heading.** Text that is bold and/or large may visually appear as a heading, but assistive technology users cannot tell that it is important or use it to navigate. If text is used to organize content and convey page structure, format it as a semantic heading.

1. **Bold and italic tags have semantic meaning, and should not be used to highlight entire paragraphs.** Use bold to provide emphasis on a word or phrase. Use italics to highlight proper names (book and article titles), foreign words, or quotes. Format long quotes as blockquotes.

1. **Potential non-semantic list.** Use semantic lists by using the bullet or number formatting buttons instead. Semantic lists help assistive technologies convey information such as the total number of items and the relative position of each item.


### Links

1. **Empty hyperlinks.** Links should not be a single empty space.

1. **Link does not have discernible text.** Links must have an accessible name, usually caused by an SVG or icon font without an accessible name.

1. **Non-descript link text.** Hyperlinks should not use non-descriptive words like "learn more" or "click here".

1. **Visible link text is non-descriptive despite a descriptive accessible name.** While technically accessible, non-descriptive link labels (such as "Learn more" with an accessible name like "Learn more about Sa11y") are not effective. Ensure link text is descriptive to users.

1. **Link contains "click here" text.** Avoid using the phrase "click" or "click here" as it focuses on mouse mechanics. Many people do not use a mouse or may be viewing this website on a mobile device.

1. **Duplicate title attribute on images and links.** The `title` attribute should provide extra information and should be different from the text or alt text.

1. **Link text contains HTML symbols.** Avoid using symbols as calls to action within link text unless they are hidden from assistive technologies.

1. **Long URLs used as link text.** Long, unintelligible URLs used as link text are difficult to comprehend with assistive technology. Replace the URL with descriptive link text.

1. **Non-descript DOI or academic journal links used as link text.** The APA recommends using descriptive links by wrapping the URL or DOI around the work's title.

1. **Link opens in a new tab or window without warning.** Opening links in new tabs or windows can be disorienting, especially for people who have difficulty perceiving visual content. Warn users when links open in a new tab or window.

1. **Link points to a PDF or downloadable file (e.g. MP3, Zip, Word Doc) without warning.** Indicate the file type within the link text.

1. **Link has identical text as another link, although it points to a different page.** Multiple links with the same text may cause confusion for screen reader users. Use unique, descriptive link text.

1. **Unable to check document for accessibility.** Linked documents are considered web content and must be made accessible. Manually review Google Workspace and Microsoft Office documents.

1. **Broken same-page link.** The link target does not match any element on the page. Use a valid link target that exists on the page.

1. **Links containing only symbols (e.g., ., >, ?) or unpronounceable characters.** Links must have discernible text. Replace symbols or unpronounceable characters with descriptive link text.

### Images

1. **Image missing alt text.** All images should have descriptive alt text.

1. **Linked image is missing alt text.** Linked images must have alt text that describes the link destination.

1. **Linked image has surrounding text, but alt should be marked as decorative.** If the surrounding link text describes the destination, mark the image as decorative.

1. **Image's alt text contains file extension.** Remove file extensions from alt text.

1. **Linked image's alt text contains file extension.** Alt text should describe the link destination, not the file name. Remove file extensions.

1. **Image contains unpronounceable characters in alt text.** Alt text should not contain only empty space, a single period, or other unpronounceable characters.

1. **Image contains automatically generated or placeholder alt text values.** Alt text should not be machine-generated (such as "~ai-3a3cb8f0-1554-4e2b-b159"). Machine-generated alt text is typically a single long string with non-alphabetic characters.

1. **Image has non-descript or placeholder alt text.** Alt text should be descriptive and meaningful.

1. **Linked image has non-descript or placeholder alt text.** Alt text should describe the link destination.

1. **Image's alt text contains words like "image of" or "photo of."** Avoid these phrases in alt text. Users already know it is an image.

1. **Linked decorative image is missing alt text.** Decorative images used as links must have alt text that describes the link destination.

1. **Alt text description is too long.** Alt text should be concise and meaningful, around 100 characters (like a tweet).

1. **Alt text description on a linked image is too long.** Alt text on linked images should describe where the link takes you, not a literal description of the image. Keep it concise.

1. **Linked image contains alt text.** Alt text should describe the link destination. Manually review for accuracy.

1. **Linked image contains both alt text and surrounding link text.** If the image is decorative and is being used as a functional link, consider marking it as decorative. The surrounding link text should suffice.

1. **Figure image is marked as decorative and caption was provided.** When a caption is provided, consider providing alt text as well.

1. **Figure image has duplicate alt and caption text.** The caption should provide context to relate the image to the surrounding content. Use different text for alt and caption.

1. **Decorative images.** Ensure the image is purely decorative (like a border or visual spacer). If it conveys a story, mood, or important information, add alt text.

1. **Decorative images within a carousel or gallery should include alt text.** Carousel and gallery images should have descriptive alt text even if they are mostly decorative.

### Colour and contrast
1. **Text has poor contrast with background.** Ensure text has sufficient contrast with its background for readability.

1. **Text has very low opacity.** Lower opacity negatively impacts readability. Use higher opacity values.

1. **Text has unknown contrast.** The background may be an image or gradient, or the colour space may be unsupported. Manually review the text contrast.

### Tables
1. **Table is missing header cells.** Tables should have header cells that accurately describe their respective column or row. Do not use tables for aesthetic purposes.

1. **Table has empty header cell(s).** All header cells should have readable text. If the cell needs to be empty, remove the header format.

1. **Table contains semantic headings.** Tables should be structured with header cells. Do not use semantic headings (`h1` - `h6`) within a table.

1. **Single-column tables that appear to be layout or lists rather than tabular data.** Use semantic lists instead of single-column tables for lists of items.

1. **Single-cell tables that appear to be visual borders or callout containers.** Use semantic HTML elements instead of single-cell tables for visual styling.

### Embedded content

1. **Ensure all videos have closed captioning.** Videos should have closed captions to ensure deaf and hard-of-hearing users can access audio content.

1. **Ensure to provide a transcript for all podcasts.** Podcasts should include transcripts to ensure deaf and hard-of-hearing users can access audio content.

1. **Ensure all data visualization widgets are accessible.** Data visualization widgets such as Tableau and Google Looker Studio should be accessible to all users.

1. **Embedded content requires an accessible name that describes its contents.** Provide a unique `title` or `aria-label` attribute on the `iframe` element.

1. **Unable to check embedded content.** Manually verify that images have alt text, videos have captions, text has sufficient contrast, and interactive components are [keyboard accessible.](https://webaim.org/techniques/keyboard/)

1. **Avoid autoplay videos.** Autoplaying videos must have a pause button to prevent distraction or disorientation.

### Best practices

1. **Excessive all caps or uppercase text.** Some screen readers may interpret all caps text as an acronym and read each letter individually. Additionally, all caps text is harder for many people to read and may appear to be shouting.

1. **Underlined text can be confused with links.** Use a different style such as bold (`<strong>`) or italics (`<em>`).

1. **The subscript and superscript formatting options should only be used to change the position of text for typographical conventions or standards.** Do not use them solely for presentation or appearance. Formatting entire sentences poses readability issues. Use subscript and superscript for exponents, ordinal numbers such as 4<sup>th</sup> instead of fourth, and chemical formulas (e.g. H<sub>2</sub>O).

1. **Avoid nesting interactive layout components, such as placing accordions within other accordions, or placing tabs inside accordions and vice versa.** This complicates navigation, increases cognitive overload, and may cause people to overlook content.

1. **Avoid using justified text, which aligns to both the left and right margins.** Justified text is difficult for some people to read due to uneven spaces between words. Use left-aligned text for better readability.

1. **Small text is harder to read, particularly for those with low vision.** Avoid using font sizes smaller than the default to ensure better readability.

1. **Reset buttons should not be used unless specifically needed because they are easy to activate by mistake.** Learn why [Reset and Cancel buttons pose usability issues.](https://www.nngroup.com/articles/reset-and-cancel-buttons/)

### Successes
1. **Image is marked as decorative, although the link is using the surrounding text as a descriptive label.** When a decorative image is used as a link with surrounding descriptive text, the link is accessible.

1. **Image has alt text.** Image alt text is properly provided.

## Developer checks
To enable the following checks, toggle **Developer checks** in the **Settings** tab.

### Page structure and meta tags
1. **Page is missing a title.** Add a descriptive title to the page.

1. **Page title is not descriptive.** Page titles should be descriptive. Avoid titles like "untitled" or "index."

1. **Page is missing a language.** Ensure all pages have a defined `lang` attribute within the page's `<html>` tag.

1. **Page has scaling disabled.** Users need the ability to scale the page. Scaling is important for low-vision users who need to zoom in on text.

1. **Page's maximum scale is too low.** All pages should allow for at least 200% (2x) zoom. When including a `maximum-scale` meta attribute, ensure the value is at least two.

1. **Page automatically refreshes.** Automatic refreshes can be disorienting and may cause users to lose their progress. Remove automatic refresh or provide a user-controlled option.

### Buttons & links

1. **Image button is missing alt text.** Add alt text to provide an accessible name (such as "Search" or "Submit").

1. **Link has an invalid "aria-labelledby" attribute.** Ensure the `aria-labelledby` attribute points to an element with a matching ID on the page.

1. **Button is missing an accessible name that describes its purpose.** Use text, `aria-label`, or `aria-labelledby` to provide an accessible name.

1. **Button has an `aria-labelledby` value that is empty or does not match the `id` value of another element on the page.** Ensure the value matches an element's ID on the page.

1. **Button has the text "button" within the accessible name.** Screen readers already announce the role of a button. Avoid redundant text like "button" in the accessible name.

1. **The visible text for this element appears to be different than the accessible name.** This may cause confusion for assistive technology users. Ensure visible text matches the accessible name.

### Inputs

1. **Input has an accessible name, although please ensure there is a visible label too.** Inputs should have both an accessible name and a visible label for clarity.

1. **Input has an `id`, but no corresponding label with `for` attribute.** Add a label with a `for` attribute that matches the input's `id`.

1. **No label associated with input.** Add an `id` to the input, and add a matching `for` attribute to the label.

1. **Disappearing placeholder text** makes it hard for people to remember what information belongs in a field and to identify and correct validation issues. Consider using a permanently visible hint before the form field. Learn more: [Placeholders in form fields are harmful.](https://www.nngroup.com/articles/form-design-placeholders/)

### Other

1. **Element has a positive `tabindex`.** A positive tab index may negatively impact keyboard navigation. Avoid positive tab indices and ensure the page is structured in a logical order.

1. **Focusable element is hidden with `aria-hidden`.** Hidden elements should also have the `tabindex="-1"` attribute to prevent keyboard focus.

1. **`<iframe>` with focusable elements should not have `tabindex="-1"`.** The embedded content will not be keyboard accessible. Remove the negative tab index.

1. **Elements with duplicate ID attributes.** Duplicate IDs are known to cause problems for assistive technologies. Ensure all IDs are unique.

1. **All `<li>` list items must be placed inside `<ul>` unordered or `<ol>` ordered elements.** This structure helps screen readers announce the list and its items accurately.

1. **SVG graphic has unknown contrast.** SVGs with multiple `<path>` elements need manual review. Manually check the contrast of SVG elements against their background.

1. **SVG graphic has poor contrast with background.** For simple SVGs with a single `<path>`, ensure sufficient contrast. For complex SVGs, manually review contrast.

1. **SVG graphic lacks an accessible name.** Provide an accessible name for SVG graphics using `<title>`, `aria-label`, or `aria-labelledby`.

1. **Placeholder text within input has poor contrast.** Ensure placeholder text has sufficient contrast with the input background.

1. **Text within this input does not have enough contrast with the background.** Ensure input text has sufficient contrast with the background for readability.

1. **Language tag validation.** All `lang` tags are validated to ensure BCP 47 conformance. Use valid language tags.

1. **Same page links which resemble a scripted UI control** should use proper semantic elements instead. Use semantic HTML elements for interactive controls.

1. **The `headers` attribute within a table contains a valid reference.** The headers attribute correctly references header cells in a table.

1. **ARIA-based input or switch fields contain an accessible name.** The ARIA input or switch field has a proper accessible name.

1. **Summary element inside a details element contains an accessible name.** The summary element has descriptive text that is properly announced.

## Experimental checks
These checks are disabled by default. This new ruleset leverages on-device AI to automatically detect and validate the language of your content, ensuring it matches a web page’s language declaration. This feature helps identify issues pertaining to the following WCAG success criteria:

1. **Language of Page (Level A):** Verifies that the primary language declared in the document matches the actual content on the page.

1. **Language of Parts (Level AA):** Scans individual text blocks and image alt text to ensure shifts in language are correctly identified via the lang attribute.

For more information, please visit [Language of Parts module.](/developers/props/#language-of-parts-module)

{% set collectionName = "getstarted" %}
{% include "partials/pagination.njk" %}

