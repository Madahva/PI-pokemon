import Loading from "./Loading.jsx";
import css from "../assets/styles/Details.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByID } from "../redux/actions.js";
import StatisticGraph from "./StatisticGraph";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonByID(id));
    window.scrollTo({ top: 0 });
  }, [dispatch, id]);

  if (pokemon.type && !pokemon.type[0]) {
    pokemon.type[0] = { name: "unknown" };
  }

  let typeID = 0;

  return (
    <>
      {pokemon.length < 1 ? (
        <Loading />
      ) : (
        <div className={css.detailsContainer}>
          <div className={css.details}>
            <h1>{pokemon.name}</h1>

            <div className={css.types}>
              {pokemon.type &&
                pokemon.type.map((type) => {
                  return (
                    <div key={typeID++}>
                      <p>{type.name}</p>
                    </div>
                  );
                })}
            </div>

            <img src={pokemon.image} alt="Pokemon" />

            <p className={css.id}>ID: {pokemon.id}</p>
          </div>
          <div className={css.stats}>
            <StatisticGraph pokemon={pokemon} />
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
