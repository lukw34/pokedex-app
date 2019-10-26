import styled from 'styled-components';

export const PokemonSearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
`;

export const PokemonInputContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PokemonInput = styled.input`
    flex: 1;
    width: 300px;
    height: 27px;
    border: 1px solid #c11616;
    text-align: center;
`;

export const PokemonSearchButton = styled.button`
    padding: 5px 20px;
    background: #c11616;
    border: 1px solid #c11616;
    color: white;
    font-weight: bold;
    font-size: 1rem;
`;

export const PokemonSearchPokemonItem = styled.div`
    height: 350px;
    margin: 15px;
    width: 250px;
    box-shadow: -5px 5px 8px 1px rgba(0,0,0,0.4);
    display: flex;
    flex-direction: row;
 `;
