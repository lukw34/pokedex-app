import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyled = createGlobalStyle`
    body {
        overflow: hidden;
    }

    @font-face {
	    font-family: 'Pokemon GB';
	    src: url('https://cdn.rawgit.com/Superpencil/pokemon-font/d36892e5/fonts/pokemon-font.eot');
	    src: url('https://cdn.rawgit.com/Superpencil/pokemon-font/d36892e5/fonts/pokemon-font.woff');
	    font-weight: 400;
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