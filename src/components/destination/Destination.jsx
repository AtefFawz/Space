import { useState } from "react";
import backgroundDestination from "../../assets/destination/background-destination.jpg";
import Moon from "../../assets/destination/image-moon.png";
import Mars from "../../assets/destination/image-mars.png";
import Europa from "../../assets/destination/image-europa.png";
import Titan from "../../assets/destination/image-titan.png";
import "./destination.css";

export default function Destination() {
  const data = [
    {
      id: 1,
      name: "MOON",
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      image: Moon,
      avg: "AVG. DISTANCE",
      width: "384,400 km",
      travel: "Est. travel time",
      day: "3 days",
    },
    {
      id: 2,
      name: "MARS",
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      image: Mars,
      avg: "AVG. DISTANCE",
      width: "225 MIL. km",
      travel: "Est. travel time",
      day: "9 months",
    },
    {
      id: 3,
      name: "EUROPA",
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      image: Europa,
      avg: "AVG. DISTANCE",
      width: "628 MIL. km",
      travel: "Est. travel time",
      day: "3 years",
    },
    {
      id: 4,
      name: "TITAN",
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      image: Titan,
      avg: "AVG. DISTANCE",
      width: "1.6 BIL. km",
      travel: "Est. travel time",
      day: "7 years",
    },
  ];

  //  Use State
  const [selected, setSelected] = useState(data[0]); // Default value

  return (
    <div
      style={{ backgroundImage: `url(${backgroundDestination})` }}
      className="bg-cover bg-center min-h-screen w-full max-h-full overflow-hidden"
    >
      <div className="container mx-auto lg:px-16 md:px-8 px-4">
        <div className="absolute top-34">
          <h1 className="text-gray-300 md:text-2xl text-lg">
            <span className="text-gray-500 text-xl lg:text-2xl">01 </span>PICK
            YOUR DESTINATION
          </h1>
        </div>

        <div className="flex lg:flex-row lg:justify-around items-center flex-col h-screen relative translate-y-1/4 lg:translate-y-1/8 overflow-hidden">
          {/*  Image */}
          <div className="lg:w-63 lg:h-63 md:w-43 md:h-43 w-30 h-30 lg:my-5 my-3">
            <img src={selected.image} alt={selected.name} />
          </div>

          {/*   Navbar */}
          <div className="text-center lg:text-left">
            {/* Navbar */}
            <div className="flex gap-5 justify-center lg:justify-start ">
              {data.map((planet) => (
                <button
                  key={planet.id}
                  onClick={() => setSelected(planet)}
                  className={`md:text-lg text-[.8rem] text-blue-900 uppercase tracking-widest  ${
                    selected.id === planet.id
                      ? "border-b-2 border-white text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {planet.name}
                </button>
              ))}
            </div>

            <h2 className="lg:text-6xl md:text-4xl text-3xl text-white lg:my-8 my-4 ">
              {selected.name}
            </h2>
            <p className="text-gray-300  max-w-md  text-base/7 tracking-wide">
              {selected.description}
            </p>
            <hr className="w-[100%] bg-gray-400 h-[2px] lg:my-5 my-3" />
            <div className="flex gap-10 justify-center lg:justify-start">
              <div>
                <h3 className="text-md text-gray-300">{selected.avg}</h3>
                <p className="lg:text-3xl text-xl text-white">
                  {selected.width}
                </p>
              </div>
              <div>
                <h3 className="text-sm text-gray-300 uppercase">
                  {selected.travel}
                </h3>
                <p className="lg:text-3xl text-xl text-white uppercase">
                  {selected.day}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
