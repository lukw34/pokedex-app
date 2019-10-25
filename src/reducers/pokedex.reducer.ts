import {PokedexState} from "./type";
import {ADD_POKEMON_TO_LIST, PokedexActionTypes} from "../actions/types";


const initialState: PokedexState = {
    list: [],
    detailsById: {},
    next: '',
    hasMore: true
};

export default (
    state = initialState,
    action: PokedexActionTypes
): PokedexState =>  {
    switch (action.type) {
        case ADD_POKEMON_TO_LIST: {
            return {
                ...state,
                next: action.next,
                list: [...state.list, ...action.data],
                hasMore: action.hasMore
            }
        }
        default:
            return state
    }
}