---
layout: base
title: Images
permalink: '/get-started/images/'
order: 3
---

# {{title}}

The **Images** tab makes it easy to review all images and their corresponding alt text within a page for accuracy and quality. This tab helps with images that may be temporarily hidden, like those in slideshows.

Images that are hyperlinked will display a link icon <svg width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg> to indicate that it's a [functional image.](https://www.w3.org/WAI/tutorials/images/functional/)

## Example
Review the **Images** tab in the bottom right corner.

<div class="row">
    <div class="col-lg-6">
        <div class="p-3 bg-light rounded-3">
            <img loading="lazy" class="img-fluid" src="{{ '/images/doggy3.jpg' | url }}" alt="Bear">
        </div>
    </div>
    <div class="col-lg-6">
        <div class="p-3 bg-light rounded-3">
            <img loading="lazy" class="img-fluid" src="{{ '/images/doggy1.jpg' | url }}" alt="doggy.jpg">
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-6">
        <div class="p-3 bg-light rounded-3">
            <a href="https://en.wikipedia.org/wiki/Dog" class="overlay-link">
                <div class="img-overlay">
                    <img loading="lazy" class="img-fluid" alt src="{{ '/images/doggy2.jpg' | url }}">
                    <div class="overlay">
                        <div class="text">Learn more about dogs.</div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="p-3 bg-light rounded-3">
            <a href="https://en.wikipedia.org/wiki/Dog"><img loading="lazy" class="img-fluid" alt="About dogs on Wikipedia" src="{{ '/images/doggy4.jpg' | url }}"></a>
        </div>
    </div>
</div>


## Best practices for images
Alt text (also known as alternative text) is used to convey meaning and provide context in place of an image. Alt text is read aloud by screen readers, displayed on the page if the image fails to load, and is indexed by search engines. Alt text should provide a concise description conveying essential information about the image.

Review [best practices for images.](https://www.torontomu.ca/accessibility/guides-resources/design/images/)


<script>
localStorage.setItem("sa11y-panel", "Opened");
localStorage.setItem("sa11y-images", "Opened");
localStorage.removeItem("sa11y-outline");
localStorage.removeItem("sa11y-settings");
</script>