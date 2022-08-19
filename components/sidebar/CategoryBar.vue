<template>
    <div class="unselectable bg-white w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
        <div class="flex items-center pt-2 px-4 w-full">
            <AcademicCapIcon class="w-6 h-6 text-black fill-current" />
            <h1 class="mx-2 mt-2 text-lg font-semibold text-black">分类</h1>
        </div>
        <div class="mt-2 mb-4 px-4">
            <div v-for="category in categories" class="inline mx-1">
                <NuxtLink
                    :to="'/categories/' + category"
                    class="px-3 py-1 text-xs transition duration-300 ease-in-out text-green-800 uppercase bg-green-200 hover:bg-green-400 rounded-full">
                        {{ category }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AcademicCapIcon } from '@heroicons/vue/solid/index.js';

const categories = [];
const posts = await queryContent('/posts')
    .sort({ createdAt: -1 })
    .where({ _partial: false })
    .find();

for (var i = 0; i < posts.length; i++) {
    if (!categories.includes(posts[i]["category"])) {
        categories.push(posts[i]["category"]);
    }
}
</script>