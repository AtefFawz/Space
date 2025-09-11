import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";
import { Routes, Route } from "react-router-dom";

export default function Routs() {
  return (
    <Routes>
      <Route path="/Space/" element={<Home />} />
      <Route path="/Space/Home" element={<Home />} />
      <Route path="/Space/Destination" element={<Destination />} />
      <Route path="/Space/Crew" element={<Crew />} />
      <Route path="/Space/Technology" element={<Technology />} />
    </Routes>
  );
}
