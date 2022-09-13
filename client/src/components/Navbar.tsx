import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navstyles.css";

const Navbar = () => {
  return (
    <div className="bg-slate-400">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-2 justify-center items-center">
            <FaGraduationCap className="text-4xl" />
            <p className="text-4xl">Chatbot</p>
          </div>
        </Link>
        <div className="flex gap-4">
          <Link to="/">
            <p>Classes</p>
          </Link>
          <Link to="/bus">
              <p>Busses</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
