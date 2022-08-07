<template>
  <NuxtLayout name="index">
    <div class="grid grid-cols-12 gap-6">
      <div class="xl:col-span-9 col-span-12">
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
                <div class="text-sm md:text-base font-normal text-gray-400 unselectable" v-if="article.createdAt">
                  编辑于 {{ article.createdAt }}
                </div>
              </div>
              <ContentRenderer :value="article">
                <template #empty>
                  <h2>未找到文章 ({{ _path }})</h2>
                </template>
              </ContentRenderer>
            </article>
          </div>
        </NuxtLayout>
      </div>
      <div class="xl:col-span-3 hidden xl:block">
        <!--目录-->
        <div class="sticky top-24">
          <div v-if="article.excerpt" class="p-5 border rounded-md bg-white hidden lg:block">
            <h2 class="text-sm font-bold mb-4">{{ article.title }}</h2>
            <ul class="space-y-0">
              <template v-for="(t, k) in toc" :key="`toc-item-${k}`">
                <li>
                  <a :class="{
                    'text-sm ml-4': t.depth == 2,
                    'text-[13px] ml-6': t.depth > 2,
                  }" class="capitalize hover:text-green-600" :href="`#${t.id}`">{{ t.title }}
                  </a>
                </li>
              </template>
            </ul>
          </div>
          <ProfileBar class="mt-6" />
        </div>
      </div>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">
const { fullPath, params } = useRoute();
const _path = `/posts/${params.slug[0]}`;
const { data: article } = await useAsyncData(_path, () =>
  queryContent().where({ _path }).findOne()
);
const toc = computed(() => {
  if (!article.value) return [];
  const items = article.value.excerpt?.children;
  if (!items) return [];
  const toc = [];
  const tags = ["h2", "h3", "h4"];
  items.forEach((item) => {
    if (tags.includes(item.tag)) {
      toc.push({
        id: item.props.id,
        title: item.children[0].value.toString().replace(/-/g, " "),
        depth: Number(item.tag.replace(/h/g, "")),
      });
    }
  });
  return toc;
});

article.value && useHead({
  title: article.value.title
});
</script>