import styled from 'styled-components';

export const AppHeaderStyled = styled.div`
    position: absolute;
    z-index: 15;
    height: 50px;
    top: 0;
    left: 0;
    width: 100vw;
    background: #c11616;
    justify-content: center;
    display: flex;
    align-items: center
`;

export const AppHeaderTitle = styled.div`
    flex: 1;
    font-weight: bold;
    color: white;
    font-size: 2rem;
    text-align: center;
`;

export const AppLogo = styled.img`
    width: 45px;
    height: 45px;
    margin: 5px;
`;