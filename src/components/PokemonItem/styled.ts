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
    background: lightgrey;
    height: 28px;
    padding-top: 5px;
    text-align: center;
    font-weight: bold;    
`;

const PokemonItemContent = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100% - 33px);
    top: 33px;
`;

export const PokemonItemNoData = styled(PokemonItemContent)<{ isData?: boolean }>`
    transition: transform .6s;
    background: darkgrey;
    transform-origin: right;
    transform: scaleX(${props => (props.isData ? 0 : 1)});
    z-index: 12;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    color: white;      
`;

export const PokemonItemData = styled(PokemonItemContent)`
    z-index: 10;
`;