import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAVIGATION } from "../../../lib/navigation";

export default function SiteHeader() {
  const location = useLocation();
  const [openAtPath, setOpenAtPath] = useState(null);
  const menuOpen = openAtPath === location.pathname;

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenAtPath(null);
        document.querySelector(".menu-toggle")?.focus();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Orbital home" onClick={() => setOpenAtPath(null)}>
        <span className="brand-mark" aria-hidden="true"><span /></span>
        <span className="brand-copy">
          <strong>ORBITAL</strong>
          <small>BEYOND THE FAMILIAR</small>
        </span>
      </NavLink>

      <div className="header-divider" aria-hidden="true" />

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setOpenAtPath(menuOpen ? null : location.pathname)}
      >
        <span /><span />
      </button>

      {menuOpen && (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close navigation"
          onClick={() => setOpenAtPath(null)}
        />
      )}
      <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
        {NAVIGATION.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            onClick={() => setOpenAtPath(null)}
            className={({ isActive }) => `nav-link ${isActive ? "is-active" : ""}`}
          >
            <span className="nav-number">{item.number}</span>
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <span className="header-status"><i /> CONCEPT EXPERIENCE</span>
    </header>
  );
}
