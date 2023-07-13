<template>
	<Body class="antialiased duration-300 transition-colors text-gray-200 bg-slate-900">
		<NuxtLoadingIndicator />
		<NuxtPage />
	</Body>
</template>

<script lang="ts" setup>
const { e23dev } = useAppConfig();

useHead({
	titleTemplate: (title) => {
		return title ? `${title} - ${e23dev.name}` : e23dev.name;
	}
});
</script>
