import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllTypes } from "../redux/actions.js";

import Cards from "./Cards.jsx";
import Pagination from "./Pagination.jsx";

const Home = () => {
  const pokemons = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  //Cargamos el Estado de Redux
  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, [dispatch]);

  return (
    <div>
      <Cards pokemons={pokemons} />
      <Pagination pokemons={pokemons} />
    </div>
  );
};

export default Home;
