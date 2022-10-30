import React from 'react';
import { LoadedPokemonDetails } from '../../types/pokemon';
import { PokemonDetailsName, PokemonImage, PokemonItemData, PokemonIdBadge } from './styled';

const PokemonDetailsComp: React.FC<LoadedPokemonDetails> = ({ name, id, image, types = [] }) => {
  return (
    <PokemonItemData types={types}>
      <PokemonIdBadge>#{id}</PokemonIdBadge>
      {image && <PokemonImage pokemonNumber={id} src={image}/>}
      <PokemonDetailsName>{name}</PokemonDetailsName>
    </PokemonItemData>
  );
};

export default PokemonDetailsComp;