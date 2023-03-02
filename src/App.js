import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Inventory from "./pages/Inventory";
import HeavyTools from "./pages/HeavyTools";
import Login from "./pages/Login";
import Dasboard from "./pages/Admin/Dasboard";

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

          <Route path="/admin" element={<Dasboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
