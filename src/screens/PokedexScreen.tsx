import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GridList from "../components/GridList";
import { selectPokemonListData } from "../selectors/pokedex.selector";
import { loadMore } from "../slices/pokedex.slice";
import PokemonItem from "../components/PokemonItem";

const Pokedex: React.FC = () => {
    const dispatch = useDispatch();
    const { list, hasMore } = useSelector(selectPokemonListData);

    return (
        <GridList Item={PokemonItem} loadMore={() => dispatch(loadMore())} data={list} hasMore={hasMore} />
    );
};

export default Pokedex;