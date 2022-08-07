<template>
    <div>
        <div class="w-full mx-auto overflow-hidden bg-white rounded-lg shadow-md">
            <img class="object-cover w-full h-64 transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-1000"
                v-if="heroImg"
                :src="heroImg"
                alt="" />
            <div class="p-6">
                <div>
                    <a :href="slug"
                        class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform hover:text-gray-600 hover:underline">
                        {{ title }}
                    </a>
                    <p class="mt-2 text-sm text-gray-500">
                        {{ description || "埃拉犯懒不想写简介，要么就直接看吧..." }}
                    </p>
                </div>
                <hr class="mt-4" />
                <div class="mt-4">
                    <div class="unselectable flex items-center relative">
                        <div class="flex items-center">
                            <img class="object-cover h-8 rounded-full"
                                :src="config.author.avatar"
                                alt="">
                        </div>
                        <span class="mx-2 text-xs text-gray-600 ">{{ createdAt }} · {{ category }}</span>
                        <a
                            :href="slug"
                            class="absolute right-6 text-base font-bold rounded-lg hover:bg-green-200 text-green-600 hover:text-green-800 px-2 py-2 transition duration-300 ease-in-out"
                        >
                            阅读全文
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const config = useConfig();
defineProps({
    slug: {
        type: String,
        default: ""
    },
    category: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: ""
    },
    createdAt: {
        type: String,
        default: ""
    },
    heroImg: {
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
    }
});
</script>