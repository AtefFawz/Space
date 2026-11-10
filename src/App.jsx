import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import SiteHeader from "./features/space/components/SiteHeader";
import SiteFooter from "./features/space/components/SiteFooter";
import HomePage from "./features/space/pages/HomePage";
import DestinationPage from "./features/space/pages/DestinationPage";
import CrewPage from "./features/space/pages/CrewPage";
import TechnologyPage from "./features/space/pages/TechnologyPage";
import NotFoundPage from "./features/space/pages/NotFoundPage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Orbital — Beyond the familiar",
      "/destination": "Destinations — Orbital",
      "/Destination": "Destinations — Orbital",
      "/crew": "Crew — Orbital",
      "/Crew": "Crew — Orbital",
      "/technology": "Technology — Orbital",
      "/Technology": "Technology — Orbital",
    };
    document.title = titles[location.pathname] ?? "Orbital — Signal lost";
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="app-shell max-w-full">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}
