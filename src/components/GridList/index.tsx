import React from 'react';
// @ts-ignore
import InfiniteScroll from 'react-infinite-scroller';
import {PokemonDetails} from "../../types/pokemon";

import { PokemonGridListStyled, GridListItem} from './styled'

interface  GridListItem  {
    name: string,
    details: PokemonDetails
}

interface PokemonGridListItemComp extends PokemonDetails{
    isData: boolean,
    itemNumber: number
}

interface GridListProps {
    data: Array<GridListItem>,
    Item: React.FC<PokemonGridListItemComp>,
    loadMore: Function,
    hasMore: boolean
}

const GridList: React.FC<GridListProps> = ({loadMore, hasMore,  data, Item }) => {
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
            {data.map(({ details, ...props}, index) => (
                <GridListItem key={`${props.name}-${index + 1}`}>
                    <Item itemNumber={index + 1} isData={details !== null} {...props} {...(details || {})}  />
                </GridListItem>
            ))}
            </PokemonGridListStyled>
        </InfiniteScroll>
    );
};

export default GridList;