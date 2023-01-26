import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../redux/actions.js";

const FilterBar = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByName(searchValue));
  };

  return (
    <div>
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
  );
};

export default FilterBar;
