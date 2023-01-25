export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_ALL_TYPES = "GET_ALL_TYPES";

export const getAllPokemons = () => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3001/pokemon");
      const data = await response.json();
      console.log(data);
      dispatch({
        type: GET_ALL_POKEMONS,
        payload: data,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};

export const getAllTypes = () => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3001/type");
      const data = await response.json();
      console.log(data);
      dispatch({
        type: GET_ALL_TYPES,
        payload: data,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};
