import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSinglePokemon, selectPokemonDetails } from '../../slices/pokedex.slice';
import { AppDispatch, AppState } from '../../store';
import PokemonNoItem from './PokemonNoItem';
import { PokemonItemContainer, PokemonItemInnerContainer } from './styled';
import PokemonDetailsComp from './PokemonDetails';

interface PokemonItemProps {
    pokedexNumber: number
    isLoaded: number
}

const PokemonItem: React.FC<PokemonItemProps> = ({ pokedexNumber, isLoaded }) => {
  const [displayDetails, setDisplayDetails] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const pokemonDetails = useSelector((state: AppState) => selectPokemonDetails(state, pokedexNumber));

  useEffect(() => {

    let timeoutId: NodeJS.Timeout | null = null;

    if(!isLoaded) {
      dispatch(fetchSinglePokemon(pokedexNumber));
    } else {
      timeoutId = setTimeout(() => {
        setDisplayDetails(true);
      }, 500);
    }

    return () => {
      if(timeoutId) {
        clearTimeout(timeoutId);
      }
    };

  }, [isLoaded, dispatch, pokedexNumber]);

  return (
    <PokemonItemContainer displayDetails={displayDetails}>
      <PokemonItemInnerContainer displayDetails={displayDetails}>
        <PokemonNoItem/>
        {pokemonDetails?.isLoaded && <PokemonDetailsComp {...pokemonDetails} />}
      </PokemonItemInnerContainer>
    </PokemonItemContainer>
  );
};
    


export default React.memo(PokemonItem);