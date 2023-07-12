import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// app config
	app: {},

	// modules
	modules: [
		// styling & ui
		"@nuxtjs/tailwindcss",
		"nuxt-headlessui",
		"nuxt-icons",
		"@nuxtjs/color-mode",
		// management
		"@pinia/nuxt",
		"@vueuse/nuxt",
		// contents,
		"@nuxt/content"
	],

	css: [
		resolve("./assets/scss/_variables.scss"),
		resolve("./assets/scss/app.scss"),
		resolve("./assets/css/utils.css"),
		resolve("./assets/css/fonts.css")
	],

	// imports: {
	// 	dirs: [resolve("./stores"), "@/stores"]
	// },

	// module::pinia
	pinia: {
		autoImports: [["defineStore", "definePiniaStore"]]
	},

	// module::headlessui
	headlessui: {
		prefix: "Headless"
	},

	// module::color-mode
	colorMode: {
		classSuffix: ""
	}

	// // module::content
	// content: {
	// 	documentDriven: true,
	// 	markdown: {
	// 		mdc: true
	// 	},
	// 	highlight: {
	// 		theme: "github-dark"
	// 	}
	// }
});
