import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Inventory from "./pages/Inventory";
import HeavyTools from "./pages/HeavyTools";
import Login from "./pages/Login";
import Dasboard from "./pages/Admin/Dasboard";
import Setting from "./pages/Admin/Pages/Setting";
import AdminTeam from "./pages/Admin/Pages/AdminTeam";
import AdminProject from "./pages/Admin/Pages/AdminProject";
import AdminInventories from "./pages/Admin/Pages/AdminInventories";
import AdminEquip from "./pages/Admin/Pages/AdminEquip";

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

          <Route path="/admin/setting" element={<Setting />} />

          <Route path="/admin/team" element={<AdminTeam />} />

          <Route path="/admin/project" element={<AdminProject />} />

          <Route path="/admin/inventories" element={<AdminInventories />} />

          <Route path="/admin/equipment" element={<AdminEquip />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
