import { GridChildComponentProps } from 'react-window';
import PokemonItem from '../PokemonItem/PokemonItem';
import { GridListItem } from './styled';

const GridItem: React.FC<GridChildComponentProps> = ({ columnIndex, rowIndex, style, data }) => {
    const index = data.numberOfColumns * rowIndex + columnIndex;
    const itemId = data.list[index];

    return (
        <GridListItem style={{
            ...style,
        }}>
            <PokemonItem itemNumber={index + 1} itemId={itemId} />
        </GridListItem>
    );
};

export default GridItem;