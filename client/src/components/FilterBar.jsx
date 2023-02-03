import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const searchError = useSelector((state) => state.error);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [selectedSort, setSelectedSort] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue !== "") {
      dispatch(searchByName(searchValue));
    }
    setSearchValue("");
  };

  const handleFilterClick = (selected) => {
    setSelectedFilter(selected);
    if (selected === "ALL") {
      dispatch(goToPage(1));
      dispatch(getAllPokemons());
    } else if (selected === "API") {
      dispatch(goToPage(1));
      dispatch(getApiPokemons());
    } else if (selected === "DB") {
      dispatch(goToPage(1));
      dispatch(getDbPokemons());
    }
  };

  const handleSortClick = (selected) => {
    setSelectedSort(selected);

    if (selected === 1) dispatch(sortName("MAYOR"));
    if (selected === 2) dispatch(sortName("MENOR"));
    if (selected === 3) dispatch(sortAtk("MAYOR"));
    if (selected === 4) dispatch(sortAtk("MENOR"));
  };

  return (
    <div className={css.filterBar}>
      <form className={css["search"]} onSubmit={handleSubmit}>
        {searchError && <span>{searchError}</span>}
        <input
          className={css["search__input"]}
          autoFocus
          type="text"
          placeholder="Search by Name"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className={css["search__button"]}>Search</button>
      </form>

      <div className={css.filter}>
        <button
          className={selectedFilter === "ALL" ? css.selectedFilter : ""}
          onClick={() => handleFilterClick("ALL")}
        >
          ALL
        </button>
        <button
          className={selectedFilter === "API" ? css.selectedFilter : ""}
          onClick={() => handleFilterClick("API")}
        >
          API
        </button>
        <button
          className={selectedFilter === "DB" ? css.selectedFilter : ""}
          onClick={() => handleFilterClick("DB")}
        >
          DB
        </button>
      </div>
      <div className={css.sort}>
        <button
          className={selectedSort === 1 ? css.selectedSort : ""}
          onClick={() => handleSortClick(1)}
        >
          A-z
        </button>
        <button
          className={selectedSort === 2 ? css.selectedSort : ""}
          onClick={() => handleSortClick(2)}
        >
          Z-A
        </button>
        <button
          className={selectedSort === 3 ? css.selectedSort : ""}
          onClick={() => handleSortClick(3)}
        >
          &gt; ATK
        </button>
        <button
          className={selectedSort === 4 ? css.selectedSort : ""}
          onClick={() => handleSortClick(4)}
        >
          &lt; ATK
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
