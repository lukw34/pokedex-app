import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { makeSelectPokemon } from '../../selectors/pokedex.selector';
import PokemonItem from '../PokemonItem';
import { PokemonDetails } from "../../types/pokemon";


const PokemonItemContainer: React.FC<{ name: string}> = ({ name }) => {
    const selectPokemon = useMemo(
        makeSelectPokemon,
        undefined
    );
    const pokemon: PokemonDetails = useSelector((state: any) => selectPokemon(state,  name));

    return (
        <PokemonItem {...(pokemon || { name: '???' })} isData={Boolean(pokemon)} itemNumber={1} />
    );
};

export default PokemonItemContainer;