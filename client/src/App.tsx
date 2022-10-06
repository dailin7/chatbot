import React from "react";
import { Route, Routes } from "react-router-dom";
import Busses from "./components/Busses";
import CourseDetails from "./components/CourseDetails";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/bus" element={<Busses />} />
      </Routes>
    </div>
  );
};
export default App;
