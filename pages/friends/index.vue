<template>
	<div
		class="no-select md:grid md:grid-cols-12 md:grid-flow-row space-y-6 md:space-y-0 md:gap-6 w-full h-full px-8 pt-4 pb-8 md:py-7 md:px-12 lg:px-48 2xl:py-14 2xl:px-96"
	>
		<FCard class="col-span-5 shadow-cyan-500/50">
			<template #name>
				<div class="flex space-x-2 items-center">
					<h1 class="text-2xl font-serif hover:text-cyan-500">tdiant</h1>
					<a href="https://github.com/tdiant" target="_blank">
						<nuxt-icon name="github" />
					</a>
				</div>
			</template>
			<template #description>
				<span class="italic text-sm">
					Current MCBBS programming section moderator, also the author of BDN.
				</span>
			</template>
			<template #link>
				<a href="https://blog.tdiant.net/" class="hover:text-cyan-500 hover:underline"
					>https://blog.tdiant.net</a
				>
			</template>
			<template #avatar>
				<img
					class="rounded-full"
					src="https://avatars.githubusercontent.com/u/22428650"
					alt="tdiant"
					draggable="false"
					width="100"
				/>
			</template>
		</FCard>
		<FCard class="col-span-7 shadow-indigo-500/50">
			<template #name>
				<div class="flex space-x-2 items-center">
					<h1 class="text-2xl font-serif hover:text-indigo-500">LeSnow Ye</h1>
					<a href="https://github.com/LeSnow-Ye" target="_blank">
						<nuxt-icon name="github" />
					</a>
				</div>
			</template>
			<template #description>
				<span class="italic text-sm">
					A member of MCBBS BoneStudio, masters C# perfectly and is currently studying CS.
				</span>
			</template>
			<template #link>
				<a href="http://lesnow.top/" class="hover:text-indigo-500 hover:underline">http://lesnow.top</a>
			</template>
			<template #avatar>
				<img
					class="rounded-full"
					src="https://avatars.githubusercontent.com/u/40481418"
					alt="LeSnow Ye"
					draggable="false"
					width="100"
				/>
			</template>
		</FCard>
		<FCard class="col-span-7 shadow-pink-500/50">
			<template #name>
				<div class="flex space-x-2 items-center">
					<h1 class="text-2xl font-serif hover:text-pink-500">上杉夏相</h1>
					<a href="https://github.com/Song-Xin233" target="_blank">
						<nuxt-icon name="github" />
					</a>
				</div>
			</template>
			<template #description>
				<span class="italic text-sm">
					From his blog, it is clear that he is studying medicine. However, at least to me, he has not been
					heard from in a long time.
				</span>
			</template>
			<template #link>
				<a href="https://blog.ssxx.site/" class="hover:text-pink-500 hover:underline">https://blog.ssxx.site</a>
			</template>
			<template #avatar>
				<img
					class="rounded-full"
					src="https://aoss.ssxx.site:21443/website/imgs/header.jpg"
					alt="tdiant"
					draggable="false"
					width="100"
				/>
			</template>
		</FCard>
		<FCard class="col-span-5 shadow-primary-500/50">
			<template #name>
				<div class="flex space-x-2 items-center">
					<h1 class="text-2xl font-serif hover:text-primary-500">秋雨落</h1>
					<a href="https://github.com/qyl27" target="_blank">
						<nuxt-icon name="github" />
					</a>
				</div>
			</template>
			<template #description>
				<span class="italic text-sm"> A cute girl with a fantastic soul. </span>
			</template>
			<template #link>
				<a href="https://www.qy.al/" class="hover:text-primary-500 hover:underline">https://qy.al</a>
			</template>
			<template #avatar>
				<img
					class="rounded-full"
					src="https://avatars.githubusercontent.com/u/53731501"
					alt="秋雨落"
					draggable="false"
					width="100"
				/>
			</template>
		</FCard>
	</div>
</template>

<script setup>
import FCard from "@/components/FCard.vue";
useHead({
	title: "Friends"
});
</script>
