<script setup lang="ts"></script>

<template>
	<div class="wrapper2">
		<div class="container2">
			<slot />
		</div>
	</div>
</template>

<style lang="scss">
.wrapper2 {
	position: relative;
	.container2 {
		&::before {
			content: "<";
			display: block;
			padding-bottom: 10px;
			margin-left: -2rem;
			font-size: 20px;
			color: grey;
		}
		&::after {
			content: "/>";
			display: block;
			padding-top: 16px;
			margin-left: -2rem;
			font-size: 20px;
			color: grey;
		}
	}
}
</style>
