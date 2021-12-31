import { configureStore } from '@reduxjs/toolkit';
import pokedex from './slices/pokedex.slice';
import { PokedexState } from './types/pokedex.slice';


export type AppState = {
    pokedex: PokedexState
}

export const store = configureStore({
    reducer: {
        pokedex,
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch