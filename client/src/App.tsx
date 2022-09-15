import React from "react";
import { Route, Routes } from "react-router-dom";
import Busses from "./components/Busses";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Course from "./components/Course";

const App = () => {
  return (
    <div>
      <Navbar />
      <Course/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bus" element={<Busses />} />
      </Routes>
    </div>
  );
};
export default App;
