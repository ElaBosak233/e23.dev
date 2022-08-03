<template>
  <NuxtLayout name="page">
    <div v-if="data.heroImg">
      <img :src="data.heroImg" alt="" class="rounded-t-md" />
    </div>
    <div class="w-full py-6 px-8 text-xl text-gray-800 leading-normal">
      <!--⚡ 文章内容-->
      <NuxtLink to="/posts"
        class="unselectable inline-flex justify-center rounded-md bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2">
        <ArrowCircleLeftIcon class="mr-1 h-5 w-5 text-green-900" aria-hidden="true" />
        返回
      </NuxtLink>
      <article class="prose min-w-full">
        <div class="font-sans">
          <h1 class="font-bold font-sans break-normal text-gray-900 pt-3 text-3xl md:text-4xl unselectable">
            {{ data.title }}
          </h1>
          <div class="text-sm md:text-base font-normal text-gray-400 unselectable" v-if="date">
            编辑于 {{ data.date }}
          </div>
        </div>
        <ContentRenderer :value="data">
          <template #empty>
            <h2>未找到文章 ({{ slug }})</h2>
          </template>
        </ContentRenderer>
      </article>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ArrowCircleLeftIcon } from "@heroicons/vue/solid";
const slug = useRoute().params.slug;
const { data: data } = await useAsyncData(`/posts/${slug}`, () => queryContent(`/posts/${slug}`).findOne());
const title = data.value.title;
const date = data.value.date;
const heroImg = data.value.heroImg;

useHead({
  title: title
});
</script>