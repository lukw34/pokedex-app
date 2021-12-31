interface PokeApiPokemon {
    name: string,
    url: string
}

interface PokeApiPokemonListResponse {
    count: number,
    next: string | null,
    previouise: string | null,
    results: PokeApiPokemon[]
}

interface PokeApiPokemonDetails {

}