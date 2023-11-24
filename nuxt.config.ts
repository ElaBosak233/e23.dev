import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	experimental: {
		payloadExtraction: false
	},
	ssr: false,
	app: {},
	modules: [
		"@nuxtjs/tailwindcss",
		"nuxt-icons",
		"@pinia/nuxt",
		"@vueuse/nuxt"
	],

	css: [resolve("./assets/scss/_variables.scss"), resolve("./assets/scss/app.scss")],
	pinia: {
		autoImports: [["defineStore", "definePiniaStore"]]
	}
	// imports: {
	// 	dirs: [resolve("./stores"), "@/stores"]
	// },
});
