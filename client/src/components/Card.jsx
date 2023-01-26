const Card = (props) => {
  if (!props.types[0]) {
    props.types[0] = { name: "unknown" };
  }

  let typeID = 0;

  return (
    <div key={props.id}>
      <h3>{props.name}</h3>
      {props.types &&
        props.types.map((type) => {
          return (
            <div key={typeID++}>
              <p>{type.name}</p>
            </div>
          );
        })}
      <img src={props.image} alt="Bicho" />
    </div>
  );
};

export default Card;
