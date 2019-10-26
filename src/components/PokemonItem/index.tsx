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

interface PokemonItemProps extends PokemonDetails {
    name: string,
    isData: boolean,
    itemNumber: number
}

const PokemonItem: React.FC<PokemonItemProps> = ({name, itemNumber, weight, height, baseExperience, image, stats = [], types = [], isData}) => (
    <PokemonItemContainer>
        <PokemonItemName>{name}</PokemonItemName>
        <PokemonItemNoData isData={isData}>#{itemNumber}</PokemonItemNoData>
        <PokemonItemData>
            <PokemonImage src={image}/>
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


export default React.memo(PokemonItem);