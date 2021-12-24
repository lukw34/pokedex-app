import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
            console.log('dupa', action)
            state.next = action.payload.next;
            state.list = [...state.list, ...action.payload.data]
            state.hasMore = action.payload.hasMore
        },
        setPokemonDetails:  (state: PokedexState, action: PayloadAction<SetPokemonDetailsAction>) => {
            state.detailsById = {
                ...state.detailsById,
                [action.payload.id]: action.payload.data
            }
        }
    }
})


export const { addPokemonToList, setPokemonDetails} = pokedexSlice.actions

export default pokedexSlice.reducer