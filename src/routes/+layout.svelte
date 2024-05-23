<script>
	import '../app.css';
	import { pokeColor } from '../utils/theme';
</script>

<div
	class={`app ${$pokeColor === 'blue' ? 'theme-blue' : $pokeColor === 'yellow' ? 'theme-yellow' : 'theme'}`}
>
	<main>
		<slot />
	</main>
</div>
