// @ts-ignore
import styled, { keyframes } from 'styled-components';
import { PokemonType, PokemonTypes } from '../../types/pokemon';

const typeColors: {
    [key in keyof typeof PokemonType]: {
        light: string,
        dark :string
    }
} = {
  grass: {
    light: '#2ECC71',
    dark: '#239B56'
  },
  poison: {
    light: '#6C3483',
    dark: '#4A235A'
  },
  fire: {
    light: '#F0B27A',
    dark: '#E67E22'
  },
  water: {
    dark: '#3498DB',
    light: '#85C1E9'
  },
  normal: {
    dark: '#B2BABB',
    light: '#E5E8E8'
  },
  fairy: {
    dark: '#F1948A',
    light: '#FADBD8'
  },
  psychic: {
    dark: '#FF0000',
    light: '#E57373 '
  },
  dragon: {
    dark: '#01579B',
    light: '#1976D2'
  },
  fighting: {
    dark: '#B71C1C',
    light: '#D32F2F'
  },
  bug: {
    dark: '#28DE00',
    light: '#77FF59'
  },
  ghost: {
    dark: '#272e69',
    light: '#3F446E'
  },
  electric: {
    dark: '#d0d007',
    light: '#E5E555'
  },
  ground: {
    dark: '#873600',
    light: '#BA4A00'
  },
  rock: {
    dark: '#424242',
    light:'#707B7C'
  },
  flying: {
    dark: '#325569',
    light: '#638699'
  },
  ice: {
    dark: '#00CED1',
    light: '#72D2D3'
  },
  dark: {
    dark: '#000000',
    light: '#292929'
  },
  steel: {
    dark: '#4a4d59',
    light: '#74788A'
  }
};

export const PokemonItemContainer = styled.div<{displayDetails: boolean}>`
    height: 300px;
    width: 300px;
    margin: 15px;
    display: flex;
    perspective: 1000px;
    ${ props => props.displayDetails && 'transform: rotateY(180deg)'}
`;

export const PokemonItemInnerContainer = styled.div<{displayDetails: boolean}>`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    ${props => props.displayDetails && 'transform: rotateY(180deg)'}
`;

const PokeballShape = styled.div`
    border: black 2px solid;
    border-radius: 151px;
    width: 300px;
    height: 300px;
    background: #fff;
    backface-visibility: hidden;
    position: absolute;
`;

export const PokeballItemContainer = styled(PokeballShape)`
    &:after {
        content: " ";
        background: #000;
        height: 10px;
        width: 100%;
        position: absolute;
        top: calc(50% - 5px);
        left: 0;
    }

    &:before {
        border-top-left-radius: 187px;
        border-top-right-radius: 187px;
        content: " ";
        background: red;
        left: 0;
        height: 50%;
        width: 100%;
        position: absolute;
    }
`;

const bleepAnimation = keyframes`
    0% { opacity: 0.8}
    50% { opacity: 0.2 }
    100% { opacity: 0.8 }
`;

export const PokeballCenter = styled.div`
    width: 70px;
    height: 70px;
    border: black 10px solid;
    top: calc(50% - 45px);
    right: calc(50% - 45px);
    background-color: white;
    position: absolute;
    border-radius: 45px;
    z-index: 1;

    &:after {
        content: " ";
        background-color: lightgray;
        width: 40px;
        height: 40px;
        position: absolute;
        top: calc(50% - 20px);
        right: calc(50% - 20px);
        border-radius: 20px;
    }

    &:before {
        content: " ";
        background-color: red;
        width: 20px;
        height: 20px;
        opacity: 0.8;
        position: absolute;
        top: calc(50% - 10px);
        right: calc(50% - 10px);
        border-radius: 10px;
        z-index: 1;
        animation-name: ${bleepAnimation};
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }
`;

export const PokemonItemData = styled(PokeballShape)<{ types: PokemonTypes}>`
    transform: rotateY(180deg);
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 10px solid #b9b5b5;
    border-radius: 170px;
    background-image: linear-gradient(to bottom right ${({ types }) => types.map(type => `, ${typeColors[type].dark}, ${typeColors[type].light}`)});
    flex-direction: column;
`;

export const PokemonImage = styled.img<{pokemonNumber: number}>`
    height: 150px;
    width: 150px;
    &:before {
        content: '#${({ pokemonNumber }) => pokemonNumber}'
    }
`;

export const PokemonIdBadge = styled.div`
    font-family: "Pokemon GB",monospace;
    color: black;
    font-size: 20px;
    font-weight: 1000;
    transition: transform .2s;
    transform: rotateY(180deg);
`;

export const PokemonDetailsName = styled.div`
    font-family: "Pokemon GB",monospace;
    font-weight: 1000;
    font-size: 15px;
    transform: rotateY(180deg);
    color: black;
    text-transform: uppercase;
    padding: 15px;
    text-align: center;
    max-width: 100%;
`;

//////// To refactor

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

export const PokemonTypesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const PokemonTypeStyled = styled.div<{ type: PokemonType }>`
    padding: 2px 10px;
    font-size: 0.9rem;
    border-radius: 2px 6px;
    margin: 5px;
    color: white;
    font-weight: bold;
    background: ${props => typeColors[props.type]};
`;
