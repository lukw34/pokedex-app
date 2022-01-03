import { PokeApiPokemonDetails } from './types/pokeApi';
import { PokemonDetails, PokemonResponseData } from './types/pokemon';

export const getUrl = (endpoint: string): string => `https://pokeapi.co/api/v2/${endpoint}`;

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

export const fetchListOfPokemons = (pokemonUrl?: string): Promise<PokemonResponseData> => fetchWrap<PokemonResponseData>(fetch(pokemonUrl || getUrl('pokemon')));

export const fetchPokemonDetails = async (pokemonUrl: string): Promise<PokemonDetails> => {
    const {
        id,
        height,
        weight,
        species: { name },
        sprites: {
            front_default: image
        },
        types,
        stats,
        base_experience: baseExperience
    } = await fetchWrap<PokeApiPokemonDetails>(fetch(pokemonUrl));
    return {
        id,
        url: null,
        name,
        image,
        height,
        weight,
        types: types.map(({ type: { name: typeName } }) => typeName),
        baseExperience,
        stats: stats.map(({ base_stat: baseStat, effort, stat: { name } }) => ({
            baseStat,
            effort,
            name
        }))
    };
};