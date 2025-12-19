---
layout: base
title: Bookmarklet
permalink: '/bookmarklet/'
order: 2
---

# {{title}}

Sa11y is available as a bookmarklet and can be used in any desktop browser. Simply drag the "Sa11y" button below into your bookmarks bar. Then click the bookmark on any webpage.

<img src="{{ '/images/curly-dotted-arrow.svg' | url }}" width="120px" alt="Illustration of a dotted arrow pointing towards the browser's bookmarks bar." class="p-1">
<p><a href="javascript:(function(){
      const sa11yDialog = document.getElementById(&quot;sa11y-csp&quot;);
      const sa11yScripts = document.querySelectorAll(&quot;script[src*='sa11y']&quot;);
      const createAlert = (message) => {
        if (document.querySelector(&quot;#sa11y-csp&quot;)) return;
        const sa11yDialog = document.createElement(&quot;div&quot;);
        sa11yDialog.id = &quot;sa11y-csp&quot;;
        sa11yDialog.role = &quot;dialog&quot;;
        sa11yDialog.textContent = message;
        sa11yDialog.style.position = &quot;fixed&quot;;
        sa11yDialog.style.display = &quot;block&quot;;
        sa11yDialog.style.bottom = &quot;50px&quot;;
        sa11yDialog.style.right = &quot;50px&quot;;
        sa11yDialog.style.margin = &quot;auto 0&quot;;
        sa11yDialog.style.width = &quot;400px&quot;;
        sa11yDialog.style.zIndex = &quot;10000&quot;;
        sa11yDialog.style.color = &quot;#000000&quot;;
        sa11yDialog.style.padding = &quot;10px 80px 10px 10px&quot;;
        sa11yDialog.style.backgroundColor = &quot;#fff&quot;;
        sa11yDialog.style.border = &quot;5px solid #ff0000&quot;;
        sa11yDialog.style.fontWeight = &quot;bold&quot;;
        sa11yDialog.style.fontSize = &quot;17px&quot;;
        sa11yDialog.style.fontFamily = &quot;system-ui, sans-serif&quot;;
        sa11yDialog.style.boxShadow = &quot;0 0 20px 4px rgba(154,161,177,.15),0 4px 80px -8px rgba(36,40,47,.25),0 4px 4px -2px
        rgba(91,94,105,.15)&quot;;
        sa11yDialog.style.borderRadius = &quot;5px&quot;;
        sa11yDialog.setAttribute(&quot;role&quot;, &quot;alert&quot;);
        document.body.appendChild(sa11yDialog);
        const closeButton = document.createElement(&quot;button&quot;);
        closeButton.id = &quot;csp-close&quot;;
        closeButton.textContent = &quot;Close&quot;;
        closeButton.style.position = &quot;absolute&quot;;
        closeButton.style.top = &quot;10px&quot;;
        closeButton.style.color = &quot;#000&quot;;
        closeButton.style.right = &quot;10px&quot;;
        closeButton.style.padding = &quot;5px 10px&quot;;
        closeButton.style.backgroundColor = &quot;#f6f6f6&quot;;
        closeButton.style.border = &quot;2px solid #949494&quot;;
        closeButton.style.borderRadius = &quot;5px&quot;;
        closeButton.style.cursor = &quot;pointer&quot;;
        closeButton.style.fontSize = &quot;15px&quot;;
        sa11yDialog.appendChild(closeButton);
        closeButton.addEventListener(&quot;click&quot;, () => {
          sa11yDialog.remove();
        });
        const close = document.getElementById(&quot;csp-close&quot;);
        setTimeout(() => close.focus(), 300);
        document.addEventListener(&quot;keyup&quot;, (event) => {
          if (event.key === 'Escape') {
           sa11yDialog.remove();
          }
        });
      };
      const securityListener = () => {
        if (typeof sa11y === 'undefined') {
          createAlert('This website has a security policy that prevents Sa11y from working on its pages. Press Escape to dismiss this message.');
        }
      };
      const url = window.location.href;
      if (url.includes('bookmarklet') && url.includes('sa11y')) {
        createAlert('Drag the &quot;Sa11y&quot; button into your bookmarks bar. Then click the bookmark on any webpage.');
      } else if (sa11yDialog == null && sa11yScripts.length === 0) {
        const inject = document.createElement(&quot;script&quot;);
        inject.src = &quot;https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/bookmarklet/v2.js&quot;;
        inject.onerror = () => {
          createAlert('This website has a security policy that prevents Sa11y from working on its pages. Press Escape to dismiss this message.');
        };
        document.body.appendChild(inject);
      } else {
        location.reload();
      }
      document.addEventListener(&quot;securitypolicyviolation&quot;, securityListener);
      setTimeout(() => document.removeEventListener(&quot;securitypolicyviolation&quot;, securityListener), 100);
  	})();" class="btn btn-lg btn-sa11y"><i class="bi bi-bookmark-fill"></i> Sa11y</a></p>

<h2 class="h4">Please note... ⚠️</h2>

- Bookmarklets do not work on all websites because of security policies that block external code.
- It may take a few seconds to load because the code is being injected into the page you are browsing.

### Languages
The bookmarklet above **automatically displays a translated version** of Sa11y based on the page language. If the language is not supported, it will default to English.

Sa11y has been translated into French, Polish, Ukrainian, Swedish, Spanish, and German. The following machine translations are available: Bulgarian, Finnish, Hungarian, Indonesian, Italian, Japanese, Korean, Lithuanian, Latvian, Norwegian Bokmål, Dutch, Portuguese (Brazil), Portuguese (Portugal), Romanian, Slovak, Slovenian, Turkish, Ukrainian, and Chinese (Mandarin).

#### English-only version
The bookmarklet below will **only** display English.
<p><a href="javascript:(function(){
      const sa11yDialog = document.getElementById(&quot;sa11y-csp&quot;);
      const sa11yScripts = document.querySelectorAll(&quot;script[src*='sa11y']&quot;);
      const createAlert = (message) => {
        if (document.querySelector(&quot;#sa11y-csp&quot;)) return;
        const sa11yDialog = document.createElement(&quot;div&quot;);
        sa11yDialog.id = &quot;sa11y-csp&quot;;
        sa11yDialog.role = &quot;dialog&quot;;
        sa11yDialog.textContent = message;
        sa11yDialog.style.position = &quot;fixed&quot;;
        sa11yDialog.style.display = &quot;block&quot;;
        sa11yDialog.style.bottom = &quot;50px&quot;;
        sa11yDialog.style.right = &quot;50px&quot;;
        sa11yDialog.style.margin = &quot;auto 0&quot;;
        sa11yDialog.style.width = &quot;400px&quot;;
        sa11yDialog.style.zIndex = &quot;10000&quot;;
        sa11yDialog.style.padding = &quot;10px 80px 10px 10px&quot;;
        sa11yDialog.style.backgroundColor = &quot;#fff&quot;;
        sa11yDialog.style.border = &quot;5px solid #ff0000&quot;;
        sa11yDialog.style.fontWeight = &quot;bold&quot;;
        sa11yDialog.style.fontSize = &quot;17px&quot;;
        sa11yDialog.style.fontFamily = &quot;system-ui, sans-serif&quot;;
        sa11yDialog.style.boxShadow = &quot;0 0 20px 4px rgba(154,161,177,.15),0 4px 80px -8px rgba(36,40,47,.25),0 4px 4px -2px
        rgba(91,94,105,.15)&quot;;
        sa11yDialog.style.borderRadius = &quot;5px&quot;;
        sa11yDialog.setAttribute(&quot;role&quot;, &quot;alert&quot;);
        document.body.appendChild(sa11yDialog);
        const closeButton = document.createElement(&quot;button&quot;);
        closeButton.id = &quot;csp-close&quot;;
        closeButton.textContent = &quot;Close&quot;;
        closeButton.style.position = &quot;absolute&quot;;
        closeButton.style.top = &quot;10px&quot;;
        closeButton.style.color = &quot;#000&quot;;
        closeButton.style.right = &quot;10px&quot;;
        closeButton.style.padding = &quot;5px 10px&quot;;
        closeButton.style.backgroundColor = &quot;#f6f6f6&quot;;
        closeButton.style.border = &quot;2px solid #949494&quot;;
        closeButton.style.borderRadius = &quot;5px&quot;;
        sa11yDialog.style.color = &quot;#000000&quot;;
        closeButton.style.cursor = &quot;pointer&quot;;
        closeButton.style.fontSize = &quot;15px&quot;;
        sa11yDialog.appendChild(closeButton);
        closeButton.addEventListener(&quot;click&quot;, () => {
          sa11yDialog.remove();
        });
        const close = document.getElementById(&quot;csp-close&quot;);
        setTimeout(() => close.focus(), 300);
        document.addEventListener(&quot;keyup&quot;, (event) => {
          if (event.key === 'Escape') {
           sa11yDialog.remove();
          }
        });
      };
      const securityListener = () => {
        if (typeof sa11y === 'undefined') {
          createAlert('This website has a security policy that prevents Sa11y from working on its pages. Press Escape to dismiss this message.');
        }
      };
      const url = window.location.href;
      if (url.includes('bookmarklet') && url.includes('sa11y')) {
        createAlert('Drag the &quot;Sa11y&quot; button into your bookmarks bar. Then click the bookmark on any webpage.');
      } else if (sa11yDialog == null && sa11yScripts.length === 0) {
        const inject = document.createElement(&quot;script&quot;);
        inject.src = &quot;https://cdn.jsdelivr.net/gh/ryersondmp/sa11y@latest/bookmarklet/v2-en.js&quot;;
        inject.onerror = () => {
          createAlert('This website has a security policy that prevents Sa11y from working on its pages. Press Escape to dismiss this message.');
        };
        document.body.appendChild(inject);
      } else {
        location.reload();
      }
      document.addEventListener(&quot;securitypolicyviolation&quot;, securityListener);
      setTimeout(() => document.removeEventListener(&quot;securitypolicyviolation&quot;, securityListener), 100);
  	})();" class="btn btn-sa11y"><i class="bi bi-bookmark-fill"></i> Sa11y (English)</a></p>

## Help translate
Want to help translate or improve Sa11y? Consider [contributing!](https://github.com/ryersondmp/sa11y/blob/master/CONTRIBUTING.md) Translations may either be contributed back to the repository with a pull request on GitHub, or translated files can be returned to: [{{site.contactEmail}}](mailto:{{site.contactEmail}})


