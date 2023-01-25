import "./assets/styles/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx"
import LandingPage from "./components/LandingPage.jsx";
import Home from "./components/Home.jsx";
import Details from "./components/Details.jsx";
import Create from "./components/Create.jsx";

const App = () => {
  return (
    <div className="App">
      { useLocation().pathname !== "/" && <Nav /> }
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
    </div>
  );
}

export default App;
