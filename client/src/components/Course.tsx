import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <div className="bg-slate-200  w-[40%] mx-auto ">
     <div className="	box-sizing: border-box w-[90%] mx-auto flex justify-between items-center">
      <Link to="/courseInfo">
        <h1 className="text-4xl">Course Number</h1>
        <ul className="text-1xl">
        <li>Professor Name:</li>
        <li>Section Number:</li>
        <li>Time:</li>
        <li>Location:</li>
        </ul>
        </Link>

        </div>

        


     
    </div>
    

  
  
  
  );
};

export default Course;
