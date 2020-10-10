module.exports = {
	eleventyComputed: {
		permalink: (data) =>
			`${data.slug ? data.slug : "{{page.fileSlug}}"}.html`,
	},
	layout: "menu.njk",
	tags: "boxes",
};