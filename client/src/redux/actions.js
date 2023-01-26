export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_ALL_TYPES = "GET_ALL_TYPES";

export const PREV_PAGE = "PREV_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const GO_TO_PAGE = "GO_TO_PAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";

export const SEARCH_BY_NAME = "SEARCH_BY_NAME";

export const getAllPokemons = () => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3001/pokemon");
      const data = await response.json();
      console.log(data)
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
      dispatch({
        type: GET_ALL_TYPES,
        payload: data,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};

export const prevPage = () => {
  return {
    type: "PREV_PAGE",
  };
};

export const nextPage = () => {
  return {
    type: "NEXT_PAGE",
  };
};

export const goToPage = (pageNumber) => {
  return {
    type: "GO_TO_PAGE",
    payload: pageNumber,
  };
};

export const setTotalPages = (totalPages) => {
  return {
    type: "SET_TOTAL_PAGES",
    payload: totalPages,
  };
};

export const searchByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`http://localhost:3001/pokemon?name=${name}`);
      const data = await response.json();
      dispatch({
        type: GET_ALL_POKEMONS,
        payload: [data],
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};
