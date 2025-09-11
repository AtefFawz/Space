import Desc from "../../assets/home/Desktop - Home.png";

export default function Home() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat w-full  max-h-full min-h-screen space-y-5 "
        style={{ backgroundImage: `url(${Desc})` }}
      >
        <div className="container mx-auto lg:px-16 md:px-8 px-4 pt-34">
          {" "}
          <h1 className={`text-gray-300 md:text-2xl text-lg  `}>
            SO, YOU WANT TO TRAVEL TO
          </h1>
        </div>
        <div
          className="flex lg:flex-row flex-col lg:px-10 px-5 
         items-center justify-around  h-full  "
        >
          {/* Second Title */}
          <div className=" text-white flex flex-col text-wrap lg:w-1/2 w-1/ pt-34 text-start">
            <h1 className="lg:text-9xl md:text-6xl text-4xl md:mt-10 mt-5 tracking-wider  italic text-center">
              SPACE
            </h1>
            <p
              className={`md:text-xl text-lg md:my-15 my-8 text-gray-500 text-center`}
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <div
              id="hover"
              className="lg:w-[17rem] md:w-[15rem] lg:h-[17rem] md:h-[15rem] w-[10rem] h-[10rem] bg-white rounded-full flex justify-center items-center text-black font-bold text-2xl hover:pointer mb-10"
            >
              <h1>Explorer</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
