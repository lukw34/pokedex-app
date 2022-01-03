import { Action, createEntityAdapter, createSlice, ThunkAction, } from '@reduxjs/toolkit';
import { fetchListOfPokemons, fetchPokemonDetails } from '../pokeapi';
import { AppState, AppDispatch } from '../store';
import { PokemonDetails, PokemonResponseData } from '../types/pokemon';

const pokedexAdapter = createEntityAdapter<PokemonDetails>({
    selectId: ({ name }) => name
});

const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState: pokedexAdapter.getInitialState(),
    reducers:  {
        addPokemonToList: (state, action) => {
            pokedexAdapter.addMany(state, action.payload);
        },
        setPokemonDetails: (state, action) => {
            pokedexAdapter.upsertOne(state, action.payload);
        }
    }
});


export const fetchPokemonListChunk = (pokemonUrl: string): ThunkAction<Promise<{ next: string, hasMore: boolean}>, AppState, null, Action<string>> => 
    async (dispatch: AppDispatch) => {
        const { next, results }: PokemonResponseData = await fetchListOfPokemons(pokemonUrl);
        dispatch(addPokemonToList(results));
        return {
            next,
            hasMore: Boolean(next)
        };
};

export const fetchSinglePokemon = (pokemonUrl: string): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
    const pokemon: PokemonDetails = await fetchPokemonDetails(pokemonUrl);
    dispatch(setPokemonDetails(pokemon));
};

export const { addPokemonToList, setPokemonDetails } = pokedexSlice.actions;

export const { selectIds: selectPokemonList, selectById: selectPokemonDetails } = pokedexAdapter.getSelectors((state: AppState) => state.pokedex);

export default pokedexSlice.reducer;