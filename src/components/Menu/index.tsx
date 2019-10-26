import React from "react";
import {useLocation} from 'react-router-dom';

import pokemonIcon from '../../assets/pokemon-icon.jpg';
import searchIcon from '../../assets/search-icon.png';

import {MenuContainer, MenuItemLink, MenuIconStyled, MenuItemLinkContainer} from './styled';

const Menu = () => {
    const {pathname} = useLocation();
    return (
        <MenuContainer>
            <MenuItemLinkContainer isActiveItem={pathname === '/pokemon'}>
                <MenuItemLink to="/pokemon">
                    <MenuIconStyled src={pokemonIcon}/>
                </MenuItemLink>
            </MenuItemLinkContainer>
            <MenuItemLinkContainer isActiveItem={pathname === '/pokemon/search'}>
                <MenuItemLink to="/pokemon/search">
                    <MenuIconStyled src={searchIcon}/>
                </MenuItemLink>
            </MenuItemLinkContainer>
        </MenuContainer>
    )
};

export default Menu;