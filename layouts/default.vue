<template>
	<div>
		<Navbar class="no-select" />
		<div class="flex w-full pt-[64px] min-h-screen">
			<slot />
		</div>
	</div>
</template>

<script setup>
import Navbar from "@/components/NavBar.vue";
</script>
