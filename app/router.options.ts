import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
    scrollBehavior(to, _, savedPosition) {
        return new Promise((resolve) => {
            const nuxtApp = useNuxtApp();
            nuxtApp.hooks.hookOnce('page:finish', () => {
                setTimeout(() => {
                    resolve(savedPosition || (to.hash ? { el: to.hash, behavior: 'smooth' } : { left: 0, top: 0 }))
                }, 50);
            });
        })
    }
}