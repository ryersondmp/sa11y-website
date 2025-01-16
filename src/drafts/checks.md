---
layout: base
title: Checks
permalink: '/get-started/checks/'
order: 4
---

# {{title}}
Sa11y has over 80 checks.

## Content author checks
List of content author errors and warnings.

1. **Skipped heading levels.** Flags heading that are more than one level below the previous heading level. Headings with skipped levels disrupt a web page’s content order and hierarchy, making it harder to follow.

1. **Empty headings.** Flags headings that do not contain any text. Empty headings are announced to assistive technology users and may cause confusion. To fix, delete the empty heading, or change the formatting to normal/paragraph text.

1. **Headings that are too long.** Flags headings that are longer than 160 characters. Headings should be brief (no longer than a sentence), informative, and unique. Ensure semantic headings are used to organize content and convey page structure.

1. **Page does not start with Heading 1 or Heading 2.** Flags the first heading on the page if it is not a Heading 1 or Heading 2. The first heading on a page should usually be a Heading 1 or a Heading 2. A Heading 1 should be the start of the main content section, and is the main heading that describes the overall purpose of the page.

1. **Missing Heading 1.** Heading 1 should be the start of the main content area, and is the main heading that describes the overall purpose of the page.

1. **Heading is a decorative image.** Flags headings that only contain a decorative image. Decorative images are ignored by assistive technology, meaning these headings are functionally empty. To fix, change the formatting to normal/paragraph text, or add alt text to the image.

1. **Blockquote used as headings.** Flags suspicious blockquotes that may be used as headings.

1. **Bold and/or large text used as heading.** Flags suspicious bold/large text that may be used as headings. While text that is bold and/or large may visually appear as a heading, assistive technology users cannot tell that it is important or use it to navigate the page. If text is used to organize content and/or convey page structure, format it as a heading.

1. **Empty hyperlinks.**

1. **Link has an invalid "aria-labelledby" attribute.** Which may result in an empty accessible name.

1. **Link does not have discernible text.** Most likely caused by a SVG or icon font without an accessible name.

1. **Non-descript link text.** Hyperlink has non-descriptive words like "learn more" or "click here".

1. **Visible link text is non-descriptive, despite having a descriptive accessible name.**

1. **Link contains "click here" text.** The phrase "click" or "click here" places focus on mouse mechanics, when many people do not use a mouse or may be viewing this website on a mobile device.

1. **Duplicate title attribute on images and links.** The "title" attribute on links and images is meant to provide extra information, and should be different than the text or alt text.

1. **Link text contains HTML symbols.** Avoid using symbols as calls to action within link text unless they are hidden from assistive technologies.

1. **Long URLs used as link text.** Longer, less intelligible URLs used as link text might be difficult to comprehend with assistive technology.

1. **Non-descript DOI or academic journal links used as link text.** The APA recommends using descriptive links by wrapping the URL or DOI of the work around its title.

1. **Link opens in a new tab or window without warning.** Doing so can be disorienting, especially for people who have difficulty perceiving visual content.

1. **Link points to a PDF or downloadable file (e.g. MP3, Zip, Word Doc) without warning.** Indicate the file type within the link text.

1. **Link has identical text as another link, although it points to a different page**.** Multiple links with the same text may cause confusion for people who use screen readers.

1. **Image missing alt text.**

1. **Linked image is missing alt text.**

1. **Linked image has surrounding text, but alt should be marked as decorative.**

1. **Image's alt text contains file extension.**

1. **Linked image's alt text contains file extension.** Alt text should describe destination of the link.

1. **Image has non-descript or placeholder alt text.**

1. **Linked image has non-descript or placeholder alt text.** Alt text should describe destination of the link.

1. **Image's alt text contains words like "image of" or "photo of."**

1. **Linked decorative image is missing alt text.** Alt should describe destination of the link.

1. **Alt text description is too long.** Alt text should be concise, yet meaningful like a tweet (around 100 characters).

1. **Alt text description on a linked image is too long.** The alt text on linked images should describe where the link takes you, not a literal description of the image.

1. **Image link contains alt text.** Alt text should describe destination of link.

1. **Image link contains both alt text and surrounding link text.** If this image is decorative and is being used as a functional link to another page, consider marking the image as decorative. The surrounding link text should suffice.

1. **Figure image is marked as decorative and caption was provided.** Alt text should most likely be provided too.

1. **Figure image has duplicate alt and caption text.** The caption should usually provide context to relate the image back to the surrounding content, or give attention to a particular piece of information.

1. **Decorative images.** If the image conveys a story, mood, or important information, make sure to add alt text.',

1. **Decorative images within a carousel or gallery should include alt text.**

### Successes
1. Image is marked as decorative, although the link is using the surrounding text as a descriptive label.

1. **Image has alt text.**

## Developer checks
To enable the following checks, toggle **Developer checks** in the **Settings** tab.

1. **Image button is missing alt text.** Please add alt text to provide an accessible name. For example: <em>Search</em> or <em>Submit</em>.'

1. **Reset buttons should not be used unless specifically needed because they are easy to activate by mistake.** Learn why [Reset and Cancel buttons pose usability issues.](https://www.nngroup.com/articles/reset-and-cancel-buttons/)

1. **Input has an accessible name, although please ensure there is a visible label too.**

1. **Input has an `id`, but no corresponding label with `for` attribute.**

1. **No label associated with input.** Please add an <code>id</code> to this input, and add a matching <code>for</code> attribute to the label.

1. **Disappearing placeholder text** makes it hard for people to remember what information belongs in a field and to identify and correct validation issues. Instead, consider using a permanently visible hint before the form field. Learn more: [Placeholders in form fields are harmful.](https://www.nngroup.com/articles/form-design-placeholders/)

