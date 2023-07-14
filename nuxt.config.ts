import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	experimental: {
		payloadExtraction: false
	},

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

	css: [resolve("./assets/scss/_variables.scss"), resolve("./assets/scss/app.scss")],

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
});
