<template>
	<div class="flex bg-slate-800 md:mx-4 shadow-md rounded-xl h-full w-full">
		<div class="flex-1 items-center px-6 py-6">
			<slot name="name" />
			<slot name="description" />
			<div class="text-gray-400 py-3 text-sm">
				<slot name="link" />
			</div>
		</div>
		<div class="flex items-center justify-end px-4 py-4">
			<slot name="avatar" />
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	bgColor: {
		type: String,
		default: "bg-white"
	},
	textColor: {
		type: String,
		default: "text-black"
	},
	width: {
		type: String,
		default: "w-1/4"
	}
});
</script>

<style scoped lang="scss"></style>
