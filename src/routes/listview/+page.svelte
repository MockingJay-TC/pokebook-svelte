<script lang="ts">
	import axios from 'axios';
	import ListLayout from '../../components/ListLayout.svelte';
	import Pagination from '../../components/Pagination.svelte';

	let pageNumber = 1;
	$: pageNumber = pageNumber;

	const handlePrevClick = () => {
		pageNumber = Math.max((pageNumber -= 1), 1);
	};
	const handleNextClick = () => {
		pageNumber = pageNumber += 1;
	};

	const getPokemons = async (query: any) => {
		const results = await axios.get(`${import.meta.env.VITE_POKEAPI}/pokemon/`, {
			params: query
		});
		return results.data.results;
	};
</script>

<ListLayout>
	<div class="w-full h-full py-24 lg:py-32 px-12 lg:px-52 4xl:px-[30rem]">
		<div class="absolute w-full h-full inset-0 bg-noise opacity-5 -z-10" />
		<div
			class="flex flex-col gap-y-16 md:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-x-8 2xl:gap-y-20"
		>
			{#await getPokemons({ limit: '8', offset: '8' })}
				Loading....
			{:then pokemons}
				{#each pokemons as { name, url }}
					<div>
						{name}
					</div>
				{/each}
			{/await}
		</div>

		<div class="flex justify-between my-16">
			<Pagination />
			<!-- <Select
                name="pageSelector"
                data={['8', '12', '16', '24']}
                clearable
                defaultValue={limit.toString()}
                clearButtonProps={{ 'aria-label': 'Clear selection' }}
                bind={(value) => {
                    if (value !== null) setLimit(parseInt(value));
                }}
            /> -->
		</div>
	</div>
</ListLayout>
