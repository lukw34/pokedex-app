import React from 'react';
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';
import {PokemonList, Pokemon} from "../types/pokemon";

import { PokemonGridListStyled, PokemonGridListItem} from './styled'

interface GridListProps {
    data: PokemonList,
    Item: React.FC<Pokemon>,
    loadMore: Function,
    hasMore: boolean
}

const GridList: React.FC<GridListProps> = ({loadMore, hasMore,  data, Item }) => {
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            useWindow={false}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            <PokemonGridListStyled>
            {data.map(data => (
                <PokemonGridListItem key={data.name}>
                    <Item {...data} />
                </PokemonGridListItem>
            ))}
            </PokemonGridListStyled>
        </InfiniteScroll>
    );
};

export default GridList;