import {PokemonDetails, PokemonList} from "../types/pokemon";

export type PokedexState = {
    next?: string,
    hasMore: boolean,
    list: PokemonList,
    detailsById: {
        [key: string]: PokemonDetails
    }
}