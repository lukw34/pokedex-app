import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuIconStyled = styled.img`
    width: 45px;
    height: 45px;
`;

export const MenuContainer = styled.div`
    z-index: 15;
    position: absolute;
    top: 50px;
    left: 0;
    background: #f3f1f1;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 0 18px rgba(0, 0, 0, 0.26);
`;


export const MenuItemLink = styled(Link)`
    border-bottom: 1px solid grey;
    width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background .4s;
`;

export const MenuItemLinkContainer = styled.div<{ isActiveItem: boolean }>`
    background: ${props => props.isActiveItem ? '#d4242487' : '#f3f1f1'};
`;