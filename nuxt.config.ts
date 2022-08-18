import { defineNuxtConfig } from "nuxt";
import config from "./e23.config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        meta: [],
        link: [
            { rel: "icon", href: "/fav.svg", type: "image/x-icon" }
        ]
    },
    modules: [
        "@nuxt/content",
        "@nuxtjs/tailwindcss",
        "@/modules/sitemap"
    ],
    sitemap: {
        hostname: 'https://e23.dev',
    },
    css: ["@/assets/css/base.css", "@/assets/css/transition.css"],
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
    content: {
        sources: [
            "content"
        ],
        highlight: {
            theme: "github-dark",
            preload: ["javascript", "java", "python", "markdown", "vue", "xml", "html", "typescript"]
        },
        markdown: {
            toc: {
                depth: 3,
                searchDepth: 3
            }
        }
    }
})
