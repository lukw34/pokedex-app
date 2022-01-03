import React from 'react';
import { PokemonDetails } from '../../types/pokemon';
import { PokemonDetailsName, PokemonImage, PokemonItemData, PokemonIdBadge } from './styled';

const PokemonDetailsComp: React.FC<PokemonDetails> = ({ name, id, image, types = [] }) => {
    return (
        <PokemonItemData types={types}>
            <PokemonIdBadge>#{id}</PokemonIdBadge>
            {image && <PokemonImage pokemonNumber={id} src={image}/>}
            <PokemonDetailsName>{name}</PokemonDetailsName>
        </PokemonItemData>
    );
};

export default PokemonDetailsComp;