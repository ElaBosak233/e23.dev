<template>
    <div>
        <div class="relative w-full bg-center bg-cover">
            <div class="unselectable flex items-center justify-center min-w-full pt-24">
                <div
                    class="py-8 px-4 mx-auto max-w-screen-xl text-center items-center lg:py-16 lg:px-12 flex flex-col space-y-0">
                    <p class="py-2 text-lg font-normal text-white lg:text-4xl sm:px-16 xl:px-48">
                        分类: {{ category }}
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-center absolute bottom-2 inset-x-0">
                <ChevronDownIcon class="animate-bounce w-11 h-11 text-gray-500"></ChevronDownIcon>
            </div>
        </div>
        <NuxtLayout name="index" class="pt-8">
            <div class="grid grid-cols-12 gap-2">
                <div class="xl:col-span-9 col-span-12">
                    <div class="container w-full md:max-w-3xl mx-auto pb-5 px-8 shadow-xl rounded-md">
                        <div class="w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md">
                            <div class="px-6 py-6">
                                <!-- ⚡ 时间轴核心 -->
                                <ol class="relative border-l border-gray-200">
                                    <li class="mb-4 ml-4" v-for="{ _path: slug, title, createdAt, category, description } in posts">
                                        <div
                                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white">
                                        </div>
                                        <time
                                            class="mb-1 text-sm font-normal leading-none text-gray-400"
                                        >
                                            {{ createdAt }}
                                        </time>
                                        <a
                                            :href = "slug"
                                            class="block text-lg font-semibold text-gray-900 transition-colors duration-200 transform hover:text-gray-600 hover:underline"
                                        >
                                            {{ title }}
                                        </a>
                                        <p
                                            class="mb-4 text-base font-normal text-gray-500"
                                        >
                                            {{ description || "埃拉犯懒不想写简介，要么就直接看吧..." }}
                                        </p>
                                    </li>
                                </ol>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="xl:col-span-3 hidden xl:block">
                    <BasicSideBar />
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/solid/index.js";
import BasicSideBar from "@/components/sidebar/BasicSideBar.vue";

const { fullPath, params } = useRoute();
const category = `${params.slug[0]}`
const posts = await queryContent('/posts')
    .sort({ createdAt: -1 })
    .where({ _partial: false, category: category })
    .find();

useHead({
    title: `分类: ${category} - ${useConfig().title}`
});

</script>