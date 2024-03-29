import React from 'react';
import { PokemonTypes } from '../../types/pokemon';

import { PokemonTypesContainer, PokemonTypeStyled } from './styled';

const PokemonTypesComp: React.FC<{id: string, types: PokemonTypes | undefined }> = ({ id, types = [] }) => (
  <PokemonTypesContainer>
    {types.map(type => <PokemonTypeStyled key={`${id}-${type}`} type={type}> {type} </PokemonTypeStyled>)}
  </PokemonTypesContainer>
);

export default PokemonTypesComp;