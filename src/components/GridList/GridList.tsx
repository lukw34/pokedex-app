import { EntityId } from '@reduxjs/toolkit';
import React from 'react';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';

import { FixedSizeGrid } from 'react-window';
import GridItem from './GridItem';

interface GridListItemComp {
    itemId: EntityId,
    itemNumber: number
}

interface GridListProps {
    data: EntityId[],
    Item: React.FC<GridListItemComp>,
    loadMore: (startIndex: number, stopIndex: number) => Promise<void>,
    hasMore: boolean,
    itemCount: number
}

const GridList: React.FC<GridListProps> = ({ loadMore, hasMore, data, itemCount }) => {
    const isItemLoaded = (index: number) => !hasMore || index < data.length;
    return (
        <InfiniteLoader
            itemCount={itemCount}
            loadMoreItems={loadMore}
            isItemLoaded={isItemLoaded}
            threshold={1}
        >
            {({ onItemsRendered, ref }) => (
                <AutoSizer
                    style={{
                        width: '100vw'
                    }}
                >
                        {({ width, height }) => {
                            const numberOfColumns = Math.floor(width / 400);
                            return (
                                <FixedSizeGrid
                                    ref={ref}
                                    onItemsRendered={gridProps => {
                                        onItemsRendered({
                                        overscanStartIndex:
                                            gridProps.overscanRowStartIndex * numberOfColumns,
                                        overscanStopIndex: gridProps.overscanRowStopIndex * numberOfColumns,
                                        visibleStartIndex: gridProps.visibleRowStartIndex * numberOfColumns,
                                        visibleStopIndex: gridProps.visibleRowStopIndex * numberOfColumns
                                        });
                                    }}
                                    height={height}
                                    width={width}
                                    rowCount={3000}
                                    rowHeight={400}
                                    columnWidth={400}
                                    columnCount={numberOfColumns}
                                    itemData={{
                                        numberOfColumns,
                                        list: data
                                    }}
                                >
                                    {GridItem}
                                </FixedSizeGrid>
                        );
                    }}
                    </AutoSizer>
                )}
        </InfiniteLoader>
    );
};

export default GridList;