<template>
	<div
		class="no-select md:grid md:grid-cols-12 md:grid-flow-row space-y-6 md:space-y-0 md:gap-6 w-full h-full px-8 pt-4 pb-8 md:py-7 md:px-12 lg:px-48 2xl:py-14 2xl:px-96"
	>
		<Card
			class="col-span-5 shadow-cyan-500/50"
			github="https://github.com/tdiant"
			avatar="https://avatars.githubusercontent.com/u/22428650"
		>
			<template #name>
				<span class="hover:text-cyan-500">tdiant</span>
			</template>
			<template #description> Current MCBBS programming section moderator, also the author of BDN. </template>
			<template #link>
				<a href="https://blog.tdiant.net/" class="hover:text-cyan-500 hover:underline" target="_blank"
					>https://blog.tdiant.net</a
				>
			</template>
		</Card>
		<Card
			class="col-span-7 shadow-indigo-500/50"
			github="https://github.com/LeSnow-Ye"
			avatar="https://avatars.githubusercontent.com/u/40481418"
		>
			<template #name>
				<span class="hover:text-indigo-500">LeSnow Ye</span>
			</template>
			<template #description> A member of MCBBS BoneStudio, who is currently studying Engineering. </template>
			<template #link>
				<a href="https://lesnow.top/" class="hover:text-indigo-500 hover:underline" target="_blank"
					>https://lesnow.top</a
				>
			</template>
		</Card>
		<Card
			class="col-span-7 shadow-pink-500/50"
			github="https://github.com/Song-Xin233"
			avatar="https://aoss.ssxx.site:21443/website/imgs/header.jpg"
		>
			<template #name>
				<span class="hover:text-pink-500">上杉夏相</span>
			</template>
			<template #description> From his blog, it is clear that he is studying medicine. </template>
			<template #link>
				<a href="https://blog.ssxx.site/" class="hover:text-pink-500 hover:underline" target="_blank"
					>https://blog.ssxx.site</a
				>
			</template>
		</Card>
		<Card
			class="col-span-5 shadow-primary-500/50"
			github="https://github.com/qyl27"
			avatar="https://avatars.githubusercontent.com/u/53731501"
		>
			<template #name>
				<span class="hover:text-pink-500">秋雨落</span>
			</template>
			<template #description> A cute girl with a fantastic soul. </template>
			<template #link>
				<a href="https://www.qy.al/" class="hover:text-primary-500 hover:underline" target="_blank"
					>https://www.qy.al</a
				>
			</template>
		</Card>
		<Card
			class="col-span-5 shadow-indigo-500/50"
			github="https://github.com/ZerolAcqua"
			avatar="https://avatars.githubusercontent.com/u/68687848"
		>
			<template #name>
				<span class="hover:text-indigo-500">Zerol Acqua</span>
			</template>
			<template #description> A really adorable unicorn who loves water magic. </template>
			<template #link>
				<a href="https://zerolacqua.top/" class="hover:text-indigo-500 hover:underline" target="_blank"
					>https://zerolacqua.top/</a
				>
			</template>
		</Card>
	</div>
</template>

<script setup>
import Card from "@/components/friends/Card.vue";
useHead({
	title: "Friends"
});
</script>
