import { useSelector } from "react-redux";
import css from "../assets/styles/CardsContainer.module.css";
import Card from "./Card.jsx";
import image from "../assets/images/pato.gif"

const CardsContainer = ({ pokemons }) => {
  const pagination = useSelector((state) => state);
  const itemsToShow = pokemons.slice(
    (pagination.currentPage - 1) * pagination.itemsPerPage,
    pagination.currentPage * pagination.itemsPerPage
  );

  return (
    <div className={css["cards-container"]}>
      {!itemsToShow.length ? (
        <div className={css.noFound}>
          <h1>There are no pokemons to show.</h1>
          <img src={image} alt="Pokeball"/>
        </div>
      ) : (
        itemsToShow.map((pokemon) => (
          <div key={pokemon.id}>
            <Card
              name={pokemon.name}
              id={pokemon.id}
              types={pokemon.types}
              image={pokemon.image}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default CardsContainer;
