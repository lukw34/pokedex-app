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
    itemId: EntityId | undefined,
    itemNumber: number
}

const PokemonItem: React.FC<PokemonItemProps> = ({ itemId = '', itemNumber }) => {
    const [displayDetails, setDisplayDetails] = useState(false);
    const dispatch = useDispatch();
    const { url, ...props } = useSelector((state: AppState) => selectPokemonDetails(state, itemId) as PokemonDetails) || {};
    
    useEffect(() => {
        const isData = url === null;
        const itemNotFetched = url === undefined;
        let timeoutId: NodeJS.Timeout | null = null;
        if(!isData && !itemNotFetched) {
            dispatch(fetchSinglePokemon(url as string));
        } else if (!itemNotFetched) {
            timeoutId = setTimeout(() => {
                setDisplayDetails(true);
            }, 500);
        }

        return () => {
            if(timeoutId) {
                clearTimeout(timeoutId);
            }
        };

    }, [url]);

    return (
        <PokemonItemContainer displayDetails={displayDetails}>
            <PokemonItemInnerContainer displayDetails={displayDetails}>
                <PokemonNoItem/>
                <PokemonDetailsComp {...props} url={url} />
            </PokemonItemInnerContainer>
        </PokemonItemContainer>
    );
};
    


export default React.memo(PokemonItem);