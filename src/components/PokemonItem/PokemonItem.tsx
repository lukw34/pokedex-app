import React from 'react';
import { PokemonDetails } from '../../types/pokemon';
import {
    PokemonItemName,
    PokemonItemNoData,
    PokemonItemContainer,
} from './styled';
import { EntityId } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSinglePokemon, selectPokemonDetails } from '../../slices/pokedex.slice';
import { AppState } from '../../store';
import PokemonDetailsComp from './PokemonDetails';

interface PokemonItemProps {
    itemId: EntityId,
    itemNumber: number
}

const PokemonItem: React.FC<PokemonItemProps> = ({ itemId, itemNumber }) => {
    const dispatch = useDispatch();
    const pokemonDetails = useSelector((state: AppState) => selectPokemonDetails(state, itemId) as PokemonDetails);
    const isData = !pokemonDetails.url;
    if(!isData) {
        dispatch(fetchSinglePokemon(pokemonDetails.url as string));
    }

    return (
    <PokemonItemContainer>
        <PokemonItemName>{itemId}</PokemonItemName>
        <PokemonItemNoData isData={isData}>#{itemNumber}</PokemonItemNoData>
        <PokemonDetailsComp {...pokemonDetails}></PokemonDetailsComp>
    </PokemonItemContainer>
    );
};
    


export default React.memo(PokemonItem);