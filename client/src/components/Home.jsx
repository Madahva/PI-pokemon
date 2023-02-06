import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getAllTypes, emtyDetails } from "../redux/actions.js";
import css from "../assets/styles/Home.module.css";
import Loading from "./Loading.jsx";
import FilterBar from "./FilterBar.jsx";
import Pagination from "./Pagination.jsx";
import CardsContainer from "./CardsContainer.jsx";

const Home = () => {
  const pokemons = useSelector((state) => state.pokemons);
  const pokemonsBackUp = useSelector((state) => state.pokemonsBackUp);

  const dispatch = useDispatch();

  useEffect(() => {
    if (pokemons.length === 0) {
    dispatch(getAllPokemons());
    dispatch(getAllTypes());
    dispatch(emtyDetails());
    }
  }, [dispatch, pokemons]);

  return (
    <>
      {!pokemonsBackUp.length ? (
        <Loading />
      ) : (
        <div className={css.home}>
          <FilterBar pokemons={pokemons} />
          <CardsContainer pokemons={pokemons} />
          <Pagination pokemons={pokemons} />
        </div>
      )}
    </>
  );
};

export default Home;
