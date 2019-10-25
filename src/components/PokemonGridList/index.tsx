import React from 'react';
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';
import {PokemonList, Pokemon} from "../types/pokemon";

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
        >
            <div>
            {data.map(({ name }) => (
                <div>
                    {name}
                </div>
            ))}
            </div>
        </InfiniteScroll>
    );
};

export default PokemonGridList;