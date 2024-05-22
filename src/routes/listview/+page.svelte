<script lang="ts">
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
</script>

<ListLayout>
	<div class="w-full h-full py-24 lg:py-32 px-12 lg:px-52 4xl:px-[30rem]">
		<div class="absolute w-full h-full inset-0 bg-noise opacity-5 -z-10" />

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
