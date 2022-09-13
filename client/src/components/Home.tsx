import React from "react";

const Home = () => {
  const classes = ["CSE123", "CSE234", "TESTCLASS", "hi"];
  return (
    <div>
      Home
      {classes.map((c, i) => (
        <div key={i}>{c}</div>
      ))}
    </div>
  );
};

export default Home;
