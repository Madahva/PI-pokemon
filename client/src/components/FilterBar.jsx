import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "../assets/styles/Filter.module.css";

import normal from "../assets/images/types/normal.png";
import fighting from "../assets/images/types/fighting.png";
import flying from "../assets/images/types/flying.png";
import poison from "../assets/images/types/poison.png";
import ground from "../assets/images/types/ground.png";
import rock from "../assets/images/types/rock.png";
import ghost from "../assets/images/types/ghost.png";
import bug from "../assets/images/types/bug.png";
import steel from "../assets/images/types/steel.png";
import fire from "../assets/images/types/fire.png";
import water from "../assets/images/types/water.png";
import grass from "../assets/images/types/grass.png";
import electric from "../assets/images/types/electric.png";
import psychic from "../assets/images/types/psychic.png";
import ice from "../assets/images/types/ice.png";
import dragon from "../assets/images/types/dragon.png";
import dark from "../assets/images/types/dark.png";
import fairy from "../assets/images/types/fairy.png";
import unknown from "../assets/images/types/unknown.png";
import shadow from "../assets/images/types/shadow.png";

import {
  searchByName,
  getApiPokemons,
  getDbPokemons,
  resetPokemons,
  goToPage,
  sortName,
  sortAtk,
  filterType,
} from "../redux/actions.js";

const FilterBar = () => {
  const images = [
    normal,
    fighting,
    flying,
    poison,
    ground,
    rock,
    bug,
    ghost,
    steel,
    fire,
    water,
    grass,
    electric,
    psychic,
    ice,
    dragon,
    dark,
    fairy,
    unknown,
    shadow,
  ];

  const dispatch = useDispatch();
  const searchError = useSelector((state) => state.error);
  const types = useSelector((state) => state.types);
  const filter = useSelector((state) => state.filter);
  const [searchValue, setSearchValue] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(filter.apiOrDb);
  const [selectedSort, setSelectedSort] = useState(filter.sort);
  const [selectedType, setSelectedType] = useState(filter.type);

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
      setSelectedFilter("ALL");
      setSelectedType("");
      setSelectedSort("");
      dispatch(goToPage(1));
      dispatch(resetPokemons());
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
        <button onClick={() => handleFilterClick("ALL")}>RESET</button>
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

      <div className={css["type-filter"]}>
        {types &&
          types.map((type, index) => (
            <button
              id={index}
              key={index}
              className={selectedType === type.name ? css.selectedSort : ""}
              onClick={() => {
                setSelectedType(type.name);
                dispatch(filterType(type.name));
                dispatch(goToPage(1));
              }}
            >
              <img src={images[index]} alt={type.name} />
            </button>
          ))}
      </div>
    </div>
  );
};

export default FilterBar;
