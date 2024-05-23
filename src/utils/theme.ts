import { writable } from 'svelte/store';

function themeModal() {
	const { subscribe, set } = writable();
	set(false);
	function showModal() {
		set(true);
	}
	function hideModal() {
		set(false);
	}
	return { subscribe, showModal, hideModal };
}


function themeColor() {
	const { subscribe, set } = writable();
	set("pink")
	function setColor(color: string) {
		set(color);
	}
	return { subscribe, setColor };
}


function pokeSearch() {
	const { subscribe, set } = writable();
	set("")
	function setSearch(value: string) {
		set(value)
	}
	return { subscribe, setSearch }
}


export const search = pokeSearch();
export const pokeColor = themeColor();
export const theme = themeModal();
