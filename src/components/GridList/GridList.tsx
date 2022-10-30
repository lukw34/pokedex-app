import React from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';

import { FixedSizeGrid } from 'react-window';
import { PokemonList } from '../../types/pokemon';
import GridItem from './GridItem';

interface GridListProps {
    data: PokemonList,
    itemCount: number
}

const GridList: React.FC<GridListProps> = ({ data, itemCount }) => {
  return (
    <AutoSizer
      style={{
        width: '100vw'
      }}
    >
      {({ width, height }) => {
        const numberOfColumns = Math.floor(width / 400);
        return (
          <FixedSizeGrid
            
            height={height}
            width={width}
            rowCount={Math.floor(itemCount/numberOfColumns)}
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
            
  );
};

export default GridList;