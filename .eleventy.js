const htmlmin = require('html-minifier-terser');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");


function eleventyConfig(config) {
  // Passthroughs
  config.addPassthroughCopy("src/img");
  config.addPassthroughCopy("src/fonts");
  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("src/favicons");

  config.addPlugin(syntaxHighlight);

  // Shortcodes
  config.addShortcode("year", () => `${new Date().getFullYear()}`);

  config.addShortcode("joomlaIcon", () => `<svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 640 640"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#E040FB"/><stop offset="100%" stop-color="#00BCD4"/></linearGradient></defs><path fill="url(#gradient)" d="M166.23 172.916c20.516-20.516 53.753-20.516 74.245 0l4.878 4.913 63.19-63.237-4.914-4.913c-35.988-36.095-86.564-48.686-132.758-37.843C164.233 31.123 128.954.001 86.386.001 39.118 0 .791 38.399.791 85.714c0 40.831 28.488 75.001 66.685 83.635-14.48 48.39-2.645 103.041 35.528 141.226L245.4 453.006l63.12-63.237-142.396-142.43c-20.445-20.446-20.48-53.836.118-74.447l-.011.024zm472.943-87.202C639.173 38.351 600.858 0 553.577 0c-43.276 0-79.028 32.15-84.792 73.88-48.166-14.174-102.367-2.21-140.399 35.87L186.002 252.193l63.19 63.237 142.36-142.395c20.599-20.61 53.753-20.563 74.15-.118 20.481 20.516 20.481 53.835-.047 74.363l-4.878 4.878 63.107 63.284 4.914-4.96c37.795-37.832 49.807-91.714 36-139.763 41.953-5.516 74.316-41.48 74.316-84.993l.06-.012zm-72.804 383.662c11.327-46.524-1.24-97.726-37.548-134.08L386.615 192.841l-63.19 63.19 142.196 142.502c20.61 20.634 20.563 53.8.13 74.268-20.517 20.516-53.765 20.516-74.281 0l-4.83-4.878-63.12 63.285 4.831 4.842c38.446 38.47 93.52 50.28 142.124 35.304C478.353 610.52 512.913 640 554.394 640 601.638 640 640 601.638 640 554.275c0-43.24-32.008-79.029-73.595-84.875l-.036-.024zM382.705 330.43L240.522 472.895c-20.445 20.48-53.764 20.516-74.363-.07-20.516-20.564-20.516-53.812-.047-74.364l4.878-4.842-63.166-63.19-4.831 4.807c-36.721 36.768-49.123 88.63-37.158 135.592-37.772 8.917-65.847 42.874-65.847 83.434 0 47.363 38.327 85.714 85.607 85.714 40.678-.048 74.753-28.406 83.481-66.474 46.678 11.599 98.104-.803 134.588-37.358l142.183-142.466-63.119-63.284-.023.035z"/></svg>`);

  config.addShortcode("drupalIcon", () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="55" height="55"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#E040FB"/><stop offset="100%" stop-color="#00BCD4"/></linearGradient></defs><path fill="url(#gradient)" d="M304 108.1C268.2 72.5 234.2 38.4 224 0c-10 38.4-44.3 72.5-80 108.1C90.5 161.7 29.7 222.4 29.7 313.4c-2.3 107.3 82.8 196.2 190.1 198.5S415.9 429.2 418.3 321.9q.1-4.2 0-8.5C418.3 222.4 357.5 161.7 304 108.1zm-174.3 223a130.3 130.3 0 0 0 -15.2 24.2 5 5 0 0 1 -3.3 2.8h-1.7c-4.3 0-9.2-8.5-9.2-8.5h0c-1.3-2-2.5-4.1-3.7-6.4l-.8-1.8c-11.2-25.7-1.5-62.3-1.5-62.3h0a160.6 160.6 0 0 1 23.2-49.9A290.8 290.8 0 0 1 138.5 201.6l9.2 9.2 43.5 44.4a5 5 0 0 1 0 6.6L145.8 312.3h0zm96.6 127.3a67.2 67.2 0 0 1 -49.8-111.9c14.2-16.9 31.5-33.5 50.3-55.3 22.3 23.8 36.9 40.1 51.2 58a28.4 28.4 0 0 1 3 4.4 65.9 65.9 0 0 1 12 38 66.7 66.7 0 0 1 -66.5 66.8zM352.4 351.6h0a7.7 7.7 0 0 1 -6.2 5.3H344.9a11.2 11.2 0 0 1 -6.3-5.1h0a348.2 348.2 0 0 0 -39.5-49L281.4 284.5 222.3 223.2a497.9 497.9 0 0 1 -35.4-36.3 12 12 0 0 0 -.9-1.4 35.4 35.4 0 0 1 -4.7-9.2V174.5a31.3 31.3 0 0 1 9.2-27.7c11.4-11.4 23-23 33.8-34.9 12 13.3 24.8 26 37.4 38.6h0a531 531 0 0 1 69.6 79.1 147.5 147.5 0 0 1 27 83.8A134.1 134.1 0 0 1 352.4 351.6z"/></svg>`);

  //Sort main pages.
  config.addCollection("pages", collection => {
    const docs = collection.getFilteredByGlob("src/pages/*.md")
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order);
      });
    return docs;
  });

  //Sort developer pages.
  config.addCollection("developers", collection => {
    const docs = collection.getFilteredByGlob("src/developers/*.md")
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order);
      });
    return docs;
  });

  //Sort Get Started pages.
  config.addCollection("getstarted", collection => {
    const docs = collection.getFilteredByGlob("src/get-started/*.md")
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order);
      });
    return docs;
  });

  //Sort Plugin pages.
  config.addCollection("plugins", collection => {
    const docs = collection.getFilteredByGlob("src/plugins/*.md")
      .sort((a, b) => {
        return Number(a.data.order) - Number(b.data.order);
      });
    return docs;
  });

  // Layout aliases
  config.addLayoutAlias("base", "layouts/base.njk");

  // Minify HTML
  const isProduction = process.env.ELEVENTY_ENV === "production";

  var htmlMinify = function (value, outputPath) {
    if (outputPath && outputPath.indexOf('.html') > -1) {
      return htmlmin.minify(value, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      });
    }
  }

  // html min only in production
  if (isProduction) {
    config.addTransform("htmlmin", htmlMinify);
  }

  // Configuration
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      data: "data",
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};

module.exports = eleventyConfig;
