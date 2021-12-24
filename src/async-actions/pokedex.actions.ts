import { ThunkAction } from 'redux-thunk';

import { PokemonResponseData } from "../types/pokemon";
import { selectNextUrl } from '../selectors/pokedex.selector';
import { addPokemonToList, setPokemonDetails} from "../slices/pokedex.slice"
import {AppDispatch, AppState} from "../store";
import {Action} from "redux";
import {fetchListOfPokemons, fetchPokemonDetails, getUrl} from "../pokeapi";


export const loadMore = (): ThunkAction<void, AppState, null, Action<string>> => async (dispatch: AppDispatch, getState) => {
    const nextUrl = selectNextUrl(getState());
    const {next, results}: PokemonResponseData = await fetchListOfPokemons(nextUrl);
    dispatch(addPokemonToList({ data: results, hasMore: Boolean(next), next}));
    await results.map(async ({ url, name }) => {
        const data = await(fetchPokemonDetails(url));
        console.log(data)
        dispatch(setPokemonDetails({ data, id: name}));
    });
};

export const getPokemonDetails = (name: string): ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState: () => AppState) => {
    const { pokedex: { detailsById }} = getState();
    const pokemon = detailsById[name] || null;
    console.log(pokemon);
    if(pokemon === null) {
        const data = await(fetchPokemonDetails(getUrl(`pokemon/${name}`)));
        dispatch(setPokemonDetails({ data, id: name}))
    }
}
