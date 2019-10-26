import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GridList from "../GridList";
import {selectPokemonListData} from "../../selectors/pokedex.selector";
import {loadMore} from "../../actions/pokedex.actions";
import PokemonItem from "../PokemonItem";

const Pokedex: React.FC = () => {
    const dispatch = useDispatch();
    const { list, hasMore } = useSelector(selectPokemonListData);

    return (
        <GridList Item={PokemonItem} hasMore={hasMore} data={list} loadMore={() => dispatch(loadMore())}/>
    );
};

export default Pokedex;