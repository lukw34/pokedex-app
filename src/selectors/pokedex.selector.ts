import { createSelector } from 'reselect';
import {PokedexState} from "../reducers/type";

const getPokedexState = (store: {
    pokedex: PokedexState
}) => store.pokedex;

export const selectPokemonList = createSelector(
    getPokedexState,
    ({ list, hasMore }) => ({
        list,
        hasMore
    })
);

export const selectNextUrl = createSelector(
    getPokedexState,
    ({ next }) => next || 'https://pokeapi.co/api/v2/pokemon'
);