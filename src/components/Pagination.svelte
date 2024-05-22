<script>
	let page = 1;
</script>

<div class="flex justify-center items-center mt-4">
	<button
		class={` ${
			page !== 1 ? 'bg-purpleTheme hover:bg-yellowTheme' : 'bg-gray-400'
		} text-black font-bold py-2 px-4 rounded mr-2 ${page === 1 ? 'cursor-not-allowed' : ''}`}
		disabled={page === 1}
	>
		Prev
	</button>
	<h1>{page}</h1>
	<button
		class={` ${
			page !== 11 ? 'bg-purpleTheme hover:bg-yellowTheme' : 'bg-gray-400'
		} text-black font-bold py-2 px-4 ml-2 rounded ${page === 11 ? 'cursor-not-allowed' : ''}`}
		disabled={page === 11}
	>
		Next
	</button>
</div>
