<template>
	<div class="overflow-x-hidden">
		<div class="cmc no-select hidden md:block">
			<img src="/cm.svg" width="150" draggable="false" alt="" />
		</div>
		<Navbar class="no-select" />
		<div
			class="flex w-full pt-[64px]"
			:style="{ 'min-height': 'var(--layout-page-content-min-height)' }"
		>
			<slot />
		</div>
	</div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<style>
.cmc {
	position: fixed;
	top: -30px;
	right: -10px;
}
</style>
