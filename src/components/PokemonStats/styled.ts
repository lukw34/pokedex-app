import styled from 'styled-components';

export const PokemonStatsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;

export const PokemonStatsStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    border-top: 2px #333333 solid;
 `;

export const PokemonStatLabel = styled.div`
  padding: 1px;
  flex: 0 0 75%
  text-transform: uppercase;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
`;

export const PokemonStatValue = styled.div`
  flex: 1;
  padding: 1px;
  background: #2de62e;
  font-weight: bold;
  text-align: center;
`;
