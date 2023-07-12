<template>
	<div class="fixed top-0 left-0 w-full py-4 px-6">
		<div class="relative flex justify-between">
			<div class="flex pr-6">
				<nuxt-img src="/fav.svg" width="35" />
			</div>
			<div class="flex-1 flex justify-center items-center pr-6">
				<ul
					class="flex text-sm font-mono space-x-3 lg:space-x-5 2xl:space-x-5"
				>
					<li>
						<a
							href="/"
							class="router-link-active router-link-exact-active text-white font-semibold"
							><span class="text-primary-500">01 </span
							><span>// 首页</span></a
						>
					</li>
					<li>
						<a href="/about" class="text-white font-semibold"
							><span class="text-primary-500">02 </span
							><span>// 关于</span></a
						>
					</li>
					<li>
						<a href="/friends" class="text-white font-semibold"
							><span class="text-primary-500">03 </span
							><span>// 友链</span></a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
