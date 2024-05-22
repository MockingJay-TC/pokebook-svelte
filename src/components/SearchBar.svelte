<script lang="ts">
	import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

	const getPoke = (value: string) => {
		// setPokeSearch(value);
		// console.log(value);
		// navigate('/listview');
	};

	let search = '';
	$: search_pokemon = search;
</script>

<div class="search">
	<input
		bind:value={search}
		type="text"
		placeholder="Enter pokeman name"
		class="lg:text-2xl w-4/5 lg:w-3/4 focus:outline-none bg-transparent"
	/>
	<div
		class="cursor-pointer hover:shadow-2xl w-10 h-10 lg:w-12 lg:h-12 m-1 lg:m-2 bg-skin-base rounded-full lg:shadow-md flex justify-center items-center"
	>
		<!-- <MagnifyingGlassIcon on:click={() => getPoke(search)} class="w-5 text-white" /> -->
	</div>
</div>
