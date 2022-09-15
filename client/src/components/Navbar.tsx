import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Squeeze as Hamburger } from "hamburger-react";

import "./navstyles.css";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Navbar = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(() => width >= 475);
  }, [width]);

  return (
    <div className="h-12 flex flex-col justify-center items-center bg-black bg-opacity-20">
      <div className="w-[80%] flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-2 justify-center items-center">
            <FaGraduationCap className="text-4xl" />
            <p className="text-4xl">Chatbot</p>
          </div>
        </Link>
        <div className="xs:hidden" onBlur={() => setOpen(() => false)}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>
        <div
          className={`absolute xs:static top-12 left-0 w-full xs:w-auto flex flex-col xs:flex-row xs:gap-4 items-center justify-center overflow-hidden backdrop-blur-sm xs:backdrop-blur-none bg-black bg-opacity-20 xs:bg-transparent ${
            isOpen ? "max-h-16" : "max-h-0"
          }`}
          style={{
            transition: "max-height 500ms cubic-bezier(0.19, 1, 0.22, 1)",
          }}
        >
          <Link to="/" className="w-full py-1 flex justify-center items-center uppercase font-light hover:underline">
            <p>Classes</p>
          </Link>
          <Link
            to="/bus"
            className="w-full py-1 flex justify-center items-center uppercase font-light hover:underline"
          >
            <p>Busses</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
