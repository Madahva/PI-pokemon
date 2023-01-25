import { GET_ALL_POKEMONS, GET_ALL_TYPES } from "./actions.js";

const initialState = {
  pokemons: [],
  types: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    default:
      return { ...state };
  }
}
