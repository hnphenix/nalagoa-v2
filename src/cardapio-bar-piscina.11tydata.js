module.exports = {
	eleventyComputed: {
		permalink: (data) =>
			`${data.slug ? data.slug : "{{page.fileSlug}}"}.html`,
	},
    layout: "menu-special.njk",
	eleventyNavigation: {
        key: "Cardápios",
        order: 3
    }
};