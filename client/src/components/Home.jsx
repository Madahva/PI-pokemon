import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllTypes } from "../redux/actions.js";

import Cards from "./Cards.jsx"

const Home = () => {
  const pokemonsGlobal = useSelector((state) => state.pokemons);
  const [pokemons, setPokemons] = useState([]);

  const dispatch = useDispatch();

  //Cargamos el estado global con la info de la API
  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, [dispatch]);

  //Cargamos el estado de Home con el contenido del estado global
  useEffect(() => {
    setPokemons([...pokemonsGlobal]);
  }, [pokemonsGlobal]);

  return (
    <div>
      <Cards pokemons = {pokemons} />
    </div>
  );
};

export default Home;
