import { PokemonType } from './pokemon';

interface PokeApiQuery {
    limit: number,
    offset: number
}

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

interface PokeApiTypes {
    slot: number,
    type: {
        name: PokemonType
    }
}

interface PokeApiStats {
    base_stat: number,
    effort: number,
    stat: {
        name: string
    }
}

interface PokeApiSprites {
    back_default: string | null,
    back_shiny_female: string | null,
    front_default: string,
    front_shiny: string | null, 
    front_shiny_female: string | null
}

interface PokeApiPokemonDetails {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: unknown[],
    forms: unknown[],
    game_indices: unknown[],
    held_items: unknown[],
    location_area_encounters: string,
    moves: unknown[],
    past_types: unknown[],
    types: PokeApiTypes[]
    stats: PokeApiStats[],
    species: {
        name: string
    },
    sprites: PokeApiSprites
}