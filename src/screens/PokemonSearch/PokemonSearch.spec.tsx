import React from 'react';
import { shallow } from 'enzyme';
import ReactRedux from 'react-redux';

import PokemonItemContainer from "../../components/PokemonItemContainer";
import PokemonItem from '../../components/PokemonItem';
import PokemoonSearch from '.';
import { PokemonInput, PokemonSearchButton } from './styled';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));
const mockedReactRedux = ReactRedux as jest.Mocked<typeof ReactRedux>;

describe('<PokemonSearch />', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render render empty pokemon item on init', () => {
        const comp = shallow(<PokemoonSearch />);
        mockedReactRedux.useDispatch.mockReturnValueOnce(jest.fn());
        const { name } = comp.find(PokemonItemContainer).shallow().props();
        expect(name).toBe('???');
        expect(comp).toMatchSnapshot();
    });

    it('should render pokemon item if pokemon exist', () => {
        mockedReactRedux.useDispatch.mockReturnValueOnce(jest.fn());
        mockedReactRedux.useSelector.mockReturnValue({
            name: 'charmander',
            weight: 64,
            height: 45,
            image: 'image',
            types: ['fire'],
            stats: [],
            baseExperience: 20
        });
        const comp = shallow(<PokemoonSearch />);
        const itemContainer = comp.find(PokemonItemContainer).shallow();
        expect(itemContainer.props().name).toBe('charmander');
        expect(comp).toMatchSnapshot();
        expect(itemContainer.find(PokemonItem).shallow()).toMatchSnapshot();
    });

    it('handle input and trigger action on search click', () => {
        const dispatch = jest.fn();
        mockedReactRedux.useDispatch.mockReturnValueOnce(dispatch);
        const event = {target: { value: "1" }};
        const comp = shallow(<PokemoonSearch />);
        comp.find(PokemonInput).simulate('change', event);
        comp.find(PokemonSearchButton).simulate('click');
        expect(dispatch).toBeCalledTimes(1);
    });
});