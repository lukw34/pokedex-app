export interface Pokemon {
    name: string,
    url: string
}

type PokemonList = Array<Pokemon>;

export interface PokemonResponseData {
    count: number,
    previous?: string,
    next?: string,
    results: PokemonList
}