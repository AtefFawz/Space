import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link to="/" className="footer-brand">ORBITAL<span>®</span></Link>
      <p>A visual concept for the next chapter of exploration.</p>
      <span className="footer-note">NOT A BOOKING PLATFORM · 2026</span>
    </footer>
  );
}
