import thunk, { ThunkMiddleware } from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit';
import pokedex from './slices/pokedex.slice';


export type AppState = {
    pokedex: PokedexState
}

export const store = configureStore({
    reducer: {
        pokedex
    },
    middleware: [thunk as ThunkMiddleware]
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch