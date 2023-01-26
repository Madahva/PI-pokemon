import {
  GET_ALL_POKEMONS,
  GET_ALL_TYPES,
  PREV_PAGE,
  NEXT_PAGE,
  GO_TO_PAGE,
  SET_TOTAL_PAGES,
  SEARCH_BY_NAME,
  GET_API_POKEMONS,
  GET_DB_POKEMONS,
} from "./actions.js";

const initialState = {
  pokemons: [],
  types: [],

  currentPage: 1,
  itemsPerPage: 12,
  totalPages: [],

  pokemonsBackUp: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        pokemonsBackUp: action.payload,
      };

    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case PREV_PAGE:
      let decrement = -1;
      if (state.currentPage === 1) decrement = 0;

      return {
        ...state,
        currentPage: state.currentPage + decrement,
      };

    case NEXT_PAGE:
      let increment = 1;
      if (state.currentPage === state.totalPages) increment = 0;

      return {
        ...state,
        currentPage: state.currentPage + increment,
      };

    case GO_TO_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };

    case GET_API_POKEMONS:
      state.pokemons = state.pokemonsBackUp;
      return {
        ...state,
        pokemons: state.pokemons.filter(
          (pokemon) => typeof pokemon.id === "number"
        ),
      };

    case GET_DB_POKEMONS:
      state.pokemons = state.pokemonsBackUp;
      return {
        ...state,
        pokemons: state.pokemons.filter(
          (pokemon) => typeof pokemon.id === "string"
        ),
      };

    default:
      return { ...state };
  }
}
