---
layout: base
title: Bookmarklet
permalink: '/bookmarklet/'
order: 2
---

# {{title}}

Sa11y is available as a bookmarklet and can be used in any desktop browser. Simply drag the "Sa11y" button below into your bookmarks bar. Then click the bookmark on any webpage.

<img src="{{ '/images/curly-dotted-arrow.svg' | url }}" width="120px" alt="Illustration of a dotted arrow pointing towards the browser's bookmarks bar." class="p-1">
<p><a href="javascript:void((function(doc){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/bookmarklet/sa11y-en.min.js';})(document))" class="btn btn-lg btn-sa11y"><i class="bi bi-bookmark-fill"></i> Sa11y</a></p>

<h2 class="h4">Please note...</h2>

- Bookmarklets do not work on all websites because of security policies that block external code.
- It may take a few seconds to load because the code is being injected into the page you are browsing.

## Also available in...
<div class="row align-items-md-stretch mt-4">
    <div class="col-lg-4">
        <div class="h-100 p-5 bg-light rounded-3">
            <h3 lang="fr">Français</h3>
            <a href="javascript:void((function(doc){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/bookmarklet/fr.min.js';})(document))" class="btn btn-lg btn-sa11y">Sa11y 🇫🇷</a>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="h-100 p-5 bg-light rounded-3">
            <h3 lang="pl">Polski</h3>
            <a href="javascript:void((function(doc){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/bookmarklet/pl.min.js';})(document))" class="btn btn-lg btn-sa11y">Sa11y 🇵🇱</a>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="h-100 p-5 bg-light rounded-3">
            <h3 lang="ua">Yкраїнський</h3>
            <a href="javascript:void((function(doc){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/bookmarklet/ua.min.js';})(document))" class="btn btn-lg btn-sa11y">Sa11y 🇺🇦</a>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="h-100 p-5 bg-light rounded-3">
            <h3 lang="sv">Svenska</h3>
            <a href="javascript:void((function(doc){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/bookmarklet/sv.min.js';})(document))" class="btn btn-lg btn-sa11y">Sa11y 🇸🇪</a>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="h-100 p-5 bg-light rounded-3">
            <h3 lang="de">Deutsch</h3>
            <a href="javascript:void((function(doc){document.body.appendChild(document.createElement('script')).src='https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/bookmarklet/de.min.js';})(document))" class="btn btn-lg btn-sa11y">Sa11y 🇩🇪</a>
        </div>
    </div>
</div>

## Help translate
Want to help translate or improve Sa11y? Consider [contributing!](https://github.com/ryersondmp/sa11y/blob/master/CONTRIBUTING.md) Translations may either be contributed back to the repository with a pull request on GitHub, or translated files can be returned to: [{{site.contactEmail}}](mailto:{{site.contactEmail}})


{% include "partials/pagination.njk" %}
