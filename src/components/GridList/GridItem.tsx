import { GridChildComponentProps } from 'react-window';
import PokemonItem from '../PokemonItem/PokemonItem';
import { GridListItem } from './styled';

const GridItem: React.FC<GridChildComponentProps> = ({ columnIndex, rowIndex, style, data, ...args }) => {
  const index = data.numberOfColumns * rowIndex + columnIndex;
  const itemProps = data.list[index];
  return (
    <GridListItem style={{
      ...style,
    }}>
      <PokemonItem {...itemProps} />
    </GridListItem>
  );
};

export default GridItem;