import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "../assets/styles/Filter.module.css";
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
    <div className={css.filterBar}>
      <form className={css["search"]} onSubmit={handleSubmit}>
        <input
          className={css["search__input"]}
          type="text"
          placeholder="Search by Name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={css["search__button"]}>Search</button>
      </form>

      <div className={css.filter}>
        <button
          onClick={() => {
            dispatch(goToPage(1));
            dispatch(getAllPokemons());
          }}
        >
          ALL
        </button>
        <button
          onClick={() => {
            dispatch(goToPage(1));
            dispatch(getApiPokemons());
          }}
        >
          API
        </button>
        <button
          onClick={() => {
            dispatch(goToPage(1));
            dispatch(getDbPokemons());
          }}
        >
          DB
        </button>
      </div>
      <div className={css.sort}>
        <button onClick={() => dispatch(sortName("MAYOR"))}>A-z</button>
        <button onClick={() => dispatch(sortName("MENOR"))}>Z-A</button>
        <button onClick={() => dispatch(sortAtk("MAYOR"))}> &gt; ATK</button>
        <button onClick={() => dispatch(sortAtk("MENOR"))}> &lt; ATK</button>
      </div>
    </div>
  );
};

export default FilterBar;
