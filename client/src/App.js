import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import Home from "./components/Home.jsx";
import Details from "./components/Details.jsx";
import Create from "./components/Create.jsx";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/pokemon/:id" element={<Details />} />
          <Route exact path="/create" element={<Create />} />
        </Routes>
    </div>
  );
}

export default App;
