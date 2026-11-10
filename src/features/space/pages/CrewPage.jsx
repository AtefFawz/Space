import { useState } from "react";
import PageIntro from "../components/PageIntro";
import { crew } from "../data/spaceData";
import { asset } from "../../../lib/assets";

export default function CrewPage() {
  const [selectedId, setSelectedId] = useState(crew[0].id);
  const selected = crew.find((person) => person.id === selectedId) ?? crew[0];

  return (
    <main id="main-content" className="explore-page crew-page page-enter" style={{ backgroundImage: `linear-gradient(180deg, rgba(7, 11, 24, .82), rgba(7, 11, 24, .97)), url("${asset("images/crew/background-crew-desktop.webp")}")` }}>
      <div className="content-width crew-content">
        <PageIntro number="02 /" eyebrow="THE HUMAN ELEMENT" title={<>Meet the people<br /><em>behind the mission.</em></>} />
        <div className="crew-layout">
          <section className="crew-details" aria-live="polite">
            <p className="eyebrow">FLIGHT PERSONNEL / {String(crew.findIndex((person) => person.id === selected.id) + 1).padStart(2, "0")}</p>
            <p className="crew-role">{selected.role}</p>
            <h2 key={`${selected.id}-name`} className="selection-enter">{selected.name}</h2>
            <p className="crew-description">{selected.description}</p>
            <div className="crew-meta">
              <div><span className="meta-label">SPECIALTY</span><strong>{selected.specialty}</strong></div>
              <div><span className="meta-label">NOTABLE MISSION</span><strong>{selected.mission}</strong></div>
            </div>
            <div className="crew-selector" role="group" aria-label="Select crew member">
              {crew.map((person, index) => (
                <button
                  key={person.id}
                  type="button"
                  aria-label={`Show ${person.name}`}
                  aria-pressed={selected.id === person.id}
                  className={selected.id === person.id ? "is-active" : ""}
                  onClick={() => setSelectedId(person.id)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </section>
          <div className="crew-portrait-wrap">
            <div className="portrait-frame" />
            <img key={selected.id} className="crew-portrait selection-enter" src={asset(`images/${selected.image}`)} alt={`Portrait of ${selected.name}`} decoding="async" />
            <span className="portrait-caption">HUMAN EXPLORATION / {selected.id.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
