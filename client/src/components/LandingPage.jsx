import { Link } from "react-router-dom"

const LandingPage = () => {
  return (
    <div>
      <Link to="/home">
        <button className="waitAnimate">Enter</button>
      </Link>
    </div>
  );
};

export default LandingPage;
