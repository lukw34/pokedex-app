import { ThunkAction } from 'redux-thunk';

import {ADD_POKEMON_TO_LIST, PokedexActionTypes, SET_DETAILS} from './types';
import {PokemonDetails, PokemonList, PokemonResponseData} from "../types/pokemon";
import { selectNextUrl } from '../selectors/pokedex.selector';
import {AppState} from "../store";
import {Action} from "redux";
import {fetchListOfPokemons, fetchPokemonDetails} from "../pokeapi";


export const addPokemonToList = (newPokemonList: PokemonList, hasMore: boolean, next?: string) : PokedexActionTypes => ({
    type: ADD_POKEMON_TO_LIST,
    data: newPokemonList,
    next,
    hasMore
});

export const setPokemonDetails = (pokemonDetails: PokemonDetails, id: string) => ({
    type: SET_DETAILS,
    data: pokemonDetails,
    id
});

export const loadMore = (): ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
    const nextUrl = selectNextUrl(getState());
    const {next, results}: PokemonResponseData = await fetchListOfPokemons(nextUrl);
    dispatch(addPokemonToList(results, Boolean(next), next));
    await results.map(async ({ url, name }) => {
        const data = await(fetchPokemonDetails(url));
        dispatch(setPokemonDetails(data, name));
    });
};
