import React from "react";
import {PokemonType} from "../../types/pokemon";

import {PokemonTypesContainer, PokemonTypeStyled} from './styled';

const PokemonTypesComp: React.FC<{id: string, types: PokemonType }> = ({ id, types }) => (
    <PokemonTypesContainer>
        {types.map(type => <PokemonTypeStyled key={`${id}-${type}`} type={type}> {type} </PokemonTypeStyled>)}
    </PokemonTypesContainer>
);

export default PokemonTypesComp;