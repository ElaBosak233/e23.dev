import { defineNuxtPlugin } from '#app';
import HeroIcon from "@heroicons/vue/solid";
export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(HeroIcon);
})
