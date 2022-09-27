import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import {
  BsAwardFill,
  BsFillBookFill,
  BsFilterRight,
  BsSearch,
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

import Button from "./Button";
import CustomSelect from "./CustomSelect";
import FeaturedLink from "./FeaturedLink";

import heroDivider from "../images/hero-divider.svg";
import { campuses, catalogNums, subjects, terms } from "./filterOptions";

const initialFormData = {
  searchTerm: "",
  term: terms[0].value,
  campus: campuses[0].value,
  subject: "",
  catalogNum: "",
};

const Home = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [showResults, setShowResults] = useState(false);

  const searchClass = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full mx-auto">
      <div className="w-full flex flex-col items-center">
        <div className="relative w-full flex flex-col justify-center items-center gap-12 pt-16 pb-8 -mb-4 sm:mb-0 bg-scarlet min-h-[250px]">
          <img
            src={heroDivider}
            alt="Hero Divider"
            className="absolute bottom-1 translate-y-full"
          />
          <p className="w-[80%] mx-auto text-5xl font-bold text-white">
            OSU Class Search
          </p>
          <form action="" className="w-full" onSubmit={searchClass}>
            <div className="w-[80%] mx-auto flex justify-center items-center gap-4 mb-4">
              <input
                type="text"
                name="Search"
                id="search"
                placeholder="Search Class"
                className="w-full h-10 rounded-lg px-4 pb-[2px] shadow-md hover:bg-gray-200 focus:bg-gray-200 focus:outline focus:outline-2"
                value={formData.searchTerm}
                autoComplete="off"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData((prev) => ({
                    ...prev,
                    searchTerm: e.target.value,
                  }))
                }
              />
              <button type="submit">
                <Button className="py-2 px-2 sm:px-4 flex justify-center items-center gap-2">
                  <BsSearch className="text-xl m-[2px]" />
                  <p className="hidden sm:block">Search</p>
                </Button>
              </button>
              <Button
                className="py-2 px-2 sm:px-4 flex justify-center items-center gap-2"
                onClick={() => setShowFilter((prev) => !prev)}
              >
                <BsFilterRight className="text-2xl" />
                <p className="hidden sm:block">Filter</p>
              </Button>
            </div>
            <div
              className={`relative w-[80%] mx-auto flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-8 xl:gap-16 mb-4 animate-height z-20 ${
                showFilter
                  ? "max-h-[300px] sm:max-h-[75px]"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              <CustomSelect
                label="Term"
                options={terms}
                defaultValue={terms[0]}
                isSearchable
                onChange={(e: any) =>
                  setFormData((prev) => ({
                    ...prev,
                    term: `${e?.value}`,
                  }))
                }
              />
              <CustomSelect
                label="Campus"
                options={campuses}
                defaultValue={campuses[0]}
                isSearchable
                onChange={(e: any) =>
                  setFormData((prev) => ({
                    ...prev,
                    campus: `${e?.value}`,
                  }))
                }
              />
              <CustomSelect
                label="Subject"
                options={subjects}
                isSearchable
                isClearable
                onChange={(e: any) =>
                  setFormData((prev) => ({
                    ...prev,
                    subject: `${e?.value}`,
                  }))
                }
              />
              <CustomSelect
                label="Course #"
                options={catalogNums}
                isSearchable
                isClearable
                onChange={(e: any) =>
                  setFormData((prev) => ({
                    ...prev,
                    catalogNum: `${e?.value}`,
                  }))
                }
              />
            </div>
          </form>
        </div>
        <div className="relative w-[80%] z-10 bg-white mb-12 py-6 px-8 shadow-md">
          {showResults ? (
            <>
              <p className="text-3xl font-bold mb-4">Search Results</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="h-32 bg-gray-400">test</div>
                <div className="h-32 bg-gray-400">test</div>
                <div className="h-32 bg-gray-400">test</div>
                <div className="h-32 bg-gray-400">test</div>
                <div className="h-32 bg-gray-400">test</div>
                <div className="h-32 bg-gray-400">test</div>
                <div className="h-32 bg-gray-400">test</div>
                <div className="h-32 bg-gray-400">test</div>
              </div>
            </>
          ) : (
            <>
              <p className="text-3xl font-bold mb-5">Popular Searches</p>
              <div className="w-full flex flex-col md:flex-row gap-4">
                <div className="w-full border-t-2 border-gray-200 pt-4">
                  <div className="flex items-start justify-start gap-2">
                    <BsFillBookFill className="text-xl mt-[6px] text-scarlet" />
                    <p className="m-0 text-xl font-bold">General Education</p>
                  </div>
                  <div className="ml-8 mt-2 flex flex-col gap-2">
                    <FeaturedLink text="All Gen-Eds" />
                    <FeaturedLink text="Easy Classes" />
                  </div>
                </div>
                <div className="w-full border-t-2 border-gray-200 pt-4">
                  <div className="flex items-start justify-start gap-2">
                    <FaGraduationCap className="text-2xl mt-[2px] text-scarlet" />
                    <p className="m-0 text-xl font-bold">Level</p>
                  </div>
                  <div className="ml-8 mt-2 flex flex-col gap-2">
                    <FeaturedLink text="Undergraduate" />
                    <FeaturedLink text="Graduate" />
                    <FeaturedLink text="Pharmacy" />
                  </div>
                </div>
                <div className="w-full border-t-2 border-gray-200 pt-4">
                  <div className="flex items-start justify-start gap-2">
                    <BsAwardFill className="text-2xl mt-1 text-scarlet" />
                    <p className="m-0 text-xl font-bold">Majors</p>
                  </div>
                  <div className="ml-8 mt-2 flex flex-col gap-2">
                    <FeaturedLink text="Finance" />
                    <FeaturedLink text="Biology" />
                    <FeaturedLink text="Psychology" />
                    <FeaturedLink text="CSE" />
                  </div>
                </div>
              </div>
            </>
          )}
          <button
            className="bg-green-500 rounded-sm p-1 border-2 mt-64"
            onClick={() => setShowResults(!showResults)}
          >
            Toggle Show Search Results (remove when no longer needed)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
