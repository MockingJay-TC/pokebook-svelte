/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store';

function pokemons() {
    const { subscribe, set } = writable();

    function getAllPokemons(data: any) {
        console.log(data)
        set(data);
    }

    return { subscribe, getAllPokemons };
}


export const getPokemon = pokemons()