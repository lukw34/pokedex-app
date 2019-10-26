import React from 'react';
import { Switch, Route, Redirect }  from 'react-router-dom';

import Pokedex from "../../screens/Pokedex";
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
                <Switch>
                    <Route exact  path="/pokemon">
                        <Pokedex />
                    </Route>
                    <Route title="Pokemon Search" exact path="/pokemon/search">
                        <PokemonSearch />
                    </Route>
                    <Redirect to="/pokemon" from="*" />
                </Switch>
            </AppStyledContent>
        </AppStyled>
    );
};

export default App;
