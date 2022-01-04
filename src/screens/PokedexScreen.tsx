import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GridList from '../components/GridList/GridList';
import { fetchPokemonListChunk, selectPokemonCount, selectPokemonList } from '../slices/pokedex.slice';
import PokemonItem from '../components/PokemonItem/PokemonItem';

const Pokedex: React.FC = () => {
    const [{ url, hasMore }, setConfig] = useState({ url: 'https://pokeapi.co/api/v2/pokemon?limit=15', hasMore: true });
    const dispatch = useDispatch();
    const list = useSelector(selectPokemonList);
    const itemCount = useSelector(selectPokemonCount);

    const loadMore = async () => {
        //TODO ogarnac scrolowanie do konretnego miejsca
        const result = await dispatch(fetchPokemonListChunk(url)) as any;
        setConfig({ url: result.next, hasMore: result.hasMore });
    };

    return (
        <GridList Item={PokemonItem} loadMore={loadMore} data={list} hasMore={hasMore} itemCount={itemCount}/>
    );
};

export default Pokedex;