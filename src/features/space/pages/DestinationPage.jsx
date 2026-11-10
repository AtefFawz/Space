import { useState } from "react";
import PageIntro from "../components/PageIntro";
import { destinations } from "../data/spaceData";
import { asset } from "../../../lib/assets";

export default function DestinationPage() {
  const [selectedId, setSelectedId] = useState(destinations[0].id);
  const selected = destinations.find((destination) => destination.id === selectedId) ?? destinations[0];

  function handleTabKeyDown(event, index) {
    const direction = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!direction) return;
    event.preventDefault();
    const nextIndex = (index + direction + destinations.length) % destinations.length;
    const next = destinations[nextIndex];
    setSelectedId(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  }

  return (
    <main id="main-content" className="explore-page destination-page page-enter" style={{ backgroundImage: `linear-gradient(180deg, rgba(7, 11, 24, .82), rgba(7, 11, 24, .97)), url("${asset("images/destination/background-destination.webp")}")` }}>
      <div className="content-width">
        <PageIntro number="01 /" eyebrow="WHERE TO NEXT" title={<>Choose your <em>horizon.</em></>} />
        <div className="destination-layout">
          <div className="destination-visual">
            <div className="planet-orbit planet-orbit-one" />
            <div className="planet-orbit planet-orbit-two" />
            <img key={selected.id} className="planet-image selection-enter" src={asset(`images/${selected.image}`)} alt={`${selected.name} surface`} decoding="async" />
            <span className="visual-index">DESTINATION / {String(destinations.findIndex((item) => item.id === selected.id) + 1).padStart(2, "0")}</span>
            <span className="visual-coordinate">ORBITAL COLLECTION · 04 WORLDS</span>
          </div>

          <section className="destination-details" aria-live="polite">
            <div className="destination-tabs" role="tablist" aria-label="Choose a destination">
              {destinations.map((destination) => (
                <button
                  key={destination.id}
                  type="button"
                  role="tab"
                  id={`tab-${destination.id}`}
                  aria-selected={selected.id === destination.id}
                  aria-controls="destination-panel"
                  tabIndex={selected.id === destination.id ? 0 : -1}
                  onKeyDown={(event) => handleTabKeyDown(event, destinations.findIndex((item) => item.id === destination.id))}
                  className={selected.id === destination.id ? "is-active" : ""}
                  onClick={() => setSelectedId(destination.id)}
                >
                  {destination.name}
                </button>
              ))}
            </div>
            <div className="destination-panel" id="destination-panel" role="tabpanel" tabIndex={0} aria-labelledby={`tab-${selected.id}`}>
              <p className="eyebrow">{selected.eyebrow}</p>
              <h2 key={`${selected.id}-title`} className="selection-enter">{selected.name}</h2>
              <p className="destination-description">{selected.description}</p>
              <div className="destination-highlights">
                {selected.highlights.map((highlight) => <span key={highlight}>{highlight}</span>)}
              </div>
              <div className="destination-meta">
                <div>
                  <span className="meta-label">AVERAGE DISTANCE</span>
                  <strong>{selected.distance}</strong>
                </div>
                <div>
                  <span className="meta-label">ILLUSTRATIVE TRAVEL TIME</span>
                  <strong>{selected.travelTime}</strong>
                </div>
              </div>
              <p className="data-disclaimer">Travel times are illustrative concept estimates, not real itineraries.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
