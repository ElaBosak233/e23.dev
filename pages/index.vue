<template>
    <div>
        <div class="relative w-full bg-center bg-cover h-screen">
            <div class="unselectable flex items-center justify-center min-w-full min-h-screen">
                <div
                    class="py-8 px-4 mx-auto max-w-screen-xl text-center items-center lg:py-16 lg:px-12 flex flex-col space-y-0">
                    <img src="/logo.png" alt="" style="width:50%; height:auto;" />
                    <p class="py-2 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
                        Infp-T With Creative.
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
                    <div v-for="{ _path: slug, title, date, category, heroImg, description } in posts" class="px-4">
                        <PostCard class="pb-6" :title="title" :date="date" :category="category" :heroImg="heroImg"
                            :slug="slug" :description="description" />
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
import { ChevronDownIcon } from "@heroicons/vue/solid";

const posts = await queryContent('/posts')
    .sort({ date: -1 })
    .where({ _partial: false })
    .limit(10)
    .find();

useHead({
    title: "埃拉の小破站"
});
</script>