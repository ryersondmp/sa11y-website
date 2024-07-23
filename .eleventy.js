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
