import React, { useState} from 'react';
import { useDispatch } from 'react-redux';

import { PokemonInput, PokemonInputContainer, PokemonSearchButton, PokemonSearchContainer, PokemonSearchPokemonItem } from './styled';
import PokemonItemContainer from "../../components/PokemonItemContainer";
import {getPokemonDetails} from "../../actions/pokedex.actions";

const Pokedex: React.FC = () => {
    const dispatch = useDispatch();
    const [inputName, setInput] = useState<string>('');
    const searchClick = () => {
        dispatch(getPokemonDetails(inputName));
    };

    return (
        <PokemonSearchContainer>
            <PokemonInputContainer>
                <PokemonInput value={inputName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInput(e.target.value)
                }}/>
                <PokemonSearchButton onClick={searchClick}>
                    Search
                </PokemonSearchButton>
            </PokemonInputContainer>
            <PokemonSearchPokemonItem>
                <PokemonItemContainer name={inputName}/>
            </PokemonSearchPokemonItem>
        </PokemonSearchContainer>
    );
};

export default Pokedex;