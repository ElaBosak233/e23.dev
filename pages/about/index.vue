<template>
	<NuxtLayout>
		<div class="flex flex-1 w-full justify-center px-2 py-2 md:py-7 md:px-24 2xl:py-14 2xl:px-96">
			<div class="rounded-xl bg-slate-800 w-full shadow-xl">
				<div class="p-10 md:p-20 text-white">
					<div class="no-select">
						<h1 class="text-2xl md:text-3xl font-serif py-4">
							<span class="text-primary-500">#</span> Introduction
						</h1>
						<div class="flex">
							<div class="pl-6">
								<p class="text-lg">
									Hi, this is <span class="text-primary-400 italic">Ela</span>, nice to meet you! As
									you see, I am a <span class="text-pink-300 italic">pegasus</span>. I have an
									extraordinary passion in this internet world. Let me guess, if you are using a
									<span class="underline">large screen</span> to browse this page, you may be able to
									see my <span class="text-yellow-400 italic">cutie mark</span> 🌙.
								</p>
								<p class="text-lg py-2">
									At present, I am still a student, focusing on
									<span class="text-purple-400">computer science</span> knowledge, and I am good at
									<span class="text-blue-400">Python</span>,
									<span class="text-orange-500">Java</span> and
									<span class="text-green-400">front-end</span> work. So I wish that I can become a
									full stack engineer in the near future.
								</p>
							</div>
							<div class="hidden xl:block w-2/8 px-4 justify-end">
								<img src="/Ella_Avatar.png" alt="" width="400" draggable="false" class="rounded-full" />
							</div>
						</div>
					</div>
					<div class="no-select">
						<h1 class="text-2xl md:text-3xl font-serif py-4">
							<span class="text-primary-500">#</span> About My
							<span class="italic">Name</span>
						</h1>
						<div class="pl-6">
							<p class="text-lg">
								<span class="text-primary-400">Ela</span>
								<code class="bg-gray-700 rounded text-sm">/ˈɛlə/</code>, this is my English nickname.
								And my <span class="text-red-500">Chinese</span> nickname is called
								<span class="text-primary-400">埃拉</span>
								<code class="bg-gray-700 rounded text-sm">/āi lā/</code>.
							</p>
							<p class="text-lg py-2">
								Let's talk about the history of my nickname. You may have noticed a detail about my
								avatar. I like <span class="text-primary-400">green</span> very much. I have the same
								name as one of the operators in <span class="underline">Rainbow Six | Siege</span>, the
								green-haired lady Ela from Poland. That's why my usual ID is
								<span class="text-primary-400 underline">ElaBosak233</span>.
							</p>
						</div>
					</div>
					<div class="no-select">
						<h1 class="text-2xl md:text-3xl font-serif py-4">
							<span class="text-primary-500">#</span> About My
							<span class="italic">Hobbies</span>
						</h1>
						<div class="pl-12">
							<ul class="list-disc">
								<li>
									Game software <span class="text-purple-400 font-semibold">IntelliJ IDEA</span>.
									Hundreds of hours of gameplay. I've wasted most of my life on this game.
								</li>
								<li>
									Game series <span class="text-yellow-500 font-semibold">The Legend of Zelda</span>.
									Maybe I was a great swordsman to save the princess Zelda.
								</li>
								<li>
									Animation <span class="text-pink-300 font-semibold">My Little Pony</span>. See my
									avatar and my cutie mark, no more explanation. I love RD&TS so much.
								</li>
								<li>
									Game software <span class="text-green-200 font-semibold">Minecraft</span>. I learned
									Java from it <span class="line-through">(also Jvav)</span>.
								</li>
								<li>
									Game softwares
									<span class="text-zinc-400 font-semibold">Tetris Effect Connected</span>,
									<span class="text-blue-400 font-semibold">Puyo Puyo Tetris 2</span>,
									<span class="text-red-500 font-semibold">Tetris 99</span>. They all make me
									enjoyable! And my favorite TEC level is Metamorphosis.
								</li>
							</ul>
						</div>
					</div>
					<div class="no-select">
						<h1 class="text-2xl md:text-3xl font-serif py-4">
							<span class="text-primary-500">#</span> Contact Me
						</h1>
						<div class="pl-6 md:flex md:justify-start">
							<div class="pb-2 md:block">
								<a
									href="https://qm.qq.com/cgi-bin/qm/qr?k=9lvDlLFip8Vexc3wYQt6-loGaNy4bOsL"
									target="_blank"
									class="flex rounded-2xl bg-blue px-4 mx-2 py-2 font-mono"
								>
									<nuxt-icon name="qq" class="py-1 pr-2" />
									QQ
								</a>
							</div>
							<div class="pb-2 md:block">
								<a
									href="mailto:i@e23.dev"
									class="flex rounded-2xl bg-gray-500 px-4 mx-2 py-2 font-mono"
								>
									<nuxt-icon name="email" class="py-1 pr-2" />
									Email
								</a>
							</div>
							<div class="pb-2 md:block">
								<a
									href="https://space.bilibili.com/155510267"
									target="_blank"
									class="flex rounded-2xl bg-pink-400 px-4 mx-2 py-2 font-mono"
								>
									<nuxt-icon name="bilibili" class="py-1 pr-2" />
									Bilibili
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
useHead({
	title: "About"
});
</script>
