import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main id="main-content" className="not-found page-enter">
      <p className="eyebrow">SIGNAL LOST / 404</p>
      <h1>This isn't<br /><em>our orbit.</em></h1>
      <p>The coordinates you requested are outside this mission's map.</p>
      <Link className="button button-primary" to="/">Return to base <span>↗</span></Link>
    </main>
  );
}
