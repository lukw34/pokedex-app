import React from 'react';
import {Pokemon} from "../types/pokemon";

import { PokemonItemContainer, PokemonItemName, PokemonItemNoData, PokemonItemData } from './styled';

const PokemonItem: React.FC<Pokemon> = ({ name }) => {
    return (
        <PokemonItemContainer>
            <PokemonItemName>{name}</PokemonItemName>
            <PokemonItemNoData>#1</PokemonItemNoData>
            <PokemonItemData>Content</PokemonItemData>
        </PokemonItemContainer>
    )
};


export default PokemonItem;