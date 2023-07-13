<template>
	<div class="overflow-x-hidden">
		<Navbar class="no-select" />
		<div class="flex w-full pt-[64px]" :style="{ 'min-height': 'var(--layout-page-content-min-height)' }">
			<slot />
		</div>
	</div>
</template>

<script setup>
import Navbar from "@/components/NavBar.vue";
</script>
