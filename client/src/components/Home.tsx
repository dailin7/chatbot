import { TextField } from "@mui/material";
import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import { BsFilterRight, BsSearch } from "react-icons/bs";
import osuBackground from "../images/osu-bg.webp";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  const searchClass = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  return (
    <div className="w-full mx-auto">
      <div
        className="w-full flex flex-col justify-center items-center gap-12 bg-bottom py-12"
        // style={{ background: `url(${osuBackground})`, backgroundSize: "100vw" }}
      >
        <p className="text-5xl">OSU Class Search</p>

        <form action="" className="w-full" onSubmit={searchClass}>
          <div className="w-[80%] mx-auto flex justify-center items-center gap-4">
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              fullWidth
              value={searchTerm}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchTerm(e.target.value)
              }
            />
            <button
              type="submit"
              className="py-2 px-2 sm:px-4 bg-black bg-opacity-20 rounded-md flex justify-center items-center gap-2"
            >
              <BsSearch className="text-xl m-[2px]" />
              <p className="hidden sm:block">Search</p>
            </button>
            <div
              className="py-2 px-2 sm:px-4 bg-black bg-opacity-20 rounded-md flex justify-center items-center gap-2 cursor-pointer"
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <BsFilterRight className="text-2xl" />
              <p className="hidden sm:block">Filter</p>
            </div>
            <div className="flex justify-center items-center"></div>
          </div>
        </form>
        <div className="w-[80%] grid grid-cols-4 gap-4">
          <div className="h-12 bg-black">test</div>
          <div className="h-12 bg-black">test</div>
          <div className="h-12 bg-black">test</div>
          <div className="h-12 bg-black">test</div>
          <div className="h-12 bg-black">test</div>
          <div className="h-12 bg-black">test</div>
          <div className="h-12 bg-black">test</div>
          <div className="h-12 bg-black">test</div>
          <div className="h-12 bg-black">test</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
