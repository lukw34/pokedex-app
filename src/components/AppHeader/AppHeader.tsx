import React from 'react';

import logo from '../../assets/app-icon.png';
import { AppHeaderStyled, AppHeaderTitle, AppLogo } from './styled';

const AppHeader = () => (
  <AppHeaderStyled>
    <AppLogo src={logo}/>
    <AppHeaderTitle>
      Pokedex
    </AppHeaderTitle>
    <AppLogo src={logo}/>
  </AppHeaderStyled>
);

export default AppHeader;