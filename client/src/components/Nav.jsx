import { Link } from "react-router-dom";
import css from "../assets/styles/Nav.module.css";
const Nav = () => {
  return (
    <div className={css.nav}>
      <Link to="/">
        <button tabIndex={-1}>Exit</button>
      </Link>
      <Link to="/home">
        <button tabIndex={-1}>Home</button>
      </Link>
      <Link to="/create">
        <button tabIndex={-1}>Create</button>
      </Link>
    </div>
  );
};

export default Nav;
