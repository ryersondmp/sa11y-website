---
layout: base
title: Props
permalink: '/developers/props/'
order: 2
---

# {{title}}

Props allow you to easily customize the experience for content authors. For example:
1. Set the target area to check. If your content authors can't edit it, don't flag it!
2. Ignore entire sections of a page.
3. Add exclusions to ignore false positives.
4. Turn off specific modules or checks.

## Example
```js
<script>
    const sa11y = new Sa11y({
        checkRoot: "main",
        readabilityRoot: "main",
        formLabelsPlugin: false,
        containerIgnore: "#pagination, aside"
    });
</script>
```

## Target area and exclusions
Identify elements by [CSS selectors](https://www.w3schools.com/cssref/css_selectors.asp) or [HTML sectioning elements.](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html) Use a comma to pass multiple selector unless otherwise indicated.

<table class="table table-hover">
    <thead class="table-dark">
        <tr>
            <th width="20%">Prop</th>
            <th width="15%">Default</th>
            <th>Description</th>
        </tr>
    </thead class="table-dark">
    <tbody>
        <tr>
            <td>checkRoot</td>
            <td>'body'</td>
            <td>String. The main target area you would like Sa11y to check. For example, pass <code>main</code> for main content
                area. Accepts a <strong>single selector</strong> only.</td>
        </tr>
        <tr>
            <td>containerIgnore</td>
            <td>'.sa11y-ignore'</td>
            <td>String. Ignore specific regions of the page.</td>
        </tr>
        <tr>
            <td>contrastIgnore</td>
            <td>'.sr-only, [role="menu"] *'</td>
            <td>String. Ignore specific elements from contrast check.</td>
        </tr>
        <tr>
            <td>outlineIgnore</td>
            <td>''</td>
            <td>String. Exclude specific headings from appearing in the Show Outline panel. For example, visually hidden
                headings that may not make sense to sighted people.</td>
        </tr>
        <tr>
            <td>headerIgnore</td>
            <td>''</td>
            <td>String. Ignore specific headings on the page (will not recieve annotations, appear in the Show Outline panel or
                recieve a heading label).</td>
        </tr>
        <tr>
            <td>imageIgnore</td>
            <td>''</td>
            <td>String. Ignore specific images on the page.</td>
        </tr>
        <tr>
            <td>linkIgnore</td>
            <td>'nav, [role=&quot;navigation&quot;]'</td>
            <td>String. Ignore specific links on the page.</td>
        </tr>
        <tr>
            <td>linkIgnoreSpan</td>
            <td>''</td>
            <td>String. Ignore elements within a link to improve accuracy of link checks. For example, pass
                <code>.sr-only</code> to ignore the text "external link": <code>&lt;a href="#"&gt;learn more
                    <strong>&lt;span class="sr-only"&gt;external link&lt;/span&gt;</strong>&lt;/a&gt;</code></td>
        </tr>
        <tr>
            <td>linksToFlag</td>
            <td>''</td>
            <td>String. Check for URLs that you do not want your content authors linking to. For example, absolute URLs that
                point to a development environment: <code>a[href*=&quot;dev.&quot;]</code></td>
        </tr>
    </tbody>
</table>

## Other features
<table class="table table-hover">
    <thead class="table-dark">
        <tr>
            <th>Prop</th>
            <th width="15%">Default</th>
            <th>Description</th>
        </tr>
    </thead class="table-dark">
    <tbody>
        <tr>
            <td>nonConsecutiveHeadingIsError</td>
            <td>true</td>
            <td>Boolean. Set to false if you would like skipped headings to be flagged as a warning instead. By default,
                Sa11y flags skipped headings as an error, however, this is not a WCAG failure.</td>
        </tr>
        <tr>
            <td>flagLongHeadings</td>
            <td>true</td>
            <td>Boolean. Flag headings longer than 170 characters. This is not a WCAG criterion.</td>
        </tr>
        <tr>
            <td>missingH1</td>
            <td>true</td>
            <td>Boolean. Set to false if you would like to turn off this ruleset.</td>
        </tr>
        <tr>
            <td>showGoodLinkButton</td>
            <td>true</td>
            <td>Boolean. Show "Good" annotations on links with an accessible name that was defined with an
                <code>aria-label</code> or <code>aria-labelledby</code> attribute. Sometimes content authors wonder why
                some "learn more" links are not flagged by Sa11y.</td>
        </tr>
        <tr>
            <td>detectSPArouting</td>
            <td>false</td>
            <td>Boolean. Detects URL changes and re-checks the page. This prop is intended for the bookmarklet to
                improve usability when testing single page applications (SPA).</td>
        </tr>
        <tr>
            <td>doNotRun</td>
            <td>''</td>
            <td>String. Using a comma seperated list, provide selectors to unique pages where you do not want Sa11y to check.</td>
        </tr>
        <tr>
            <td>dismissAnnotations</td>
            <td>true</td>
            <td>Boolean. Give content editors the ability to dismiss any warnings.</td>
        </tr>
        <tr>
            <td>headless</td>
            <td>false</td>
            <td>Boolean. Run checks without the GUI (graphical user interface).</td>
        </tr>
        <tr>
            <td>selectorPath</td>
            <td>false</td>
            <td>Boolean. Generates a simple CSS selector path of the element within the `results` array.</td>
        </tr>
         <tr>
            <td>shadowComponents</td>
            <td>''</td>
            <td>String. Provide a list of all known web components to check.</td>
        </tr>
        <tr>
            <td>autoDetectShadowComponents</td>
            <td>false</td>
            <td>Boolean. Automatically check every element on the page for an open shadow DOM, and check for issues within them.</td>
        </tr>
        <tr>
            <td>panelPosition</td>
            <td>'right'</td>
            <td>
            String. Move position of panel in any four corners. Choose from <code>top-left</code>, <code>top-right</code>, <code>left</code>, and <code>right</code>. Accessibility note: When the panel is positioned to the left side, the CSS property <code>flex-direction: row-reverse</code> is used to reverse the items within the main panel status which contains the issue count, Skip-to-issue button and Dismiss button. This causes a <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#accessibility_concerns">disconnect between the visual order and DOM order.</a>
            </td>
        </tr>
        <tr>
          <td>altTextMaxCharLength</td>
          <td>250</td>
          <td>Integer. Modify the alt text character count for warning message about excessively long alt.</td>
        </tr>
         <tr>
          <td>headingMaxCharLength</td>
          <td>170</td>
          <td>Integer. Modify the heading text character count for warning message about excessively long headings.</td>
        </tr>
        <tr>
          <td>URLTextMaxCharLength</td>
          <td>40</td>
          <td>Integer. Modify the URL text character count for warning message about URLs used as link text.</td>
        </tr>
        <tr>
          <td>URLAsLinkTextWarning</td>
          <td>true</td>
          <td>Boolean. Set to false to turn off warning message about URLs used as link text.</td>
        </tr>
        <tr>
          <td>showHinPageOutline</td>
          <td>false</td>
          <td>Boolean. Set to true to prefix each Page Outline item with an H.</td>
        </tr>
    </tbody>
</table>


## Readability module
The readability module is based on [Flesch reading ease.](https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch_reading_ease)

<table class="table table-hover">
    <thead class="table-dark">
        <tr>
            <th width="20%">Prop</th>
            <th width="15%">Default</th>
            <th>Description</th>
        </tr>
    </thead class="table-dark">
    <tbody>
        <tr>
            <td>readabilityPlugin</td>
            <td>true</td>
            <td>Boolean. Set to false to turn off and hide Readability check from the Settings panel.</td>
        </tr>
        <tr>
            <td>readabilityRoot</td>
            <td>'body'</td>
            <td>String. Target area for readability check. For example, pass <code>main</code> for main content area. Accepts a
                <strong>single selector</strong> only.</td>
        </tr>
        <tr>
            <td>readabilityLang</td>
            <td>'en'</td>
            <td><span class="badge rounded-pill text-bg-danger">Deprecated</span> It's no longer necessary to manually specify readability language. This is now done automatically using the language code from the respective language file.
            </td>
        </tr>
        <tr>
            <td>readabilityIgnore</td>
            <td>''</td>
            <td>String. Ignore specific content from readability check. Hard default excludes list (<code>&lt;li&gt;</code>)
                tags within navigation landmarks.</td>
        </tr>
    </tbody>
</table>

## Toggleable rulesets in Settings panel
<table class="table table-hover">
    <thead class="table-dark">
        <tr>
            <th width="20%">Prop</th>
            <th width="15%">Default</th>
            <th>Description</th>
        </tr>
    </thead class="table-dark">
    <tbody>
        <tr>
          <td>customChecks</td>
          <td>false</td>
          <td>Boolean. Enable custom checks (`sa11y-custom-checks.js`)</td>
        </tr>
        <tr>
            <td>contrastPlugin</td>
            <td>true</td>
            <td>Boolean. Set to false to turn off and hide contrast check from Settings panel.</td>
        </tr>
        <tr>
            <td>formLabelsPlugin</td>
            <td>true</td>
            <td>Boolean. Set to false to turn off and hide Form labels check from Settings panel.</td>
        </tr>
        <tr>
            <td>linksAdvancedPlugin</td>
            <td>true</td>
            <td>Boolean. Set to false to turn off and hide Links (Advanced) check from Settings panel.</td>
        </tr>
        <tr>
            <td>colourFilterPlugin</td>
            <td>true</td>
            <td>Boolean. Set to false to turn off and hide Colour filters from Settings panel.</td>
        </tr>
        <tr>
            <td>checkAllHideToggles</td>
            <td>false</td>
            <td>Boolean. Set to true if you would like all optional checks to be enabled by default, and to hide the switches in the Settings panel.</td>
        </tr>
        <tr>
          <td>exportResultsPlugin</td>
          <td>false</td>
          <td>Boolean. Set to true if you would like to add buttons that allow users to export issues as CSV or HTML.</td>
        </tr>
    </tbody>
</table>

## Quality assurance module
<table class="table table-hover">
    <thead class="table-dark">
        <tr>
            <th width="20%">Prop</th>
            <th width="15%">Default</th>
            <th>Description</th>
        </tr>
    </thead class="table-dark">
    <tbody>
        <tr>
            <td>badLinksQA</td>
            <td>true</td>
            <td>Boolean. Related to <code>linksToFlag</code> prop.</td>
        </tr>
        <tr>
            <td>strongItalicsQA</td>
            <td>true</td>
            <td>Boolean. Flags entire paragraphs that are bold or italicized.</td>
        </tr>
        <tr>
            <td>pdfQA</td>
            <td>true</td>
            <td>Boolean. Warning about PDF content.</td>
        </tr>
        <tr>
            <td>documentQA</td>
            <td>true</td>
            <td>Boolean. Warning for Office and Google Workspace documents.</td>
        </tr>
        <tr>
            <td>documentLinks</td>
            <td>'.ppt, .doc, .xls, .csv, sway.com, docs.google.com'</td>
            <td>String. Default values for <code>documentQA</code> prop.</td>
        </tr>
        <tr>
            <td>langQA</td>
            <td>true</td>
            <td>Boolean. Error if page language is not set.</td>
        </tr>
        <tr>
            <td>blockquotesQA</td>
            <td>true</td>
            <td>Boolean. Warning if blockquote suspiciously resembles a heading.</td>
        </tr>
        <tr>
            <td>tablesQA</td>
            <td>true</td>
            <td>Boolean. Various errors about innaccessible HTML tables.</td>
        </tr>
        <tr>
            <td>allCapsQA</td>
            <td>true</td>
            <td>Boolean. Warning about use of ALL CAPS. <strong>Note:</strong> Sometimes this check can be problematic because of regex usage. Set to false if problematic.</td>
        </tr>
        <tr>
            <td>fakeHeadingsQA</td>
            <td>true</td>
            <td>Boolean. Warning about bolded text that suspiciously resembles a heading. Uses regex.</td>
        </tr>
        <tr>
            <td>fakeListQA</td>
            <td>true</td>
            <td>Boolean. Warning about suspiciously formatted content that should be a semantic list.</td>
        </tr>
        <tr>
            <td>duplicateIdQA</td>
            <td>true</td>
            <td>Boolean. Error if duplicate <code>id</code> exist on the page.</td>
        </tr>
        <tr>
            <td>underlinedTextQA</td>
            <td>true</td>
            <td>Boolean. Warning for &lt;u&gt;underlined&lt;u&gt; text.</td>
        </tr>
        <tr>
            <td>pageTitleQA</td>
            <td>true</td>
            <td>Boolean. Error if meta page <code>&lt;title&gt;</code> is missing or empty.</td>
        </tr>
        <tr>
            <td>subscriptQA</td>
            <td>true</td>
            <td>Boolean. Warning if <code>&lt;sup&gt;</code> and <code>&lt;sub&gt;</code> tags are used to format entire sentences.</td>
        </tr>
        <tr>
          <td>tablesQAmissingTH</td>
          <td>true</td>
          <td>Set to false to turn off check that flags missing table headers as an error.</td>
        </tr>
        <tr>
          <td>tablesQAsemanticHeadings</td>
          <td>true</td>
          <td>Set to false to turn off check that flags semantic headings within a table as an error.</td>
        </tr>
        <tr>
          <td>tablesQAemptyTH</td>
          <td>true</td>
          <td>Set to false to turn off check that flags empty table headers within a table as an error.</td>
        </tr>
        <tr>
          <td>tablesQAemptyTHisError</td>
          <td>true</td>
          <td>Set to false to change check that flags empty table headers from an error to a warning.</td>
        </tr>
    </tbody>
</table>

## Embedded content (iFrames) module
<table class="table table-hover">
    <thead class="table-dark">
        <tr>
            <th width="20%">Prop</th>
            <th width="30%">Default</th>
            <th>Description</th>
        </tr>
    </thead class="table-dark">
    <tbody>
        <tr>
            <td>embeddedContentAll</td>
            <td>true</td>
            <td>Boolean. Set to false to ignore all iFrames.</td>
        </tr>
        <tr>
            <td>embeddedContentAudio</td>
            <td>true</td>
            <td>Boolean. Warning about audio content and transcripts.</td>
        </tr>
        <tr>
            <td>embeddedContentVideo</td>
            <td>true</td>
            <td>Boolean. Warning about video content and captions.</td>
        </tr>
        <tr>
            <td>embeddedContentDataViz</td>
            <td>true</td>
            <td>Boolean. Warning about data visualizations.</td>
        </tr>
        <tr>
            <td>embeddedContentTitles</td>
            <td>true</td>
            <td>Boolean. Warning about iFrame missing a descriptive title or accessible name.</td>
        </tr>
        <tr>
            <td>embeddedContentGeneral</td>
            <td>true</td>
            <td>Boolean. General warning about unknown iFrame content.</td>
        </tr>
        <tr>
            <td>videoContent</td>
            <td>'video, youtube.com, vimeo.com, yuja.com, panopto.com'</td>
            <td>String. Common video players.</td>
        </tr>
        <tr>
            <td>audioContent</td>
            <td>'audio, soundcloud.com, simplecast.com, podbean.com, buzzsprout.com, blubrry.com, transistor.fm,
                fusebox.fm, libsyn.com'</td>
            <td>String. Common podcast widgets or audio players.</td>
        </tr>
        <tr>
            <td>dataVizContent</td>
            <td>'datastudio.google.com, tableau'</td>
            <td>String. Common data visualization widgets.</td>
        </tr>
    </tbody>
</table>

## Feedback
Provide feedback on props via [GitHub](https://github.com/ryersondmp/sa11y/issues) or [Report a bug.](https://forms.gle/sjzK9XykETaoqZv99)

{% include "partials/pagination-developers.njk" %}
