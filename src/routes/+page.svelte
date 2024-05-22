<script>
	import SearchBar from '../components/SearchBar.svelte';
	import pokemon from '$lib/images/pokeCover.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-screen h-screen flex justify-center items-center relative px-8 py-8">
	<div class="absolute w-screen h-screen inset-0 bg-noise opacity-5 -z-20" />
	<div class="flex flex-col items-center">
		<div class="flex items-center justify-center">
			<picture>
				<img src={pokemon} alt="Poke Cover" class="w-2/3 lg:w-full" />
			</picture>
		</div>
		<h1 class="font-clash font-semibold text-center mt-6 mb-2 text-3xl lg:text-5xl text-black">
			Poké <span class="text-skin-base">book</span>
		</h1>
		<h3 class="text-center font-general max-w-xs lg:max-w-sm text-sm lg:text-lg font-normal">
			Largest Pokémon index with information about every Pokemon you can think of.
		</h3>
		<SearchBar />
		<a href="/listview" class="font-general lg:text-lg text-black font-medium underline">
			View all
		</a>
	</div>
</div>
