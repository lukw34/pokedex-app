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

export interface PokemonStat {
    name: string,
    baseStat: number,
    effort: number
}

type PokemonStats = Array<PokemonStat>
type PokemonType = Array<String>

export interface PokemonDetails extends Pokemon {
    id: number,
    name: string,
    weight: number,
    image: string,
    types: PokemonType,
    stats: PokemonStats
    baseExperience: number
}