import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Crew from "../pages/Crew";
import Technology from "../pages/Technology";
import { Route, Routes } from "react-router-dom";

export default function Routs() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Crew" element={<Crew />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
    </>
  );
}
