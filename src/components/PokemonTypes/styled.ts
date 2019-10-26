import styled from 'styled-components';


const typeColors: {
    [key: string]: string
} = {
    grass: 'green',
    poison: 'purple',
    fire: 'orange',
    water: 'blue'
};

export const PokemonTypesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const PokemonTypeStyled = styled.div<{ type: string }>`
    padding: 2px 10px;
    font-size: 0.9rem;
    border-radius: 2px 6px;
    margin: 5px;
    color: white;
    background: ${props => typeColors[props.type]};
`;
