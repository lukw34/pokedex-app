import { EntityId } from '@reduxjs/toolkit';
import React from 'react';
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';

import { PokemonGridListStyled, GridListItem } from './styled';

interface GridListItemComp {
    itemId: EntityId,
    itemNumber: number
}

interface GridListProps {
    data: EntityId[],
    Item: React.FC<GridListItemComp>,
    loadMore: Function,
    hasMore: boolean
}

const GridList: React.FC<GridListProps> = ({ loadMore, hasMore, data, Item }) => {
    return (
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={hasMore}
            threshold={750}
            useWindow={false}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            <PokemonGridListStyled>
            {data.map(( id, index) => (
                <GridListItem key={`${id}-${index + 1}`}>
                    <Item itemNumber={index + 1} itemId={id} />
                </GridListItem>
            ))}
            </PokemonGridListStyled>
        </InfiniteScroll>
    );
};

export default GridList;