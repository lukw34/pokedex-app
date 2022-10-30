import { PokeApiPokemonDetails, PokeApiQuery } from './types/pokeApi';
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
    console.error(e);
    return await Promise.reject(e);
  }
};

export const fetchListOfPokemonsWithParams = (pokeApiQueryParams: PokeApiQuery): Promise<PokemonResponseData> => 
  fetchWrap<PokemonResponseData>(fetch(`${getUrl('pokemon')}?limt=${pokeApiQueryParams.limit}&offset=${pokeApiQueryParams.offset}`));

export const fetchPokemonDetails = async (pokedexNumber: number): Promise<PokemonDetails> => {
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
  } = await fetchWrap<PokeApiPokemonDetails>(fetch(getUrl(`pokemon/${pokedexNumber}`)));
  return {
    pokedexNumber: id,
    isLoaded: true,
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