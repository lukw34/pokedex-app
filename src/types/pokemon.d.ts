type PokemonList = Array<PokemonDetails>;

export interface PokemonResponseData {
    count: number,
    previous?: string,
    next: string,
    results: PokemonList
}

export interface PokemonStat {
    name: string,
    baseStat: number,
    effort: number
}

type PokemonStats = Array<PokemonStat>
type PokemonType = Array<string>

export interface PokemonDetails {
    name: string,
    url: string | null,
    weight?: number,
    height?: number,
    image?: string,
    types?: PokemonType,
    stats?: PokemonStats
    baseExperience?: number
}

export interface PokemonListItem {
    name: string,
    url: string | url
}