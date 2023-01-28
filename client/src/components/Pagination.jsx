import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextPage,
  prevPage,
  goToPage,
  setTotalPages,
} from "../redux/actions.js";

const Pagination = ({ pokemons }) => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state);

  useEffect(() => {
    const totalPages = Math.ceil(pokemons.length / pagination.itemsPerPage);
    dispatch(setTotalPages(totalPages));
  }, [pokemons.length, pagination.itemsPerPage, dispatch]);

  const totalPages = [...Array(pagination.totalPages)].map((_, i) => i + 1);

  return (
    <div>
      <button onClick={() => dispatch(prevPage())}>Prev page</button>
      {totalPages.map((pageNumber) => (
        <button key={pageNumber} onClick={() => dispatch(goToPage(pageNumber))}>
          {pageNumber}
        </button>
      ))}
      <button onClick={() => dispatch(nextPage())}>Next page</button>
    </div>
  );
};

export default Pagination;
