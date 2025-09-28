---
layout: base
title: Checks
permalink: '/get-started/checks/'
order: 6
---

# {{title}}
Sa11y has over 80 checks.

<nav aria-labelledby="onthispage">

<h2 class="h5" id="onthispage">On this page:</h2>

- [Content author checks](#content-author-checks)
- [Developer checks](#developer-checks)

</nav>

## Content author checks
List of content author errors and warnings.

### Structure and headings

1. **Skipped heading levels.** Flags heading that are more than one level below the previous heading level. Headings with skipped levels disrupt a web page’s content order and hierarchy, making it harder to follow.

1. **Empty headings.** Flags headings that do not contain any text. Empty headings are announced to assistive technology users and may cause confusion. To fix, delete the empty heading, or change the formatting to normal/paragraph text.

1. **Headings that are too long.** Flags headings that are longer than 160 characters. Headings should be brief (no longer than a sentence), informative, and unique. Ensure semantic headings are used to organize content and convey page structure.

1. **Page does not start with Heading 1 or Heading 2.** Flags the first heading on the page if it is not a Heading 1 or Heading 2. The first heading on a page should usually be a Heading 1 or a Heading 2. A Heading 1 should be the start of the main content section, and is the main heading that describes the overall purpose of the page.

1. **Missing Heading 1.** Heading 1 should be the start of the main content area, and is the main heading that describes the overall purpose of the page.

1. **Heading is a decorative image.** Flags headings that only contain a decorative image. Decorative images are ignored by assistive technology, meaning these headings are functionally empty. To fix, change the formatting to normal/paragraph text, or add alt text to the image.

1. **Blockquote used as headings.** Flags suspicious blockquotes that may be used as headings.

1. **Bold and/or large text used as heading.** Flags suspicious bold/large text that may be used as headings. While text that is bold and/or large may visually appear as a heading, assistive technology users cannot tell that it is important or use it to navigate the page. If text is used to organize content and/or convey page structure, format it as a heading.

1. **Bold and italic tags have semantic meaning, and should not be used to highlight entire paragraphs.** Bolded text should be used to provide emphasis on a word or phrase. Italics should be used to highlight proper names (i.e. book and article titles), foreign words, quotes. Long quotes should be formatted as a blockquote.

1. **Potential non-semantic list.** Make sure to use semantic lists by using the bullet or number formatting buttons instead. When using a semantic list, assistive technologies are able to convey information such as the total number of items and the relative position of each item in the list.

### Links

1. **Empty hyperlinks.** Links that are a single empty space.

1. **Link does not have discernible text.** Most likely caused by a SVG or icon font without an accessible name.

1. **Non-descript link text.** Hyperlink has non-descriptive words like "learn more" or "click here".

1. **Visible link text is non-descriptive despite a descriptive accessible name.** For example, a link labeled "Learn more" with an accessible name like "Learn more about Sa11y" will trigger a warning. While technically accessible, this is not an effective link label or best practice.

1. **Link contains "click here" text.** The phrase "click" or "click here" places focus on mouse mechanics, when many people do not use a mouse or may be viewing this website on a mobile device.

1. **Duplicate title attribute on images and links.** The `title` attribute on links and images is meant to provide extra information, and should be different than the text or alt text.

1. **Link text contains HTML symbols.** Avoid using symbols as calls to action within link text unless they are hidden from assistive technologies.

1. **Long URLs used as link text.** Longer, less intelligible URLs used as link text might be difficult to comprehend with assistive technology. Consider replacing the URL with descriptive link text.

1. **Non-descript DOI or academic journal links used as link text.** The APA recommends using descriptive links by wrapping the URL or DOI of the work around its title.

1. **Link opens in a new tab or window without warning.** Doing so can be disorienting, especially for people who have difficulty perceiving visual content.

1. **Link points to a PDF or downloadable file (e.g. MP3, Zip, Word Doc) without warning.** Indicate the file type within the link text.

1. **Link has identical text as another link, although it points to a different page.** Multiple links with the same text may cause confusion for people who use screen readers.

1. **Unable to check document for accessibility.** Linked documents are considered web content and must be made accessible as well. Please manually review Google Workspace and Microsoft Office documents.

1. **Broken same-page link.** The link target does not match any element on the page.

### Images

1. **Image missing alt text.**

1. **Linked image is missing alt text.**

1. **Linked image has surrounding text, but alt should be marked as decorative.**

1. **Image's alt text contains file extension.**

1. **Linked image's alt text contains file extension.** Alt text should describe destination of the link.

1. **Image contains unpronounceable characters in alt text.** Such as empty space, a single period, etc.

1. **Image has non-descript or placeholder alt text.**

1. **Linked image has non-descript or placeholder alt text.** Alt text should describe destination of the link.

1. **Image's alt text contains words like "image of" or "photo of."**

1. **Linked decorative image is missing alt text.** Alt should describe destination of the link.

1. **Alt text description is too long.** Alt text should be concise, yet meaningful like a tweet (around 100 characters).

1. **Alt text description on a linked image is too long.** The alt text on linked images should describe where the link takes you, not a literal description of the image.

1. **Linked image contains alt text.** Alt text should describe destination of link - please manually review for accuracy.

1. **Linked image contains both alt text and surrounding link text.** If this image is decorative and is being used as a functional link to another page, consider marking the image as decorative. The surrounding link text should suffice.

1. **Figure image is marked as decorative and caption was provided.** Alt text should most likely be provided too.

1. **Figure image has duplicate alt and caption text.** The caption should usually provide context to relate the image back to the surrounding content, or give attention to a particular piece of information.

1. **Decorative images.** Ensure image is purely decorative, like a border or visual spacer element. If the image conveys a story, mood, or important information, make sure to add alt text.

1. **Decorative images within a carousel or gallery should include alt text.**

### Colour and contrast
1. **Text has poor contrast with background.**

1. **Text has very low opacity.** Lower opacity negatively impacts readability.

1. **Text has unknown contrast.** Background may be an image or gradient, or colour space may be unsupported. Please manually review the text contrast.

### Tables
1. **Table is missing header cells.** Tables should have header cells that accurately describe their respective column or row. Avoid using tables for aesthetic purposes.

1. **Table has empty header cell(s).** All header cells should have readable text. If the cell needs to be empty, remove the header format.

1. **Table contains semantic headings.** Tables should be structured with header cells. Avoid using semantic headings (`h1` - `h6`) within a table.

### Embedded content

1. **Ensure all videos have closed captioning.** Embedded content sourced from a known video hosting website will receive a warning.

1. **Ensure to provide a transcript for all podcasts.** Embedded content sourced from a known podcast hosting website will receive a warning.

1. **Ensure all data visualization widgets are accessible.** Tableau and Google Looker Studio widgets will receive a warning.

1. **Embedded content requires an accessible name that describes its contents.** Please provide a unique `title` or `aria-label` attribute on the `iframe` element.

1. **Unable to check embedded content.** Please make sure that images have alt text, videos have captions, text has sufficient contrast, and interactive components are [keyboard accessible.](https://webaim.org/techniques/keyboard/)

### Best practices

1. **Excessive all caps or uppercase text.** Some screen readers may interpret all caps text as an acronym and will read each letter individually. Additionally, some people find all caps more difficult to read and it may give the appearance of SHOUTING.

1. **Underlined text can be confused with links.** Consider using a different style such as bold (`<strong>`) or italics (`<em>`).

1. **The subscript and superscript formatting options should only be used to change the position of text for typographical conventions or standards.** It should not solely be used for presentation or appearance purposes. Formatting entire sentences poses readability issues. Appropriate use cases would include displaying exponents, ordinal numbers such as 4<sup>th</sup> instead of fourth, and chemical formulas (e.g. H<sub>2</sub>O).

1. **Avoid nesting interactive layout components, such as placing accordions within other accordions, or placing tabs inside accordions and vice versa.** This can complicate navigation, increase cognitive overload, and lead to people overlooking content.

1. **Avoid using justified text, which aligns to both the left and right margins.** This can be difficult for some people to read due to the uneven spaces between words. Use left-aligned text for better readability.

1. **Small text is harder to read, particularly for those with low vision.** To ensure better readability, avoid using font sizes smaller than the default.

1. **Reset buttons should not be used unless specifically needed because they are easy to activate by mistake.** Learn why [Reset and Cancel buttons pose usability issues.](https://www.nngroup.com/articles/reset-and-cancel-buttons/)

### Successes
1. **Image is marked as decorative, although the link is using the surrounding text as a descriptive label.**

1. **Image has alt text.**

## Developer checks
To enable the following checks, toggle **Developer checks** in the **Settings** tab.

### Page structure and meta tags
1. **Page is missing a title.**

1. **Page is missing a language.** Ensure all pages have a defined `lang` attribute within the page's `<html>` tag.

1. **Page has scaling disabled.** Scaling a page is important for low-vision users who may have difficulty reading small text.

1. **Page's maximum scale is too low.** All pages should allow for at least 200% (2x) zoom. When including a `maximum-scale` meta attribute, ensure the value is no less than two.

1. **Page automatically refreshes.** Automatic refreshes may be disorienting and/or cause users to lose their progress.

### Buttons & links

1. **Image button is missing alt text.** Please add alt text to provide an accessible name. For example: *Search* or *Submit*.

1. **Link has an invalid "aria-labelledby" attribute.** This may result in an empty accessible name.

1. **Button is missing an accessible name that describes its purpose.**

1. **Button has an `aria-labelledby` value that is empty or does not match the `id` value of another element on the page.**

1. **Button has the text "button" within the accessible name.** Screen readers already convey the role of an element in addition to its name.

1. **The visible text for this element appears to be different than the accessible name.** This may cause confusion for assistive technologies users.

### Inputs

1. **Input has an accessible name, although please ensure there is a visible label too.**

1. **Input has an `id`, but no corresponding label with `for` attribute.**

1. **No label associated with input.** Please add an <code>id</code> to this input, and add a matching <code>for</code> attribute to the label.

1. **Disappearing placeholder text** makes it hard for people to remember what information belongs in a field and to identify and correct validation issues. Instead, consider using a permanently visible hint before the form field. Learn more: [Placeholders in form fields are harmful.](https://www.nngroup.com/articles/form-design-placeholders/)

### Other

1. **Element has a positive `tabindex`.** A positive tab index may negatively impact navigation of the page. Avoid positive tab indices, and ensure the page is structured in a logical order.

1. **Focusable element is hidden with `aria-hidden`.** Ensure hidden elements also have the `tabindex="-1"` attribute.

1. **`<iframe>` with focusable elements should not have `tabindex="-1"`.** The embedded content will not be keyboard accessible.

1. **Elements with duplicate ID attributes.** Duplicate ID errors are known to cause problems for assistive technologies when they are trying to interact with content.

1. **All `<li>` list items must be placed inside `<ul>` unordered or `<ol>` ordered elements.** This structure helps screen readers announce the list and its items accurately.

1. **SVG graphic has unknown contrast.** SVGs with multiple `<path>` elements will recieve a warning to manually review contrast.

1. **SVG graphic has poor contrast with background.** For simple SVGs, with a single `<path>`, Sa11y is able to calculate the contrast against the background.

1. **Placeholder text within input has poor contrast.**

1. **Text within this input does not have enough contrast with the background.**

{% set collectionName = "getstarted" %}
{% include "partials/pagination.njk" %}

