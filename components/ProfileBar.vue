<template>
    <div>
        <div class="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg ">
            <img class="object-cover object-center w-full h-56"
                src="/avatar.jpg"
                alt="avatar">

            <div class="flex items-center px-6 py-3 bg-gray-900">
                <FingerPrintIcon class="w-6 h-6 text-white fill-current" />
                <a href="https://github.com/ElaBosak233" target="_blank" class="mx-3 text-lg font-semibold text-white">ElaBosak233</a>
            </div>

            <div class="pl-6 py-4">
                <h1 class="text-xl font-semibold text-gray-800 ">埃拉</h1>

                <p class="py-2 text-sm text-gray-700 dark:text-gray-400">
                    Infp-T With Creative.
                </p>

                <div class="flex items-center mt-4 text-gray-700 ">
                    <AtSymbolIcon class="w-6 h-6 fill-current" />
                    <div class="px-2 text-sm">ElaBosak233@163.com</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { FingerPrintIcon, AtSymbolIcon } from "@heroicons/vue/solid";
</script>