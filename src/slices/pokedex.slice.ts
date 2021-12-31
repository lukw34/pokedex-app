import { Action,  createSlice, PayloadAction, ThunkAction, } from "@reduxjs/toolkit";
import { fetchListOfPokemons, fetchPokemonDetails, getUrl } from "../pokeapi";
import { selectNextUrl } from "../selectors/pokedex.selector";
import { AppState, AppDispatch } from "../store";
import { PokemonResponseData } from "../types/pokemon";

const initialState: PokedexState = {
    list: [],
    detailsById: {},
    next: '',
    hasMore: true
};

const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers:  {
        addPokemonToList: (state: PokedexState, action: PayloadAction<AddPokemonToListAction>) => {
            state.next = action.payload.next;
            state.list = [...state.list, ...action.payload.data];
            state.hasMore = action.payload.hasMore;
        },
        setPokemonDetails:  (state: PokedexState, action: PayloadAction<SetPokemonDetailsAction>) => {
            state.detailsById = {
                ...state.detailsById,
                [action.payload.id]: action.payload.data
            };
        }
    }
});


export const loadMore = (): ThunkAction<void, AppState, null, Action<string>> => async (dispatch: AppDispatch, getState) => {
    const nextUrl = selectNextUrl(getState());
    const { next, results }: PokemonResponseData = await fetchListOfPokemons(nextUrl);
    dispatch(addPokemonToList({ data: results, hasMore: Boolean(next), next }));
    results.map(async ({ url, name }) => {
        const data = await(fetchPokemonDetails(url));
        dispatch(setPokemonDetails({ data, id: name }));
    });
};

export const getPokemonDetails = (name: string): ThunkAction<void, AppState, null, Action<string>> => async (dispatch, getState: () => AppState) => {
    const { pokedex: { detailsById } } = getState();
    const pokemon = detailsById[name] || null;
    console.log(pokemon);
    if(pokemon === null) {
        const data = await(fetchPokemonDetails(getUrl(`pokemon/${name}`)));
        dispatch(setPokemonDetails({ data, id: name }));
    }
};

export const { addPokemonToList, setPokemonDetails } = pokedexSlice.actions;

export default pokedexSlice.reducer;