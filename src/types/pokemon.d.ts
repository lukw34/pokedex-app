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

enum PokemonType {
    grass = 'grass',
    poison = 'poison',
    fire = 'fire',
    water = 'water',
    normal = 'normal',
    fairy = 'fairy',
    psychic = 'psychic',
    dragon = 'dragon',
    fighting = 'fighting',
    bug = 'bug',
    ghost = 'ghost',
    electric = 'electric',
    ground = 'ground',
    rock = 'rock',
    flying = 'flying',
    ice = 'ice',
    dark = 'dark',
    steel = 'steel'
}

type PokemonStats = Array<PokemonStat>
type PokemonTypes = Array<PokemonType>

export interface PokemonDetails {
    id: number,
    name: string,
    url: string | null,
    weight?: number,
    height?: number,
    image?: string,
    types?: PokemonTypes,
    stats?: PokemonStats
    baseExperience?: number
}

export interface PokemonListItem {
    name: string,
    url: string | url
}