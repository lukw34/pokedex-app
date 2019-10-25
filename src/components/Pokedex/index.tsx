import React, {useState} from 'react';
import {PokemonList, PokemonResponseData} from "../types/pokemon";

import {fetchListOfPokemons} from "../../pokeapi";
import GridList from "../GridList";
import PokemonItem from "../PokemonItem";

interface PokedexState {
    data: PokemonList,
    hasMore: boolean,
    next?: string
}

const Pokedex: React.FC = () => {
    const [pokedexData, setPokedexData] = useState<PokedexState>({
        data: [],
        hasMore: true,
        next: ''
    });

    const loadMore = async () => {
        const {next, results}: PokemonResponseData = await fetchListOfPokemons(pokedexData.next);
        setPokedexData({
            hasMore: Boolean(next),
            data: [...pokedexData.data, ...results],
            next
        })
    };

    return (
        <GridList Item={PokemonItem} {...pokedexData} loadMore={loadMore}/>
    );
};

export default Pokedex;