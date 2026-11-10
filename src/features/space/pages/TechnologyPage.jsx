import { useState } from "react";
import PageIntro from "../components/PageIntro";
import { technology } from "../data/spaceData";
import { asset } from "../../../lib/assets";

export default function TechnologyPage() {
  const [selectedId, setSelectedId] = useState(technology[0].id);
  const selected = technology.find((item) => item.id === selectedId) ?? technology[0];

  function handleTabKeyDown(event, index) {
    const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
    if (!direction) return;
    event.preventDefault();
    const nextIndex = (index + direction + technology.length) % technology.length;
    const next = technology[nextIndex];
    setSelectedId(next.id);
    document.getElementById(`technology-tab-${next.id}`)?.focus();
  }

  return (
    <main id="main-content" className="explore-page technology-page page-enter" style={{ backgroundImage: `linear-gradient(180deg, rgba(7, 11, 24, .82), rgba(7, 11, 24, .97)), url("${asset("images/technology/background-technology-desktop.webp")}")` }}>
      <div className="content-width">
        <PageIntro number="03 /" eyebrow="THE SYSTEMS THAT TAKE US THERE" title={<>The engineering<br /><em>of possibility.</em></>} />
        <div className="technology-layout">
          <div className="technology-selector" role="tablist" aria-label="Explore mission technology">
            {technology.map((item, index) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`technology-tab-${item.id}`}
                aria-selected={selected.id === item.id}
                tabIndex={selected.id === item.id ? 0 : -1}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                aria-controls="technology-panel"
                onClick={() => setSelectedId(item.id)}
                className={selected.id === item.id ? "is-active" : ""}
              >
                <span>{item.number}</span>
                <small>{item.name}</small>
              </button>
            ))}
          </div>
          <section className="technology-details" id="technology-panel" role="tabpanel" tabIndex={0} aria-live="polite">
            <p className="eyebrow">{selected.category}</p>
            <h2 key={`${selected.id}-title`} className="selection-enter">{selected.name}</h2>
            <p>{selected.description}</p>
            <ul className="technology-facts">
              {selected.facts.map((fact) => <li key={fact}><span>↗</span>{fact}</li>)}
            </ul>
          </section>
          <div className="technology-visual">
            <img key={selected.id} className="technology-image selection-enter" src={asset(`images/${selected.image}`)} alt={`${selected.name} visual`} decoding="async" />
            <span className="technology-image-label">SYSTEM / {selected.number}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
