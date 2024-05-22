import { writable } from 'svelte/store';

function themeModal(value: boolean) {
	const { subscribe, set } = writable();

	function showModal() {
		set(true);
	}
	function hideModal(value: string) {
		set(false);
		console.log(value);
		return value;
	}

	return { subscribe, showModal, hideModal };
}

export const theme = themeModal(false);
