import { useSelector } from "react-redux";
import css from "../assets/styles/CardsContainer.module.css"
import Card from "./Card.jsx";

const CardsContainer = ({ pokemons }) => {
  const pagination = useSelector((state) => state);
  const itemsToShow = pokemons.slice(
    (pagination.currentPage - 1) * pagination.itemsPerPage,
    pagination.currentPage * pagination.itemsPerPage
  );

  return (
    <div className={css["cards-container"]}>
      {itemsToShow.map((pokemon) => (
        <div key={pokemon.id}>
          <Card
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.types}
            image={pokemon.image}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
