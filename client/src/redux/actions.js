export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";

export const PREV_PAGE = "PREV_PAGE";
export const NEXT_PAGE = "NEXT_PAGE";
export const GO_TO_PAGE = "GO_TO_PAGE";
export const SET_TOTAL_PAGES = "SET_TOTAL_PAGES";

export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_API_POKEMONS = "GET_API_POKEMONS";
export const GET_DB_POKEMONS = "GET_DB_POKEMONS";

export const SORT_NAME = "SORT_NAME";
export const SORT_ATK = "SORT_ATK";

export const EMTYDETAILS = "EMTYDETAILS";
export const SET_ERROR = "SET_ERROR";

export const getAllPokemons = () => {
  return async function (dispatch) {
    try {
      const response = await fetch("http://localhost:3001/pokemon");
      const data = await response.json();
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

export const getPokemonByID = (id) => {
  return async function (dispatch) {
    try {
      const response = await fetch(`http://localhost:3001/pokemon/${id}`);
      const data = await response.json();
      dispatch({
        type: GET_POKEMON_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log({ error: error.message });
    }
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const goToPage = (pageNumber) => {
  return {
    type: GO_TO_PAGE,
    payload: pageNumber,
  };
};

export const setTotalPages = (totalPages) => {
  return {
    type: SET_TOTAL_PAGES,
    payload: totalPages,
  };
};

export const searchByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await fetch(
        `http://localhost:3001/pokemon?name=${name.trim()}`
      );
      const data = await response.json();
      dispatch({
        type: SEARCH_BY_NAME,
        payload: [data],
      });
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: name,
      })
    }
  };
};

export const getApiPokemons = () => {
  return {
    type: GET_API_POKEMONS,
  };
};

export const getDbPokemons = () => {
  return {
    type: GET_DB_POKEMONS,
  };
};

export const sortName = (ORDER) => {
  return {
    type: SORT_NAME,
    payload: ORDER,
  };
};

export const sortAtk = (ORDER) => {
  return {
    type: SORT_ATK,
    payload: ORDER,
  };
};

export const emtyDetails = () => {
  return {
    type: EMTYDETAILS,
  };
};
