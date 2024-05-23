/* eslint-disable @typescript-eslint/no-explicit-any */

import axios from "axios";
import type { PokeMon } from "../Interfaces/interfaces";
import { getPokemon } from "../utils/pokemon";



export const pokemonService = {
    getPokemons: async () => {
        const response = await axios.get(
            `${import.meta.env.POKEAPI}/pokemon`,
            // {
            //     params: query,
            // }
        );
        console.log(import.meta.env.POKEAPI)
        getPokemon.getAllPokemons(response.data)
        return response.data;
    },

    getPokemon: async (data: PokeMon[]) => {
        const response = await Promise.all(
            data.map((pokemon: PokeMon) =>
                axios.get(`${pokemon.url}`).then((response) => response.data)
            )
        );
        return response;
    },
};
