import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Busses from "./pages/Busses";
import CourseDetails from "./pages/CourseDetails";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import "./styles/chatbot.css";
import brutus from "./images/brutus.png";
import BussesNew from "./pages/BussesNew";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js";
    script.async = true;
    script.onload = () => {
      window.WebChat.default(
        {
          customData: { language: "en" },
          socketUrl: "http://localhost:5005",
          socketPath: "/socket.io/",
          title: "OSU Chatbot",
          profileAvatar: brutus,
          initPayload: "/welcome",
        },
        null
      );
    };
    const t = document.head || document.getElementsByTagName("head")[0];
    t.insertBefore(script, t.firstChild);
  }, []);

  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />
        <Route path="/bus" element={<Busses />} />
        <Route path="/bus-new" element={<BussesNew />} />
      </Routes>
    </div>
  );
};
export default App;
