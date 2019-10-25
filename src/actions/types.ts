import {PokemonDetails, PokemonList} from "../types/pokemon";

export const SET_DETAILS = 'pokedex/SET_DETAILS';
export const ADD_POKEMON_TO_LIST = 'pokedex/ADD_POKEMON_TO_LIST';


interface SetDetailsAction {
    type: typeof SET_DETAILS,
    id: number,
    data: PokemonDetails,
}

interface AddPokemonToListAction {
    type: typeof ADD_POKEMON_TO_LIST,
    next?: string,
    data: PokemonList
    hasMore: boolean
}

export type PokedexActionTypes = AddPokemonToListAction | SetDetailsAction;