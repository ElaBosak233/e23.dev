<template>
    <div class="flex justify-center">
        <nav id="header" class="first:fixed w-full lg:w-4/7 z-10 top-0 bg-white lg:rounded-b-xl shadow-md opacity-95">

            <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">

                <div class="pl-6">
                    <NuxtLink
                        class="unselectable text-green-900 hover:text-green-600 no-underline hover:no-underline font-extrabold text-xl"
                        to="/">
                        <img src="/fav.svg" alt="" style="width: 22%; height: auto;" />
                    </NuxtLink>
                </div>

                <div class="block lg:hidden pr-4">
                    <button id="nav-toggle"
                        @click="toggle"
                        class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>菜单</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                <div class="w-full flex-grow lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
                    id="nav-content">
                    <ul class="list-reset lg:flex justify-end flex-1 items-center">
                        <li class="mr-1">
                            <NuxtLink to="/"
                                class="unselectable transition duration-300 ease-in-out inline-flex justify-center rounded-md px-2 py-2 text-sm font-medium text-green-900 hover:bg-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2">
                                <HomeIcon class="mr-1 h-5 w-5 text-green-900" aria-hidden="true" />
                                主页
                            </NuxtLink>
                        </li>
                        <li class="mr-1">
                            <NuxtLink to="/posts"
                                class="unselectable transition duration-300 ease-in-out inline-flex justify-center rounded-md px-2 py-2 text-sm font-medium text-green-900 hover:bg-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2">
                                <ArchiveIcon class="mr-1 h-5 w-5 text-green-900" aria-hidden="true" />
                                归档
                            </NuxtLink>
                        </li>
                        <li class="mr-1">
                            <NuxtLink to="/friends"
                                class="unselectable transition duration-300 ease-in-out inline-flex justify-center rounded-md px-2 py-2 text-sm font-medium text-green-900 hover:bg-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2">
                                <HeartIcon class="mr-1 h-5 w-5 text-green-900" aria-hidden="true" />
                                友链
                            </NuxtLink>
                        </li>
                        <li class="mr-1">
                            <NuxtLink to="/about"
                                class="unselectable transition duration-300 ease-in-out inline-flex justify-center rounded-md px-2 py-2 text-sm font-medium text-green-900 hover:bg-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2">
                                <PlayIcon class="mr-1 h-5 w-5 text-green-900" aria-hidden="true" />
                                关于
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import { HomeIcon, ArchiveIcon, PlayIcon, HeartIcon } from "@heroicons/vue/solid";

function toggle() {
	document.getElementById("nav-content").classList.toggle("hidden");
}
</script>