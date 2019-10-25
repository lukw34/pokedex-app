import React from 'react';

import Pokedex from "../Pokedex";

import {
    AppStyledBackground,
    AppStyled,
    AppStyledContent,
    GlobalStyled
} from './styled';

const App: React.FC = () => {
    return (
        <AppStyled>
            <GlobalStyled />
            <AppStyledBackground />
            <AppStyledContent>
                <Pokedex/>
            </AppStyledContent>
        </AppStyled>
    );
};

export default App;
