<script>
	import '../app.css';
	import { pokeColor } from '../utils/theme';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';

	const queryClient = new QueryClient();
</script>

<div
	class={`app ${$pokeColor === 'blue' ? 'theme-blue' : $pokeColor === 'yellow' ? 'theme-yellow' : 'theme'}`}
>
	<QueryClientProvider client={queryClient}>
		<main>
			<slot />
		</main>
	</QueryClientProvider>
</div>
