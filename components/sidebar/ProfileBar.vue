<template>
    <div>
        <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg ">
            <img class="object-cover object-center w-full h-56"
                :src="config.author.avatar"
                alt="">

            <div class="flex items-center px-6 py-3 bg-gray-900">
                <FingerPrintIcon class="w-6 h-6 text-white fill-current" />
                <a :href="'https://github.com/'+config.author.github_username" target="_blank" class="mx-3 text-lg font-semibold text-white">{{ config.author.github_username }}</a>
            </div>

            <div class="pl-6 py-4">
                <h1 class="text-xl font-semibold text-gray-800 ">{{ config.author.name }}</h1>

                <p class="py-2 text-sm text-gray-700 dark:text-gray-400">
                    {{ config.author.description}}
                </p>

                <div class="flex flex-wrap justify-center mt-4 mr-6 text-gray-700 ">
                    <AtSymbolIcon v-if="config.author.email" @click="redirect('mailto:'+config.author.email)" target="_blank" class="flex-1 w-6 h-6 fill-current transition duration-200 ease-in-out hover:text-blue-400" />
                    <MusicNoteIcon v-if="config.author.cloudmusic" @click="redirect('https://music.163.com/#/user/home?id='+config.author.cloudmusic)" class="flex-1 w-6 h-6 fill-current transition duration-200 ease-in-out hover:text-red-700"></MusicNoteIcon>
                    <CalendarIcon v-if="config.author.bilibili" @click="redirect('https://space.bilibili.com/'+config.author.bilibili)" class="flex-1 w-6 h-6 fill-current transition duration-200 ease-in-out hover:text-pink-500" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { FingerPrintIcon, AtSymbolIcon, MusicNoteIcon, CalendarIcon } from "@heroicons/vue/solid";
const config = useConfig();

function redirect (src) {
    window.location.href = src;
}
</script>