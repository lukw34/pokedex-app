import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyled = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

export const AppStyledBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(white, #ababab);
`;

export const AppStyled = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
`;

export const AppStyledContent = styled.div`
    z-index: 10;
    position: absolute;
    top: 50px;
    height: 100%;
    overflow: auto;
    width: 100%;
    display: flex;
    justify-content: center;
`;