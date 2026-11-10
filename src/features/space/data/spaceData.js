/**
 * Content for the Space Tourism concept. Travel times are illustrative rather
 * than bookable schedules; the application is a front-end portfolio experience.
 */
export const destinations = [
  {
    id: "moon",
    name: "Moon",
    image: "destination/image-moon.webp",
    eyebrow: "EARTH'S COMPANION",
    description:
      "A familiar landmark, seen from an entirely different perspective. Trace the quiet horizon, explore ancient impact basins and experience the rare stillness of a world without weather.",
    distance: "384,400 km",
    travelTime: "3 days",
    highlights: ["Low-gravity exploration", "Ancient lunar terrain", "Earthrise viewing"],
  },
  {
    id: "mars",
    name: "Mars",
    image: "destination/image-mars.webp",
    eyebrow: "THE RED FRONTIER",
    description:
      "A world of rust-colored plains, enormous volcanoes and deep canyons. Mars is the boldest step in our imagined itinerary for explorers drawn to the edge of the known.",
    distance: "225 million km",
    travelTime: "9 months",
    highlights: ["Olympus Mons region", "Valles Marineris vistas", "Red-dune expedition"],
  },
  {
    id: "europa",
    name: "Europa",
    image: "destination/image-europa.webp",
    eyebrow: "THE ICE WORLD",
    description:
      "Beneath a shell of fractured ice, an ocean may be hidden. This distant moon offers a dramatic study in contrast: a brilliant frozen surface and the possibility of a world beneath it.",
    distance: "628 million km",
    travelTime: "3 years",
    highlights: ["Ridge and ice-field survey", "Jupiter in the sky", "Subsurface-ocean research"],
  },
  {
    id: "titan",
    name: "Titan",
    image: "destination/image-titan.webp",
    eyebrow: "SATURN'S MYSTERY",
    description:
      "A hazy amber atmosphere, hydrocarbon lakes and a landscape unlike anything on Earth. Titan is a destination for patient observers and curious minds.",
    distance: "1.6 billion km",
    travelTime: "7 years",
    highlights: ["Methane-lake landscapes", "Amber atmospheric glow", "Saturn-ring observatory"],
  },
];

export const crew = [
  {
    id: "douglas",
    role: "COMMANDER",
    name: "Douglas Hurley",
    image: "crew/image-douglas-hurley.webp",
    description:
      "An American engineer, former Marine Corps pilot and NASA astronaut. Hurley commanded the Crew Dragon Demo-2 mission, the first crewed test flight of the spacecraft.",
    specialty: "Mission leadership",
    mission: "Crew Dragon Demo-2",
  },
  {
    id: "mark",
    role: "MISSION SPECIALIST",
    name: "Mark Shuttleworth",
    image: "crew/image-mark-shuttleworth.webp",
    description:
      "A South African entrepreneur who travelled to the International Space Station in 2002 as a spaceflight participant aboard Soyuz TM-34.",
    specialty: "Spaceflight participant",
    mission: "Soyuz TM-34",
  },
  {
    id: "victor",
    role: "PILOT",
    name: "Victor Glover",
    image: "crew/image-victor-glover.webp",
    description:
      "A NASA astronaut and U.S. Navy aviator who served as pilot on SpaceX Crew-1, the first operational mission of the Crew Dragon spacecraft to the International Space Station.",
    specialty: "Flight operations",
    mission: "SpaceX Crew-1",
  },
  {
    id: "anousheh",
    role: "FLIGHT ENGINEER",
    name: "Anousheh Ansari",
    image: "crew/image-anousheh-ansari.webp",
    description:
      "An Iranian-American engineer and entrepreneur who travelled to the International Space Station in 2006 as a private spaceflight participant aboard Soyuz TMA-9.",
    specialty: "Engineering & exploration",
    mission: "Soyuz TMA-9",
  },
];

export const technology = [
  {
    id: "launch-vehicle",
    number: "01",
    name: "Launch vehicle",
    image: "technology/image-launch-vehicle-portrait.webp",
    category: "PROPULSION",
    description:
      "A launch vehicle is a rocket-powered system designed to carry a payload from Earth's surface into space. Its stages provide the thrust needed to overcome gravity and place a spacecraft on its intended trajectory.",
    facts: ["Multi-stage architecture", "High-thrust propulsion", "Payload delivery"],
  },
  {
    id: "spaceport",
    number: "02",
    name: "Spaceport",
    image: "technology/image-spaceport-portrait.webp",
    category: "GROUND SYSTEMS",
    description:
      "A spaceport brings together launch pads, integration facilities, tracking systems and mission operations. It is the carefully coordinated starting point for every launch campaign.",
    facts: ["Launch infrastructure", "Vehicle integration", "Mission control"],
  },
  {
    id: "space-capsule",
    number: "03",
    name: "Space capsule",
    image: "technology/image-space-capsule-portrait.webp",
    category: "CREW SYSTEMS",
    description:
      "A crew capsule is a spacecraft designed to carry people through launch, orbital flight and atmospheric re-entry. Its life-support, navigation and thermal-protection systems help keep the crew safe throughout the journey.",
    facts: ["Environmental control", "Thermal protection", "Crew interfaces"],
  },
];

export const missionFacts = [
  { value: "04", label: "Curated destinations" },
  { value: "04", label: "Crew profiles" },
  { value: "03", label: "Mission systems" },
];
