<script>
	import ThemeModal from './ThemeModal.svelte';
</script>

<div
	class="w-full bg-white h-20 flex items-center justify-between px-4 lg:px-10 py-4 relative bg-blend-multiply"
>
	<div class="flex justify-center items-center gap-4">
		<a href="/">
			<img src="assets/images/pokeCover.svg" alt="Poke Cover" class="lg:w-36 w-20 lg:mt-8" />
		</a>
		<a href="/" class="text-lg lg:text-2xl font-semibold font-clash cursor-pointer hidden lg:block">
			Poke<span class="text-skin-base">book</span>
		</a>
	</div>
	<div
		class="  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center lg:w-1/5"
	>
		<div class="navSearch">
			<i class="text-white text-xl fa-solid fa-magnifying-glass"></i>
			<input
				name="pokeSearch"
				type="text"
				placeholder="Enter pokeman name"
				class="lg:text-lg w-4/5 text-sm lg:w-3/4 py-2 focus:outline-none"
			/>
		</div>
	</div>
	<div class="border-gray border rounded-full flex items-center justify-center cursor-pointer">
		<div class="bg-skin-base w-8 h-8 m-1 rounded-full" />
	</div>
	<ThemeModal />
</div>
;
