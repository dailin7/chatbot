import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Squeeze as Hamburger } from "hamburger-react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppRedux";
import { useLazyGetClassesQuery } from "../store/search.api";
import { searchActions } from "../store/search.slice";

import useWindowDimensions from "../hooks/useWindowDimensions";

const Navbar = () => {
  const store = useAppSelector((store) => store);
  const formData = useAppSelector(({ search }) => search);
  const dispatch = useAppDispatch();
  const { width } = useWindowDimensions();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(() => width >= 475);
  }, [width]);

  return (
    <div className="relative h-12 flex flex-col justify-center items-center bg-white z-10 shadow-md">
      <div className="max-w-[1536px] w-[90%] flex justify-between items-center">
        
          <div  className="flex gap-2 justify-center items-center">
            <FaGraduationCap className="text-4xl" />
            <p className="text-4xl">Chatbot</p>
          
          </div>
        <div className="xs:hidden" onBlur={() => setOpen(() => false)}>
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>
        <div
          className={`absolute xs:static top-12 left-0 w-full xs:w-auto flex flex-col xs:flex-row xs:gap-4 items-center justify-center overflow-hidden bg-white animate-height ${
            isOpen ? "max-h-16" : "max-h-0"
          }`}
        >
          <Link
            to="/"
            className="w-full py-1 flex justify-center items-center uppercase hover:underline"
          >
            <p>Classes</p>
          </Link>
          <Link
            to="/bus"
            className="w-full py-1 flex justify-center items-center uppercase hover:underline"
          >
            <p>Busses</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
