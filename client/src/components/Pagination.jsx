import React, { useEffect, useState } from "react";
import css from "../assets/styles/Pagination.module.css";
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
  const [selectedPage, setSelectedPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    dispatch(goToPage(pageNumber));
    setSelectedPage(pageNumber);
  };

  useEffect(() => {
    const totalPages = Math.ceil(pokemons.length / pagination.itemsPerPage);
    dispatch(setTotalPages(totalPages));
  }, [pokemons.length, pagination.itemsPerPage, dispatch]);

  const totalPages = [...Array(pagination.totalPages)].map((_, i) => i + 1);

  return (
    <>
      {pokemons.length ? (
        <div className={css.pagination}>
          <button onClick={() => dispatch(prevPage())}>Prev page</button>
          {totalPages.map((pageNumber) => (
            <button
              key={pageNumber}
              className={selectedPage === pageNumber ? css.selectedPage : ""}
              onClick={() => handlePageClick(pageNumber)}
            >
              {pageNumber}
            </button>
          ))}
          <button onClick={() => dispatch(nextPage())}>Next page</button>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
