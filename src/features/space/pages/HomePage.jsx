import { Link } from "react-router-dom";
import PageIntro from "../components/PageIntro";
import { missionFacts } from "../data/spaceData";
import { asset } from "../../../lib/assets";

export default function HomePage() {
  return (
    <main id="main-content" className="home-page page-enter">
      <section className="home-hero">
        <div className="hero-image" aria-hidden="true" style={{ backgroundImage: `linear-gradient(90deg, rgba(7, 11, 24, .98) 0%, rgba(7, 11, 24, .82) 39%, rgba(7, 11, 24, .12) 100%), url("${asset("images/home/Desktop - Home.webp")}")` }} />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-copy">
          <PageIntro number="00 /" eyebrow="A NEW PERSPECTIVE" title={<>Space is not a distance.<br /><em>It's a destination.</em></>} />
          <p className="hero-description">
            Leave the familiar behind. Discover remarkable worlds, meet the people who make exploration possible, and get closer to the technology that takes us there.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/destination">
              Explore destinations <span aria-hidden="true">↗</span>
            </Link>
            <span className="hero-caption">A CONCEPT IN HUMAN CURIOSITY</span>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit-core"><span>01</span></div>
          <span className="orbit-label orbit-label-top">THE NEXT FRONTIER</span>
          <span className="orbit-label orbit-label-bottom">EARTH / HOME ORBIT</span>
        </div>

        <div className="hero-bottomline">
          <span><i /> SCROLL TO EXPLORE</span>
          <span>EST. ON THE EDGE OF POSSIBILITY</span>
        </div>
      </section>

      <section className="home-overview content-width">
        <div className="overview-heading">
          <p className="eyebrow">THE ORBITAL INDEX</p>
          <h2>Everything starts<br /><em>with a question.</em></h2>
        </div>
        <div className="overview-copy">
          <p>What would it feel like to see Earth from somewhere else? Our concept experience brings the building blocks of space exploration into one place: destinations, people, and the systems that connect them.</p>
          <Link className="text-link" to="/technology">Discover the technology <span>→</span></Link>
        </div>
        <div className="mission-facts">
          {missionFacts.map((fact) => (
            <div className="mission-fact" key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
