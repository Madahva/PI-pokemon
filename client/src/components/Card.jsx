const Card = (props) => {
if (!props.types[0]) {
  props.types[0] = {"name": "unknown"}
}

  return (
    <div key={props.id}>
      <h3>{props.name}</h3>
      { props.types && props.types.map((type) => {
        return ( <p>{type.name}</p> )
      }) }
      <img src={ props.image } alt="Bicho"/>
    </div>
  );
};

export default Card;
