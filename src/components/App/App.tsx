import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Pokedex from '../../screens/PokedexScreen';
import PokemonSearch from '../../screens/PokemonSearch/PokemonSearch';

import {
  AppStyledBackground,
  AppStyled,
  AppStyledContent,
  GlobalStyled
} from './styled';
import AppHeader from '../AppHeader/AppHeader';

const App: React.FC = () => {
  return (
    <AppStyled>
      <GlobalStyled />
      <AppHeader/>
      <AppStyledBackground />
      <AppStyledContent>
        <Routes>
          <Route element={<Pokedex />} path="/pokemon" />
          <Route element={<PokemonSearch />} path="/pokemon/search" />
          <Route element={<Navigate to={'/pokemon'}/>} path="/:pokedexNumber" />
        </Routes>
      </AppStyledContent>
    </AppStyled>
  );
};

export default App;
