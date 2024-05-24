<script lang="ts">
	import ListLayout from '../../components/ListLayout.svelte';
	import Pagination from '../../components/Pagination.svelte';
	import { useQuery } from '@sveltestack/svelte-query';
	import { pokemonService } from '../../services/pokemonService';

	let pageNumber = 1;
	$: pageNumber = pageNumber;
	let limit = 8;
	$: limit = limit;

	const handlePrevClick = () => {
		pageNumber = Math.max((pageNumber -= 1), 1);
	};
	const handleNextClick = () => {
		pageNumber = pageNumber += 1;
	};

	const getPokebook = useQuery({
		queryKey: ['get-pokemons', pageNumber, limit],
		queryFn: () =>
			pokemonService.getPokemons({
				limit: limit,
				offset: (pageNumber - 1) * limit
			}),
		enabled: true,
		onSuccess: (data) => {},
		refetchOnMount: 'always',
		keepPreviousData: false
	});

	const getAllPokemon = useQuery({
		queryKey: ['get-all-pokemons', getPokebook],
		queryFn: () => pokemonService.getPokemon($getPokebook.data.results as []),
		enabled: true,
		onSuccess: (data) => {
			return data;
		},
		keepPreviousData: false
	});
</script>

<ListLayout>
	<div class="w-full h-full py-24 lg:py-32 px-12 lg:px-52 4xl:px-[30rem]">
		<div class="absolute w-full h-full inset-0 bg-noise opacity-5 -z-10" />
		<div
			class="flex flex-col gap-y-16 md:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-x-8 2xl:gap-y-20"
		>
			{JSON.stringify($getAllPokemon.data)}
			<!-- {#each $getAllPokemon?.data as { name }}
				<div>
					{name}
				</div>
			{/each} -->
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
