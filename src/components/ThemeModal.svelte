<script lang="ts">
	import { page } from '$app/stores';
	import { setContext, getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { theme } from '../utils/theme';
</script>

{#if $theme}
	<div>
		<div
			class="!overflow-hidden z-10 w-screen h-screen bg-black/40 backdrop-blur-sm shadow-2xl fixed inset-0 p-4 lg:p-8 flex items-center justify-center"
		>
			<div class="absolute w-full h-full inset-0 bg-noise opacity-10 z-0" />
		</div>
		<div
			class="overflow-hidden fixed top-1/2 left-1/2 -translate-x-1/2 w-96 -translate-y-1/2 z-50 shadow-lg flex items-center justify-center bg-white/80 rounded-3xl"
		>
			<div class="w-full">
				<h3
					class="flex items-center justify-center text-center font-clash font-semibold text-2xl py-4"
				>
					Choose Theme
				</h3>
				<div class="flex items-center justify-center gap-4 bg-black/20 py-12 bg">
					<button
						on:click={() => theme.hideModal('pink')}
						class="border-gray border rounded-full flex items-center justify-center cursor-pointer"
					>
						<div class="bg-primary w-16 h-16 m-1 rounded-full" />
					</button>
					<button
						on:click={() => theme.hideModal('blue')}
						class="border-gray hover:border rounded-full flex items-center justify-center cursor-pointer"
					>
						<div class="bg-secondary w-16 h-16 m-1 rounded-full" />
					</button>
					<button
						on:click={() => theme.hideModal('yellow')}
						class="border-gray hover:border rounded-full flex items-center justify-center cursor-pointer"
					>
						<div class="bg-altenate w-16 h-16 m-1 rounded-full" />
					</button>
				</div>
			</div>
		</div>
	</div>
{/if}
