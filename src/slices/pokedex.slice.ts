import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchListOfPokemonsWithParams, fetchPokemonDetails } from '../pokeapi';
import { AppState } from '../store';
import { PokemonDetails } from '../types/pokemon';

const pokedexAdapter = createEntityAdapter<PokemonDetails>({
  selectId: ({ pokedexNumber }) => pokedexNumber
});

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: pokedexAdapter.getInitialState({
    count: 0,
  }),
  reducers:  {
    setPokemonDetails: (state, action) => {
      pokedexAdapter.upsertOne(state, { 
        ...action.payload,
        pokedexNumber: action.payload.id,
        isLoaded: true,
      });
    }
  },
  extraReducers(builder) {
    builder.addCase(initPokedex.fulfilled, (state, action) => {
      const { count } = action.payload;
      state.count = count;
      pokedexAdapter.addMany(state, [...new Array(count)].map((_, index) => ({ pokedexNumber: index +1, isLoaded: false })));
    });

    builder.addCase(fetchSinglePokemon.fulfilled, (state, action) => {
      pokedexAdapter.upsertOne(state, action.payload);
    });
  },
});

export const initPokedex = createAsyncThunk(
  'pokedex/initiPokedex',
  async () => {
    return await fetchListOfPokemonsWithParams({ limit: 20, offset: 0 });
  }
);

export const fetchSinglePokemon = createAsyncThunk(
  'pokedex/fetchSinglePokemon',
  async (pokedexNumber: number) => {
    return await fetchPokemonDetails(pokedexNumber);
  }
);

export const { setPokemonDetails } = pokedexSlice.actions;

export const { selectAll: selectPokemonList, selectById: selectPokemonDetails } = pokedexAdapter.getSelectors((state: AppState) => state.pokedex);

export const selectPokemonCount = (state: AppState) => state.pokedex.count;

export default pokedexSlice.reducer;