<template>
    <NuxtLayout name="page">
        <div v-if="heroImg">
            <img :src="heroImg" alt="" class="rounded-t-md" />
        </div>
        <div class="w-full py-6 px-8 text-xl text-gray-800 leading-normal">
            <!-- 标题 -->
            <div class="font-sans">
                <h1 class="font-bold font-sans break-normal text-gray-900 pt-3 text-3xl md:text-4xl unselectable">
                    {{ title }}
                </h1>
            </div>

            <br />

            <!-- 提示框 -->
            <div class="w-full text-white bg-emerald-500 rounded-md">
                <div class="container flex items-center justify-between px-6 py-4 mx-auto">
                    <div class="unselectable inline-flex justify-center rounded-md px-2 py-2 text-sm font-medium">
                        <CheckCircleIcon class="mr-1 h-5 w-5 text-white" />
                        交换友链的话...也不是不可以...但还是建议“先友后链”呐，友链链接的样式，要自己码哦
                    </div>
                </div>
            </div>
            <!-- Grid Content -->
            <div class="grid grid-cols-3 gap-4 pt-6">
                <div class="container col-span-3 lg:col-span-1">
                    <div class="w-full overflow-hidden bg-white rounded-lg shadow-md">
                        <img class="rounded-t-lg object-cover object-center"
                            src="https://urlscan.io/liveshot/?width=1280&height=720&url=https://blog.lesnow.top"
                            alt="" />
                        <div class="unselectable flex items-center pl-5 h-14">
                            <div class="flex">
                                <img class="h-8 rounded-full" src="https://avatars.githubusercontent.com/u/40481418?v=4"
                                    alt="" />
                            </div>
                            <a href="https://blog.lesnow.top" class="mx-2 text-lg font-semibold text-gray-600">索菲缇娅</a>
                        </div>
                    </div>
                </div>
                <div class="container col-span-3 lg:col-span-1">
                    <div class="w-full overflow-hidden bg-white rounded-lg shadow-md">
                        <img class="rounded-t-lg object-cover object-center"
                            src="https://urlscan.io/liveshot/?width=1280&height=720&url=https://www.xiaoyiblog.cc/"
                            alt="" />
                        <div class="unselectable flex items-center pl-5 h-14">
                            <div class="flex">
                                <img class="h-8 rounded-full" src="https://www.xiaoyiblog.cc/usr/uploads/logo.jpg"
                                    alt="" />
                            </div>
                            <a href="https://www.xiaoyiblog.cc/" class="mx-2 text-lg font-semibold text-gray-600">小易
                                Uce</a>
                        </div>
                    </div>
                </div>
                <div class="container col-span-3 lg:col-span-1">
                    <div class="w-full overflow-hidden bg-white rounded-lg shadow-md">
                        <img class="rounded-t-lg object-cover object-center"
                            src="https://urlscan.io/liveshot/?width=1280&height=720&url=https://blog.ssxx.site/"
                            alt="" />
                        <div class="unselectable flex items-center pl-5 h-14">
                            <div class="flex">
                                <img class="h-8 rounded-full" src="https://avatars.githubusercontent.com/u/64391901?v=4"
                                    alt="" />
                            </div>
                            <a href="https://blog.ssxx.site/" class="mx-2 text-lg font-semibold text-gray-600">上杉夏相</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/solid";

const heroImg = "https://s3.bmp.ovh/imgs/2022/08/01/d3079ae4802538fa.webp";
const title = "友链";

useHead({
    title: `${title} - ${useConfig().title}`,
});
</script>
