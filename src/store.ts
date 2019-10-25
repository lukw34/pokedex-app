import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from 'redux';

import pokedex from './reducers/pokedex.reducer';
import {PokedexState} from "./reducers/type";


export type AppState = {
    pokedex: PokedexState
}

const rootReducer = combineReducers({
    pokedex
});

export default createStore(rootReducer, applyMiddleware(thunk));
