/* eslint-disable @typescript-eslint/no-explicit-any */
import { writable } from 'svelte/store';
import type { PokeMonDetail } from '../Interfaces/interfaces';

function pokemons() {
    const { subscribe, set } = writable();

    function getAllPokemons(data: PokeMonDetail[]) {
        set(data);
    }

    return { subscribe, getAllPokemons };
}


export const getPokemon = pokemons()