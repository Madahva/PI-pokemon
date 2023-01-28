import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByID } from "../redux/actions.js";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    dispatch(getPokemonByID(id));
  }, [dispatch, id]);

  if (pokemon.type && !pokemon.type[0]) {
    pokemon.type[0] = { name: "unknown" };
  }

  let typeID = 0;


  return (
    <div>
      <h1>{pokemon.name}</h1>

      {pokemon.type &&
        pokemon.type.map((type) => {
          return (
            <div key={typeID++}>
              <p>{type.name}</p>
            </div>
          );
        })}

      <img src={pokemon.image} alt="Pokemon"/>
     
      <p>{pokemon.id}</p>

      <div>
        <p>{pokemon.hp}</p>
        <p>{pokemon.attack}</p>
        <p>{pokemon.defense}</p>
        <p>{pokemon.speed}</p>
      </div>

      <div>
        <p>{pokemon.height}</p>
        <p>{pokemon.weight}</p>
      </div>
    </div>
  );
};

export default Details;
