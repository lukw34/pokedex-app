import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GridList from '../components/GridList/GridList';
import { initPokedex, selectPokemonCount, selectPokemonList } from '../slices/pokedex.slice';
import { AppDispatch } from '../store';

const Pokedex: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const list = useSelector(selectPokemonList);
  const itemCount = useSelector(selectPokemonCount);

  useEffect(() => {
    dispatch(initPokedex());
  }, [dispatch]);

  return (
    <GridList data={list} itemCount={itemCount}/>
  );
};

export default Pokedex;