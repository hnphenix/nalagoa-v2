module.exports = {
	eleventyComputed: {
		permalink: (data) =>
			`${data.slug ? data.slug : "{{page.fileSlug}}"}.html`,
	},
    layout: "menu.njk",
    eleventyNavigation: {
        key: "Cardápio",
        order: 3
    }
};