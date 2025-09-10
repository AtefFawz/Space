import { Link } from "react-router-dom";
import Logo from "../assets/navbar/Logo.png";
import { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

export default function Navbar() {
  const ref = useRef("");
  function handelClick() {
    ref.current.classList.toggle("active");
  }
  let mapData = [
    { name: "Home" },
    { name: "Destination" },
    { name: "Crew" },
    { name: "Technology" },
  ];
  let extract = mapData.map((e, i) => {
    return (
      <ul key={i} className="px-6 ">
        <li>
          <span
            className={`text-[1.1rem] font-bold`}
          >
            0{i}
          </span>{" "}
          <Link
            className="text-[1rem] font-light text-gray-300"
            to={`/${e.name}`}
          >
            {e.name}
          </Link>
        </li>
      </ul>
    );
  });
  return (
    <>
      <div className="my-1 fixed text-white w-full flex items-center justify-between z-1000">
        <div className="flex items-center">
          <MenuIcon
            className="menu"
            onClick={handelClick}
            style={{ cursor: "pointer", fontSize: "2rem" }}
          />
          <img src={Logo} alt="Logo" className="ml-5 w-7 md:w-13" />
        </div>

        <div
          ref={ref}
          id="vis"
          className="flex-grow flex items-center justify-end h-[9rem] w-full"
        >
          <hr className="w-[30%] ml-[9rem] flex-grow text-gray-500 hidden lg:block" />

          <div
            id="mobile"
            className="flex md:flex-row md:gap-x-3  lg:gap-x-5 px-3 p-7 backdrop-blur-3xl"
          >
            {extract}
          </div>
        </div>
      </div>
    </>
  );
}
