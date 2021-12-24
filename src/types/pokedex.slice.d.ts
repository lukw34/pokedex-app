interface PokedexState {
    next?: string,
    hasMore: boolean,
    list: PokemonList,
    detailsById: {
        [key: string]: PokemonDetails
    }
}