import {PokedexState} from "./type";
import {ADD_POKEMON_TO_LIST, PokedexActionTypes, SET_DETAILS} from "../actions/types";

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
        case SET_DETAILS: {
            return {
                ...state,
                detailsById: {
                    ...state.detailsById,
                    [action.id]: action.data
                }
            }
        }
        default:
            return state
    }
}