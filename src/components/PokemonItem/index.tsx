import React from 'react';
import { PokemonDetails} from "../../types/pokemon";
import PokemonTypes from "../PokemonTypes";
import PokemonStatsComp from "../PokemonStats";
import { PokemonItemContainer, PokemonItemName, PokemonItemNoData, PokemonItemData } from './styled';

const PokemonItem: React.FC<{
    name: string,
    details: PokemonDetails,
    isData: boolean,
    itemNumber: number
}> = ({ name, itemNumber, details: {
    weight,
    baseExperience,
    image,
    types = [],
    stats = []
}, isData }) => (
        <PokemonItemContainer>
            <PokemonItemName>{name}</PokemonItemName>
            <PokemonItemNoData isData={isData}>#{itemNumber}</PokemonItemNoData>
            <PokemonItemData>
                Image with base experience and weight
                <PokemonTypes id={name} types={types} />
                <div>Weight: {weight}</div>
                <PokemonStatsComp id={name} stats={stats}/>
            </PokemonItemData>
        </PokemonItemContainer>
    );


export default PokemonItem;