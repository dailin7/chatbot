import React from "react";
import { Link } from "react-router-dom";
interface IProps{
  ID:string
  name:string
  number:string
  time:string
  location: string
}
const Course = ({ID,name, number,time, location}:IProps) => {
  return (
    <div className="bg-slate-200  w-[80%] mx-auto ">
     <div className="	box-sizing: border-box w-[90%] mx-auto flex justify-between items-center">
      <Link to="/courseInfo">
        <h1 className="text-4xl">Course Number:{ID}</h1>
        <ul className="text-1xl">
        <li>Professor{name}</li>
        <li>Section Number:{number}</li>
        <li>Time:{time}</li>
        <li>Location:{location}</li>
        </ul>
        </Link>

        </div>

        


     
    </div>
    

  
  
  
  );
};

export default Course;
