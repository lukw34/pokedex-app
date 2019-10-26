import React from 'react';
import {PokemonDetails} from "../../types/pokemon";
import PokemonTypes from "../PokemonTypes";
import PokemonStatsComp from "../PokemonStats";
import {
    PokemonItemContainer,
    PokemonItemName,
    PokemonItemNoData,
    PokemonItemData,
    PokemonImage,
    PokemonDataStyled,
    PokemonDataItemStyled,
    PokemonExperienceStyled
} from './styled';

const PokemonItem: React.FC<{
    name: string,
    details: PokemonDetails,
    isData: boolean,
    itemNumber: number
}> = ({
          name, itemNumber, details: {
        weight,
        height,
        baseExperience,
        image,
        types = [],
        stats = []
    }, isData
      }) => (
    <PokemonItemContainer>
        <PokemonItemName>{name}</PokemonItemName>
        <PokemonItemNoData isData={isData}>#{itemNumber}</PokemonItemNoData>
        <PokemonItemData>
            <PokemonImage src={image} />
            <PokemonTypes id={name} types={types}/>
            <PokemonDataStyled>
                <PokemonDataItemStyled title="Weight">{weight}</PokemonDataItemStyled>
                <PokemonExperienceStyled>{baseExperience}</PokemonExperienceStyled>
                <PokemonDataItemStyled title="Height">{height}</PokemonDataItemStyled>
            </PokemonDataStyled>
            <PokemonStatsComp id={name} stats={stats}/>
        </PokemonItemData>
    </PokemonItemContainer>
);


export default PokemonItem;