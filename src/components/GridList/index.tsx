import React from 'react';
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';
import {PokemonDetails} from "../../types/pokemon";

import { PokemonGridListStyled, PokemonGridListItem} from './styled'

interface  GridListItem  {
    name: string,
    details: PokemonDetails
}

interface GridListItemComp extends GridListItem {
    isData: boolean,
    itemNumber: number
}

interface GridListProps {
    data: Array<GridListItem>,
    Item: React.FC<GridListItemComp>,
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
            {data.map((data, index) => (
                <PokemonGridListItem key={data.name}>
                    <Item itemNumber={index + 1} isData={data.details !== null} {...data} details={data.details || {}} />
                </PokemonGridListItem>
            ))}
            </PokemonGridListStyled>
        </InfiniteScroll>
    );
};

export default GridList;