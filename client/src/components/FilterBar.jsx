import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  searchByName,
  getApiPokemons,
  getDbPokemons,
  getAllPokemons,
  goToPage,
  sortName,
  sortAtk,
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

      <div className="sort">
        <button onClick={() => dispatch(sortName("MAYOR"))}>A-z</button>
        <button onClick={() => dispatch(sortName("MENOR"))}>Z-A</button>
        <button onClick={() => dispatch(sortAtk("MAYOR"))}>Mayor ATK</button>
        <button onClick={() => dispatch(sortAtk("MENOR"))}>Menor ATK</button>
      </div>
    </div>
  );
};

export default FilterBar;
