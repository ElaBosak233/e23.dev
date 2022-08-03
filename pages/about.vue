<template>
  <NuxtLayout name="page">
    <div v-if="article.heroImg">
      <img :src="article.heroImg" alt="" class="rounded-t-md" />
    </div>
    <div class="w-full py-6 px-8 text-xl text-gray-800 leading-normal">
      <!--⚡ 文章内容-->
      <article class="prose min-w-full">
        <div class="font-sans">
          <h1 class="font-bold font-sans break-normal text-gray-900 pt-3 text-3xl md:text-4xl unselectable">
            {{ article.title }}
          </h1>
        </div>
        <ContentRenderer :value="article">
          <template #empty>
            <h2>未找到文章</h2>
          </template>
        </ContentRenderer>
      </article>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
const _path = "/about"
const { data: article } = await useAsyncData(_path, () => queryContent().where({ _path }).findOne())

article.value && useHead({
  title: article.value.title
});
</script>