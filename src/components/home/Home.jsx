import Desc from "../../assets/home/Desktop - Home.png";

export default function Home() {
  return (
    <>
      <div className="z-0 ">
        <img
          src={Desc}
          alt="Desktop"
          className="bg-cover object-cover h-screen w-full"
        />
        <div
          className="flex lg:flex-row flex-col lg:px-10 px-5 absolute 
        translate-y-[-110%]  lg:top-1/5 lg:translate-y-1/5 md:items-center justify-around py-10"
        >
          <div className=" text-white flex flex-col text-wrap items-center lg:w-1/2 w-1/ ">
            <h1
              className={`md:text-2xl lg:text-3xl text-xl text-center text-gray-500 tracking-wider`}
            >
              SO, YOU WANT TO TRAVEL TO
            </h1>
            <h1 className="lg:text-9xl md:text-6xl text-4xl md:mt-10 mt-5 tracking-wider  italic">
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
              className="lg:w-[17rem] md:w-[15rem] lg:h-[17rem] md:h-[15rem] w-[10rem] h-[10rem] bg-white rounded-full flex justify-center items-center text-black font-bold text-2xl hover:pointer"
            >
              <h1>Explorer</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
