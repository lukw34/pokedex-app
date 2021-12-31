// @ts-ignore
import styled from 'styled-components';

export const PokemonItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
`;

export const PokemonItemName = styled.div`
    text-transform: uppercase;
    background: #676666;
    text-align: center;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;`;

const PokemonItemContent = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100% - 28px);
    top: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PokemonItemNoData = styled(PokemonItemContent)<{ isData?: boolean }>`
    transition: transform .6s;
    background: darkgrey;
    transform-origin: right;
    transform: scaleX(${props => (props.isData ? 0 : 1)});
    z-index: 12;
    font-size: 6rem;
    color: white;      
`;

export const PokemonItemData = styled(PokemonItemContent)`
    z-index: 10;
    flex-direction: column;
    width: 100%;
`;

export const PokemonImage = styled.img`
    height: 100px;
    width: 100px;
`;

export const PokemonDataStyled = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const PokemonDataItemStyled = styled.div<{ title: string}>`
    &:after {
        content: "${props => props.title}";
        font-size: 0.8rem;
        color: #868585;
    }
    flex: 1;
    flex-direction: column;
    justify-content: center;
    display: flex;
    width: 100%;
    align-items: center;
    font-weight: bold;
    font-size: 1.1rem;
`;

export const PokemonExperienceStyled = styled.div`
    margin: 3px;
    flex-direction: column;
    justify-content: center;
    display: flex;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: #04aae2;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    font-size: 1.2rem;
    padding: 10px;
`;

const typeColors: {
    [key: string]: string
} = {
    grass: 'green',
    poison: 'purple',
    fire: 'orange',
    water: 'blue',
    normal: 'grey',
    fairy: 'lightcoral',
    psychic: 'red',
    dragon: 'dodgerblue',
    fighting: 'brown',
    bug: '#28de00',
    ghost: '#272e69',
    electric: '#d0d007',
    ground: '#d06e00',
    rock: 'darkgrey',
    flying: '#325569',
    ice: 'darkturquoise',
    dark: 'black',
    steel: '#4a4d59'
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
    font-weight: bold;
    background: ${props => typeColors[props.type]};
`;
