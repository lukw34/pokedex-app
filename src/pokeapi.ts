import {PokemonResponseData} from "./types/pokemon";

const getUrl = (endpoint: string) :string => `https://pokeapi.co/api/v2/${endpoint}`;

const fetchWrap = async <T>(request: Promise<any>): Promise<T> => {
    try {
        const res = await request;
        if (res.ok) {
            return await res.json();
        }
        return await Promise.reject();

    } catch (e) {
        return await Promise.reject();
    }
};

export const fetchListOfPokemons = (pokemonUrl?: string):Promise<PokemonResponseData> => fetchWrap<PokemonResponseData>(fetch(pokemonUrl || getUrl('pokemon')));
