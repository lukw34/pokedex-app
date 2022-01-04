import { EntityState } from '@reduxjs/toolkit';

export interface PokedexState extends EntityState<PokemonDetails> {
    count: number
}