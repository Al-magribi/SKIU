import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Inventory from "./pages/Inventory";
import HeavyTools from "./pages/HeavyTools";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/project" element={<Projects />} />

          <Route path="/team" element={<Team />} />

          <Route path="/inventaris" element={<Inventory />} />

          <Route path="/alat-berat" element={<HeavyTools />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
