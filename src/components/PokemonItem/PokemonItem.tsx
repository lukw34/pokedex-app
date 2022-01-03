import React, { useEffect, useState } from 'react';
import { PokemonDetails } from '../../types/pokemon';
import { EntityId } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSinglePokemon, selectPokemonDetails } from '../../slices/pokedex.slice';
import { AppState } from '../../store';
import PokemonNoItem from './PokemonNoItem';
import { PokemonItemContainer, PokemonItemInnerContainer } from './styled';
import PokemonDetailsComp from './PokemonDetails';

interface PokemonItemProps {
    itemId: EntityId,
    itemNumber: number
}

const PokemonItem: React.FC<PokemonItemProps> = ({ itemId, itemNumber }) => {
    const [displayDetails, setDisplayDetails] = useState(false);
    const dispatch = useDispatch();
    const pokemonDetails = useSelector((state: AppState) => selectPokemonDetails(state, itemId) as PokemonDetails);
    
    useEffect(() => {
        const isData = !pokemonDetails.url;
        if(!isData) {
            dispatch(fetchSinglePokemon(pokemonDetails.url as string));
        } else {
            setTimeout(() => {
                setDisplayDetails(true);
            }, 500);
        }

    }, [pokemonDetails.url]);

    return (
        <PokemonItemContainer displayDetails={displayDetails}>
            <PokemonItemInnerContainer displayDetails={displayDetails}>
                <PokemonNoItem/>
                <PokemonDetailsComp {...pokemonDetails} />
            </PokemonItemInnerContainer>
        </PokemonItemContainer>
    );
};
    


export default React.memo(PokemonItem);