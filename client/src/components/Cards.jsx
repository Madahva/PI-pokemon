import Card from "./Card.jsx";

const Cards = (props) => {
  const { pokemons } = props;
  let id = 1;
  return (
    <div>
      {pokemons.map((pokemon) => (
        <Card
          name={pokemon.name}
          id={pokemon.id}
          key={id++}
          types={pokemon.types}
          image={pokemon.image}
        />
      ))}
    </div>
  );
};

export default Cards;
