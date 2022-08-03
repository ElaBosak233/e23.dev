import { defineNuxtConfig } from "nuxt";
import { resolve } from "path";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        "@nuxt/content",
        "@nuxtjs/tailwindcss",
        "@pinia/nuxt"
    ],
    css: ["@/assets/css/base.css", "@/assets/css/custom.css", "@/assets/css/transition.css"],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    meta: {
        meta: [],
        link: [
            { rel: "icon", href: "/fav.svg", type: "image/x-icon" }
        ]
    },
    content: {
        sources: [
            "content",
            {
                name: 'posts',
                prefix: '/posts', // All contents inside this source will be prefixed with `/fa`
                driver: 'fs',
                // ...driverOptions
                base: resolve(__dirname, 'posts') // Path for source directory
            }
        ],
        highlight: {
            theme: "github-dark",
            preload: ["javascript", "java", "python", "markdown", "vue", "xml", "html", "typescript"]
        }
    }
})
