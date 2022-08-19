import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width,initial-scale=1.0,minimum-scale=1,maximum-scale=1,user-scalable=no" },
            { name: "description", content: "埃拉想知道你到底看不看得到这条描述呐..." }
        ],
        link: [
            { rel: "icon", href: "/fav.svg", type: "image/x-icon" }
        ]
    },
    modules: [
        "@nuxt/content",
        "@nuxtjs/tailwindcss",
        "@/modules/sitemap"
    ],
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
    },
    sitemap: {
        hostname: "https://e23.dev"
    }
})
