import React from "react";
import { PokemonStats } from "../../types/pokemon";

import {
    PokemonStatsContainer,
    PokemonStatsStyled,
    PokemonStatLabel,
    PokemonStatValue
} from './styled';

const PokemonStatsComp: React.FC<{ id: string, stats: PokemonStats }> = ({ id, stats }) => (
    <PokemonStatsContainer>
        {stats.map(({ name, baseStat }) => (
            <PokemonStatsStyled key={`${id}-${name}`}>
                <PokemonStatLabel>{name}</PokemonStatLabel>
                <PokemonStatValue>{baseStat}</PokemonStatValue>
            </PokemonStatsStyled>
        ))}
    </PokemonStatsContainer>
);

export default PokemonStatsComp;