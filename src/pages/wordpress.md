---
layout: base
title: WordPress Plugin
permalink: '/wordpress/'
order: 3
---

<h1>{{title}} <i class="bi bi-wordpress"></i></h1>
<p class="lead">Currently in <span class="badge bg-secondary">Beta</span></p>
<p>The WordPress plugin was released April 2022. Please <a href="https://forms.gle/sjzK9XykETaoqZv99">report bugs or leave feedback</a> to improve Sa11y. If you have a GitHub account, you can submit your <a href="https://github.com/ryersondmp/sa11y/issues">issue on GitHub.</a></p>

<h2>Install</h2>
<p>The easiest way to install Sa11y on WordPress is to use the plugin search. Alternatively, you can download and install Sa11y manually from the <a href="https://wordpress.org/plugins/sa11y/">plugin page.</a></p>

<img width="1100" class="img-fluid img-thumbnail mb-4" alt="Screenshot of the Add Plugins page with Sa11y in the search bar and results." src="{{ '/images/screenshots/wordpress-add-plugin.webp' | url }}">
<ol>
    <li>Log in to your WordPress site.</li>
    <li>Go to the <strong>Dashboard</strong></li>
    <li>Go to <strong>Plugins</strong> <i class="bi bi-arrow-right"></i><span class="sr-only">, then</span> <strong>Add New</strong></li>
    <li>In the search field, type: <code>Sa11y</code></li>
    <li>Go to the <strong>Install Now</strong> button.</li>
    <li>Now press the <strong>Activate</strong> button.</li>
</ol>

<p>If successfully installed, Sa11y will appear in the bottom right corner when navigating between pages of your website. You can also use Sa11y in <strong>Preview</strong> mode when editing a page.</p>

<h2>Advanced Settings page</h2>
<p>Sa11y works out-of-the-box, although you can use the Advanced Settings page to customize the experience for website authors and adapt Sa11y to your theme. If your website authors can't fix it - don't check it!</p>
<ol>
    <li>Go to the <strong>Dashboard</strong></li>
    <li>Go to <strong>Settings</strong> <i class="bi bi-arrow-right"></i><span class="sr-only">, then</span> <strong>Sa11y</strong></li>
</ol>

<div class="accordion" id="accordionExample" style="max-width: 1000px;">
  <div class="accordion-item">
    <h3 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Adding exclusions
      </button>
    </h3>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="alert alert-warning"><i class="bi bi-exclamation-octagon-fill"></i> <strong>Note:</strong> Basic knowledge of HTML and CSS is recommended.</p>

        <p>You can ignore repetitive elements or create exclusions using <a href="https://www.w3schools.com/cssref/css_selectors.asp">CSS selectors</a> or <a href="https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html">HTML sectioning elements.</a> For each exclusion field, you can pass one or more selectors. Use a comma to seperate multiple selectors or elements.</p>

        <p>Sa11y ignores the Comments section on all pages by default. The parent container for the comments section has a unique <code>id</code> of <code>#comments</code>. Use commas to pass additional selectors, for example <code>#comments, footer, .social-widget</code>. In this example, the WordPress comments section will be ignored, the footer of the page, and any element that has a CSS class name of <code>social-widget</code>.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Adding sources to check embedded content
      </button>
    </h3>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>This section contains a list of common video, audio, and data visualization sources. For example, if your videos are hosted on another website (<code>https://youtu.be/dQw4w9WgXcQ</code>) - add <code>youtu.be</code> as a video source so the correct warning displays.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h3 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Advanced customization with props
      </button>
    </h3>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>You can use the extra props (properties) field to turn off specific checks or enable other features. Use a comma to seperate multiple boolean (true or false) props in this field. View a list of <a href="{{ '/developers/props/' | url}}">all props.</a></p>

        <p>For example, if you would like to hide "Good" buttons for links that have an accessible name via ARIA attributes, you can pass the following prop <code>showGoodLinkButton: false</code> in this field.</p>
      </div>
    </div>
  </div>
</div>


<h2>Frequently asked questions</h2>
<h3>I do not see any errors or warnings on the page?</h3>
<p>Use the "Skip to issue" button or press <kbd>alt</kbd> <kbd>S</kbd>. If you still do not see them, it's most likely an accessibility issue with your theme. Consult a web developer to have a look.</p>

<p>The issue may also be caused by conflicting or overlapping elements. Developers, please view documentation on <a href="{{ '/developers/conflicting-css/' | url }}">conflicting CSS.</a></p>

<h3>I tagged my PDFs in Acrobat, although I still get a warning?</h3>
<p>Sa11y is not able to check for accessibility issues within PDFs. Sa11y will flag all PDFs as a warning regardless if they are accessible or not.</p>

<h3>My videos have closed captions, although I still get a warning?</h3>
<p>If your video has accurate closed captions, please ignore this warning. Sa11y is not able to validate or confirm if videos have accurate captions.</p>



{% include "partials/pagination.njk" %}