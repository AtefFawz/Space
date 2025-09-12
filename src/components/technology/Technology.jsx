import LAUNCH from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import SPACEPORT from "../../assets/technology/image-spaceport-portrait.jpg";
import SPACE from "../../assets/technology/image-space-capsule-portrait.jpg";
import Background from "../../assets/technology/background-technology-desktop.jpg";
import { useState } from "react";
export default function TechnologyComponent() {
  const arrayOfData = [
    {
      id: 1,
      title: "THE TERMINOLOGY…",
      name: "LAUNCH VEHICLE",
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      image: LAUNCH,
    },
    {
      id: 2,
      title: "THE TERMINOLOGY…",
      name: "SPACEPORT",
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      image: SPACEPORT,
    },
    {
      id: 3,
      title: "THE TERMINOLOGY…",
      name: "SPACE CAPSULE",
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      image: SPACE,
    },
  ];
  const [data, setData] = useState(arrayOfData[0]);

  return (
    <>
      <div
        style={{ backgroundImage: `url(${Background})` }}
        className="bg-cover bg-center bg-no-repeat w-full min-h-screen overflow-hidden space-y-5 pb-10"
      >
        <div className="  lg:px-16 ">
          <div className="pt-34  px-8 lg:px-5">
            <span className="text-gray-500 text-xl lg:text-2xl">03 </span>
            <h1 className="inline text-gray-300 md:text-2xl text-lg">
              SPACE LAUNCH 101
            </h1>
          </div>
          {/* Parent Content */}
          <div className="flex flex-col lg:flex-row items-center gap-5 justify-around">
            {/* Text-Content */}
            <div className="flex flex-col justify-center lg:items-start items-center lg:text-start text-center lg:order-3 order-3 min-w-md max-w-xl px-13 lg:px-2">
              <h2 className="text-xl md:text-2xl lg:text-3xl  text-gray-400 tracking-wide ">
                {data.title}
              </h2>
              <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-50 tracking-wide pt-3 pb-7">
                {data.name}
              </h1>
              <p className="lg:text-lg px-6 tracking-wide text-md text-gray-300">
                {data.description}
              </p>
            </div>
            {/* Button */}
            <div className="flex lg:flex-col  gap-x-5 lg:gap-16 lg:pt-[4em] pt-2 flex-row lg:order-2 order-2">
              {arrayOfData.map((e) => {
                return (
                  <button
                    key={e.id}
                    onClick={() => setData(e)}
                    className={`lg:w-16 lg:h-16 w-12 h-12 text-xl rounded-full  border-1 border-amber-50 ${
                      data.id === e.id ? "bg-white" : "text-white"
                    }`}
                  >
                    {e.id}
                  </button>
                );
              })}
            </div>
            {/* Image */}
            <div className="lg:order-3 order-1 pt-10  ">
              <img
                src={data.image}
                alt={data.name}
                className="lg:w-full lg:h-[28em] w-[100vw] h-[15rem] object-cover bg-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
