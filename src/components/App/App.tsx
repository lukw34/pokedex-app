import React from 'react';
import { Routes, Route, Navigate }  from 'react-router-dom';

import Pokedex from "../../screens/PokedexScreen";
import PokemonSearch from '../../screens/PokemonSearch';

import {
    AppStyledBackground,
    AppStyled,
    AppStyledContent,
    GlobalStyled
} from './styled';
import Menu from "../Menu";
import AppHeader from "../AppHeader";

const App: React.FC = () => {
    return (
        <AppStyled>
            <GlobalStyled />
            <Menu/>
            <AppHeader/>
            <AppStyledBackground />
            <AppStyledContent>
                <Routes>
                    <Route element={<Pokedex />}  path="/pokemon" />
                    <Route element={<PokemonSearch />} path="/pokemon/search" />
                    <Route element={<Navigate to={"/pokemon"}/>} path="*" />
                </Routes>
            </AppStyledContent>
        </AppStyled>
    );
};

export default App;
