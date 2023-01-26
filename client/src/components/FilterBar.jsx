import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchByName,
  getApiPokemons,
  getDbPokemons,
  getAllPokemons,
  goToPage,
} from "../redux/actions.js";

const FilterBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByName(searchValue));
  };

  return (
    <div>
      <div className="search">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search by Name"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>

      <div className="filter">
        <button
          onClick={() => {
            dispatch(goToPage(1))
            dispatch(getAllPokemons());
          }}
        >
          ALL
        </button>
        <button
          onClick={() => {
            dispatch(goToPage(1))
            dispatch(getApiPokemons());
          }}
        >
          API
        </button>
        <button
          onClick={() => {
            dispatch(goToPage(1))
            dispatch(getDbPokemons());
          }}
        >
          DB
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
