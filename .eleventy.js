const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
	eleventyConfig.addPassthroughCopy({ "src/img": "img" });
	eleventyConfig.addPassthroughCopy({ "src/css": "css" });

	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addShortcode("version", function () {
		return String(Date.now());
	});

	eleventyConfig.addPairedShortcode("headingId", function(content, id) { 
		return `<h2 id="${String(id)}">${content}</h2>`
	});

	eleventyConfig.addPairedShortcode("button", function(content, id) { 
		return `<a href="#${String(id)}" class="btn-2">${content}</a>`
	});

	return {
		passthroughFileCopy: true,
		dir: {
			input: "src",
			layouts: "_layouts",
		},
	};
};