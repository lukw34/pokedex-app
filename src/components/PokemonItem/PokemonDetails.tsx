import React from 'react';
import { PokemonDetails } from '../../types/pokemon';
import PokemonTypes from './PokemonTypes';
import { PokemonDataStyled, PokemonExperienceStyled, PokemonImage, PokemonItemData } from './styled';

const PokemonDetailsComp: React.FC<PokemonDetails> = ({ image, name,types, baseExperience }) => {
    return (
        <PokemonItemData>
            <PokemonImage src={image}/>
            <PokemonTypes id={name} types={types}/>
            <PokemonDataStyled>
                <PokemonExperienceStyled>{baseExperience}</PokemonExperienceStyled>
            </PokemonDataStyled>
        </PokemonItemData>
    );
};

export default PokemonDetailsComp;