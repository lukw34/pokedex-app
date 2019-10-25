import { ThunkAction } from 'redux-thunk';

import {ADD_POKEMON_TO_LIST, PokedexActionTypes} from './types';
import {PokemonList, PokemonResponseData} from "../types/pokemon";
import { selectNextUrl } from '../selectors/pokedex.selector';
import {AppState} from "../store";
import {Action} from "redux";
import {fetchListOfPokemons} from "../pokeapi";


export const addPokemonToList = (newPokemonList: PokemonList, hasMore: boolean, next?: string) : PokedexActionTypes => ({
    type: ADD_POKEMON_TO_LIST,
    data: newPokemonList,
    next,
    hasMore
});


export const loadMore = (): ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState) => {
    const nextUrl = selectNextUrl(getState());
    const {next, results}: PokemonResponseData = await fetchListOfPokemons(nextUrl);
    dispatch(addPokemonToList(results, Boolean(next), next));
};
