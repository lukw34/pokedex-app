import { createSelector } from '@reduxjs/toolkit';
import {AppState} from "../store";
import { Pokemon } from '../types/pokemon';

const getPokedexState = (store: {
    pokedex: PokedexState
}) => store.pokedex;

export const selectPokemonList = createSelector(
    getPokedexState,
    ({ list, detailsById }) => list.map(({ name }: Pokemon) => ({
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

export const makeSelectPokemon = () => createSelector(
    getPokedexState,
    (_: AppState, name: string) => name,
    ({ detailsById }, name) => detailsById[name]
);