import React, { useState } from 'react';

import { PokemonInput, PokemonInputContainer, PokemonSearchButton, PokemonSearchContainer } from './styled';

const Pokedex: React.FC = () => {
  const [inputName, setInput] = useState<string>('');
  const searchClick = () => {
  };

  return (
    <PokemonSearchContainer>
      <PokemonInputContainer>
        <PokemonInput value={inputName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}/>
        <PokemonSearchButton onClick={searchClick}>
          Search
        </PokemonSearchButton>
      </PokemonInputContainer>
    </PokemonSearchContainer>
  );
};

export default Pokedex;