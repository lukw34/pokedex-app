interface SetPokemonDetailsAction {
    id: string,
    data: PokemonDetails,
}

interface AddPokemonToListAction {
    next?: string,
    data: PokemonList
    hasMore: boolean
}