import {PokemonDetails, PokemonResponseData} from "./types/pokemon";

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
        height,
        weight,
        species: {name},
        sprites: {
            front_default: image
        },
        types,
        stats,
        base_experience: baseExperience
    } = await fetchWrap<any>(fetch(pokemonUrl));
    return {
        name,
        image,
        height,
        weight,
        types: types.map(({ type: { name: typeName } }: { type: { name: string }}) => typeName),
        baseExperience,
        stats: stats.map(({ base_stat: baseStat, effort, stat: { name } }: {
            base_stat: number,
            effort: number,
            stat: {
                name: string
            }
        }) => ({
            baseStat,
            effort,
            name
        }))
    };
}