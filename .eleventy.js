const htmlmin = require('html-minifier');

function eleventyConfig(config) {
	// Passthroughs
	config.addPassthroughCopy("src/img");
	config.addPassthroughCopy("src/fonts");
	config.addPassthroughCopy("src/images");

	//Sort main pages.
	config.addCollection("pages", collection => {
		const docs = collection.getFilteredByGlob("src/pages/*.njk")
		  .sort((a, b) => {
			return Number(a.data.order) - Number(b.data.order);
		  });
		return docs;
	  });

	//Sort developer pages.
	config.addCollection("developers", collection => {
	const docs = collection.getFilteredByGlob("src/developers/*.njk")
		.sort((a, b) => {
		return Number(a.data.order) - Number(b.data.order);
		});
	return docs;
	});

	// Layout aliases
	config.addLayoutAlias("base", "layouts/base.njk");

	// Minify HTML
	const isProduction = process.env.ELEVENTY_ENV === "production";

	var htmlMinify = function(value, outputPath) {
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
