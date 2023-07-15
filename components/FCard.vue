<template>
	<div class="flex bg-slate-800 md:mx-4 shadow-md rounded-xl h-full w-full">
		<div class="flex-1 items-center px-6 py-6">
			<div class="flex space-x-2 items-center">
				<h1 class="text-2xl font-serif">
					<slot name="name" />
				</h1>
				<a :href="github" target="_blank">
					<nuxt-icon name="github" />
				</a>
			</div>
			<span class="italic text-sm">
				<slot name="description" />
			</span>
			<div class="text-gray-400 py-3 text-sm">
				<slot name="link" />
			</div>
		</div>
		<div class="flex items-center justify-end px-4 py-4">
			<img class="rounded-full" :src="avatar" alt="" draggable="false" width="100" />
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	github: {
		type: String,
		default: ""
	},
	avatar: {
		type: String,
		default: ""
	}
});
</script>
