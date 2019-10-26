import { createSelector } from 'reselect';
import {PokedexState} from "../reducers/type";

const getPokedexState = (store: {
    pokedex: PokedexState
}) => store.pokedex;

export const selectPokemonList = createSelector(
    getPokedexState,
    ({ list, hasMore, detailsById }) => list.map(({ name }) => ({
        name,
        details: detailsById[name] || null
    }))
);

export const selectPokemonListData = createSelector(
    getPokedexState,
    selectPokemonList,
    ({ hasMore }, list) => ({
        list,
        hasMore
    })
);

export const selectNextUrl = createSelector(
    getPokedexState,
    ({ next }) => next || 'https://pokeapi.co/api/v2/pokemon'
);