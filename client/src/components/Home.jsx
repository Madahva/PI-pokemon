import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllTypes } from "../redux/actions.js";

import css from "../assets/styles/Home.module.css";
import FilterBar from "./FilterBar.jsx"
import Cards from "./Cards.jsx";
import Pagination from "./Pagination.jsx";

const Home = () => {
  const pokemons = useSelector((state) => state.pokemons);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
  }, [dispatch]);

  return (
    <div className={css.home}>
      <FilterBar pokemons={pokemons} />
      <Cards pokemons={pokemons} />
      <Pagination pokemons={pokemons} />
    </div>
  );
};

export default Home;
