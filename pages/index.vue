<template>
	<div class="flex flex-1 flex-col justify-center items-center">
		<Hero class="no-select px-10">
			<div class="flex flex-col justify-start content-center">
				<span class="text-green-400 my-2 font-semibold font-mono">Hi, this is </span>
				<span class="text-sky-400 mb-2 text-3xl md:text-8xl font-bold font-serif">@ElaBosak233.</span>
				<span class="text-red-300 mb-4 text-6xl font-bold font-serif"> A Chinese Pegasus & CTFer. </span>
				<div class="mb-4">
					I am indeed a CTFer, but I <span style="font-style: italic">DO NOT</span> have any skills.
				</div>
			</div>
			<div class="md:flex md:justify-start">
				<div class="pb-2 md:block">
					<NuxtLink to="/about" class="flex rounded-2xl bg-green px-4 mx-2 py-2 font-mono">
						<nuxt-icon name="star" class="py-1 pr-2" />
						About
					</NuxtLink>
				</div>
				<div class="pb-2 md:block">
					<a
						href="https://github.com/ElaBosak233"
						target="_blank"
						class="flex rounded-2xl bg-blue px-4 mx-2 py-2 font-mono"
					>
						<nuxt-icon name="github" class="py-1 pr-2" />
						Github
					</a>
				</div>
				<div class="pb-2 md:block">
					<a
						href="https://blog.e23.dev"
						target="_blank"
						class="flex rounded-2xl bg-pink-400 px-4 mx-2 py-2 font-mono"
					>
						<nuxt-icon name="blog" class="py-1 pr-2" />
						Blog
					</a>
				</div>
			</div>
		</Hero>
	</div>
</template>

<script lang="ts" setup>
import Hero from "@/components/Hero.vue";
</script>
