import { Link } from "react-router-dom";
import css from "../assets/styles/LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={css.landingPage}>
      <h1>Pokedex</h1>
      <Link to="/home">
        <button className={css["landingPage-button"]}>
          {" "}
          Get started
          <div className={css["landingPage-button__icon"]}>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;
