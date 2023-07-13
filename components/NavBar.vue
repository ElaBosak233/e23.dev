<template>
	<div class="fixed top-0 left-0 w-full py-4 px-6 bg-slate-900">
		<div class="cmc no-select hidden md:block">
			<img src="/cm.svg" width="150" draggable="false" alt="" />
		</div>
		<div class="relative flex justify-between">
			<div class="flex pr-6">
				<img src="/fav.svg" width="35" draggable="false" alt="" />
			</div>
			<div class="flex-1 flex justify-center items-center pr-6">
				<ul class="flex text-sm font-mono space-x-3 lg:space-x-5 2xl:space-x-5">
					<li>
						<NuxtLink to="/" class="text-white font-semibold">
							<span class="text-primary-500">01 </span>
							<span>Home</span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/about" class="text-white font-semibold">
							<span class="text-primary-500">02 </span>
							<span>About</span>
						</NuxtLink>
					</li>
					<li>
						<NuxtLink to="/friends" class="text-white font-semibold">
							<span class="text-primary-500">03 </span>
							<span>Friends</span>
						</NuxtLink>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
