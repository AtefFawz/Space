import Douglas from "../../assets/crew/image-douglas-hurley.png";
import Mark from "../../assets/crew/image-mark-shuttleworth.png";
import Victor from "../../assets/crew/image-victor-glover.png";
import Anousheh from "../../assets/crew/image-anousheh-ansari.png";
import BackgroundCrew from "../../assets/crew/background-crew-desktop.jpg";
import { useState } from "react";

export default function Crew() {
  const array = [
    {
      btn: "",
      id: 1,
      image: Douglas,
      title: "Commander ",
      name: "Douglas Hurley",
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      btn: "",
      id: 2,
      image: Mark,
      title: "Mission Specialist ",
      name: "MARK SHUTTLEWORTH",
      description:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      btn: "",
      id: 3,
      image: Victor,
      title: "PILOT",
      name: "Victor Glover",
      description:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    },
    {
      btn: "",
      id: 4,
      image: Anousheh,
      title: "Flight Engineer",
      name: "Anousheh Ansari",
      description:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
    },
  ];
  const [extract, setExtract] = useState(array[0]);

  return (
    <div
      style={{ backgroundImage: `url(${BackgroundCrew})` }}
      className="bg-cover bg-center bg-no-repeat w-full max-h-full min-h-screen overflow-hidden space-y-5"
    >
      {/* Title Page*/}
      <div className="text-white container mx-auto px-9 lg:px-16 pt-35 tracking-widest">
        <span className="text-[1.4rem] lg:text-2xl text-gray-500 font-extrabold">
          02{" "}
        </span>
        <h2 className="inline md:text-xl text-lg text-gray-200">
          MEET YOUR CREW
        </h2>
      </div>

      {/* Content page*/}
      <div className="flex lg:flex-row flex-col lg:justify-evenly items-center gap-y-10 pt-0 pb-22 container mx-auto">
        <div className="flex flex-col justify-center items-center px-4 max-w-2xl">
          <h2 className="text-gray-500 text-2xl md:text-4xl font-bold tracking-wide mt-7">
            {extract.title}
          </h2>
          <h1 className="text-2xl md:text-5xl text-white md:my-7 my-4 lg:tracking-wider md:tracking-wide uppercase">
            {extract.name}
          </h1>
          <p className="md:text-xl text-gray-300 text-center">
            {extract.description}
          </p>

          {/* Buttons*/}
          <div className="flex gap-5 justify-center lg:justify-start lg:mt-10 mt-5">
            {array.map((person) => (
              <button
                key={person.id}
                onClick={() => setExtract(person)}
                className={`rounded-full border border-white lg:w-5 lg:h-5 w-3 h-3 flex justify-center items-center ${
                  person.id === extract.id ? "bg-white" : ""
                }`}
              >
                {person.btn}
              </button>
            ))}
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src={extract.image}
            alt={extract.name}
            className="w-72 h-76 lg:w-[80%] lg:h-[50%] md:w-full md:h-full"
          />
        </div>
      </div>
    </div>
  );
}
