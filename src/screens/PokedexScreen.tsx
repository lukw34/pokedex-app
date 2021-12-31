import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GridList from '../components/GridList/GridList';
import { fetchPokemonListChunk, selectPokemonList } from '../slices/pokedex.slice';
import PokemonItem from '../components/PokemonItem/PokemonItem';

const Pokedex: React.FC = () => {
    const [{ url, hasMore }, setConfig] = useState({ url: 'https://pokeapi.co/api/v2/pokemon', hasMore: true });
    const dispatch = useDispatch();
    const list = useSelector(selectPokemonList);

    const loadMore = async () => {
        const result = await dispatch(fetchPokemonListChunk(url)) as any;
        setConfig({ url: result.next, hasMore: result.hasMore });
    };

    console.log(1);

    return (
        <GridList Item={PokemonItem} loadMore={loadMore} data={list} hasMore={hasMore} />
    );
};

export default Pokedex;