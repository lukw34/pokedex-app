import styled from 'styled-components';

export const PokemonGridListStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`;

export const PokemonGridListItem = styled.div`
    height: 350px;
    margin: 15px;
    min-width: 250px;
    flex: 0 0 20%;
    box-shadow: -5px 5px 8px 1px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: row;
`;