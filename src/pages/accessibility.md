---
layout: base
title: Accessibility
permalink: '/accessibility/'
order: 5
---

# {{title}}
Sa11y was created with a simple goal of helping all content editors create accessible content for people with disabilities. Sa11y itself was designed to be accessible for people with disabilities too. The maintainers of Sa11y reference the [Web Content Accessibility Guidelines (WCAG) version 2.1](https://www.w3.org/TR/WCAG21/) as its guiding principle, and aims to conform to Level AA.

## Designed with accessibility in mind
- All interactive controls are keyboard accessible, have descriptive labels, and have large target sizes.
- Tooltips for annotations follow the "toggletip" pattern. When a toggletip is activated with a keyboard, it remains opened until intentionally dismissed with the close button. Keyboard focus is intentionally trapped within the toggletip until dismissed.
- Tooltip messages strive to be concise and easy to understand.
- Support for Forced Colours media query (also known as High Contrast Mode in Windows OS).
- All foreground text have at least a 4.5:1 contrast ratio.
- All interactive controls have at least a 3:1 contrast ratio.
- The main control panel uses semantic headings, and ARIA landmarks in a meaningful way.

## Keyboard shortcuts
- Press <kbd>alt</kbd> + <kbd>a</kbd> to toggle Sa11y on and off.
- Press <kbd>alt</kbd> + <kbd>s</kbd> or <kbd>alt</kbd> + <kbd>></kbd> to skip to the next issue/annotation.
- Press <kbd>alt</kbd> + <kbd>w</kbd> or <kbd>alt</kbd> + <kbd><</kbd> to skip to the previous issue/annotation.
- Press <kbd>Escape</kbd> to toggle Sa11y off and hide all tooltips.

## Feedback and issues
Accessibility is an ongoing process and we are committed to continually improving the accessibility of Sa11y. Although we're also human and sometimes make mistakes or get things wrong. So if you have any suggestions or encounter any accessibility barriers while using Sa11y, please contact [{{site.contactEmail}}](mailto:{{site.contactEmail}}) or submit an [issue on GitHub.](https://github.com/ryersondmp/sa11y/issues)
