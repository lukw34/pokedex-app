import React from 'react';
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';
import {PokemonList, Pokemon} from "../types/pokemon";

import { PokemonGridListStyled, PokemonGridListItem} from './styled'

interface GridListProps {
    data: PokemonList,
    renderItem?: (data: Pokemon) => React.Component,
    loadMore: Function,
    hasMore: boolean
}

const PokemonGridList: React.FC<GridListProps> = ({loadMore, hasMore,  data, renderItem}) => {
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            useWindow={false}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            <PokemonGridListStyled>
            {data.map(({ name }) => (
                <PokemonGridListItem key={name}>
                    {name}
                </PokemonGridListItem>
            ))}
            </PokemonGridListStyled>
        </InfiniteScroll>
    );
};

export default PokemonGridList;