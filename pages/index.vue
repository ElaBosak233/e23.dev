<template>
	<NuxtLayout>
		<div class="flex flex-1 flex-col justify-center items-center">
			<Hero class="no-select px-10">
				<div class="flex flex-col justify-start content-center">
					<span class="text-green-400 my-2 font-semibold font-mono"
						>Hi, this is</span
					>
					<span
						class="text-sky-400 mb-2 text-3xl md:text-8xl font-bold font-serif"
						>@ElaBosak233.</span
					>
					<span
						class="text-red-300 mb-4 text-6xl font-bold font-serif"
					>
						A Chinese Pegasus & Student.
					</span>
					<div class="mb-4">
						I am a full stack. However, I'm not skilled in any of my
						languages.
					</div>
				</div>
				<div class="md:flex md:justify-start">
					<div class="pb-2 md:block">
						<a href="/about">
							<button
								class="flex rounded-2xl bg-green px-4 mx-2 py-2 font-mono"
							>
								<nuxt-icon name="star" class="py-1 pr-2" />
								About Me
							</button>
						</a>
					</div>
					<div class="pb-2 md:block">
						<a
							href="https://github.com/ElaBosak233"
							target="_blank"
						>
							<button
								class="flex rounded-2xl bg-blue px-4 mx-2 py-2 font-mono"
							>
								<nuxt-icon name="github" class="py-1 pr-2" />
								Github
							</button>
						</a>
					</div>
					<div class="pb-2 md:block">
						<a
							href="https://space.bilibili.com/155510267"
							target="_blank"
						>
							<button
								class="flex rounded-2xl bg-pink-400 px-4 mx-2 py-2 font-mono"
							>
								<nuxt-icon name="bilibili" class="py-1 pr-2" />
								Bilibili
							</button>
						</a>
					</div>
				</div>
			</Hero>
		</div>
	</NuxtLayout>
</template>

<script lang="ts" setup>
import Hero from "@/components/Hero.vue";
</script>
