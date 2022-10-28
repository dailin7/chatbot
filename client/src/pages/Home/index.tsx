import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import {
  BsAwardFill,
  BsFillBookFill,
  BsFilterRight,
  BsSearch,
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

import Button from "../../components/Button";
import CustomSelect from "../../components/CustomSelect";
import FeaturedLink from "../../components/FeaturedLink";
import Course from "../../components/Course";
import HeroBg from "../../components/HeroBg";

import { campuses, catalogNums, subjects, terms } from "./filterOptions";
import { sampleCourse } from "../../utils/sampleCourse";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppRedux";

import { setSearchTerm } from "../../store/search.slice";
import { useLazyGetClassesQuery } from "../../store/search.api";
import { searchActions } from "../../store/search.slice";


const initialFormData = {
  searchTerm: "",
  term: terms[0].value,
  campus: campuses[0].value,
  subject: "",
  catalogNum: "",
};

const Home = () => {
  const formData = useAppSelector(({ search }) => search);
  const dispatch = useAppDispatch();

  const [showFilter, setShowFilter] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  const [trigger, result] = useLazyGetClassesQuery();
  console.log(result)

  const searchClass = (e: SyntheticEvent) => {
    e.preventDefault();
    setShowResults((formData.searchTerm !== initialFormData.searchTerm) || 
                  (formData.term.value !== initialFormData.term) ||
                  (formData.campus.value !== initialFormData.campus) ||
                  (formData.catalogNum !== initialFormData.catalogNum) ||
                  (formData.subject !== initialFormData.subject));
    setPrevSearchTerm(formData.searchTerm);
    if (showResults) {
      trigger("");
      console.log("TRIGERED API")
    }
  };

  return (
    <div className="w-full mx-auto">
      <div className="w-full flex flex-col items-center">
        <HeroBg>
          <p className="max-w-[1536px] w-[90%] mx-auto text-5xl font-bold text-white">
            OSU Class Search
          </p>
          <form className="w-full" onSubmit={searchClass}>
            <div className="max-w-[1536px] w-[90%] mx-auto flex justify-center items-center gap-4 mb-4">
              <input
                type="text"
                name="Search"
                id="search"
                placeholder="Search Class"
                className="w-full h-10 rounded-lg px-4 pb-[2px] shadow-md hover:bg-gray-200 focus:bg-gray-200 focus:outline focus:outline-2"
                value={formData.searchTerm}
                autoComplete="off"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  dispatch(searchActions.setSearchTerm(e.target.value))
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
              <Button
                className="py-2 px-2 sm:px-4 flex justify-center items-center gap-2"
                onClick={() => {
                  setShowFilter((prev) => !prev)
                  dispatch(searchActions.clearTerm())
                }}
              >
                <BsFilterRight className="text-2xl" />
                <p className="hidden sm:block">Clear</p>
              </Button>
            </div>
            <div
              className={`relative max-w-[1536px] w-[90%] mx-auto flex flex-col sm:flex-row gap-2 sm:gap-4 lg:gap-8 xl:gap-16 mb-4 animate-height z-20 ${
                showFilter
                  ? "max-h-[300px] sm:max-h-[75px]"
                  : "max-h-0 overflow-hidden"
              }`}
            >
              <CustomSelect
                label="Term"
                options={terms}
                defaultValue={formData.term}
                isSearchable
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  dispatch(searchActions.setTerm(e))
                }
              />
              <CustomSelect
                label="Campus"
                options={campuses}
                defaultValue={formData.campus}
                isSearchable
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  dispatch(searchActions.setCampus(e))
                }
              />
              <CustomSelect
                label="Subject"
                options={subjects}
                defaultValue={formData.subject}
                isSearchable
                isClearable
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  dispatch(searchActions.setSubject(e))
                }
              />
              <CustomSelect
                label="Course #"
                options={catalogNums}
                defaultValue={formData.catalogNum}
                isSearchable
                isClearable
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  dispatch(searchActions.setCatalogNum(e))
                }
                
                
              />
            </div>
          </form>
        </HeroBg>

        <div className="relative max-w-[1536px] w-[90%] bg-white mb-8 py-6 px-8 shadow-md">
          {showResults ? (
            <>
              <p className="text-3xl font-bold">
                Search Results for "{prevSearchTerm}" (10)
              </p>
              <div>
                <Course
                  courseId={sampleCourse.course.courseId}
                  subject={sampleCourse.course.subject}
                  catalogNumber={sampleCourse.course.catalogNumber}
                  title={sampleCourse.course.title}
                  description={sampleCourse.course.description}
                  maxUnits={sampleCourse.course.maxUnits}
                  campus={sampleCourse.course.campus}
                  academicCareer={sampleCourse.course.academicCareer}
                />
                <Course
                  courseId={sampleCourse.course.courseId}
                  subject={sampleCourse.course.subject}
                  catalogNumber={sampleCourse.course.catalogNumber}
                  title={sampleCourse.course.title}
                  description={sampleCourse.course.description}
                  maxUnits={sampleCourse.course.maxUnits}
                  campus={sampleCourse.course.campus}
                  academicCareer={sampleCourse.course.academicCareer}
                />
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
                    <FeaturedLink>All Gen-Eds</FeaturedLink>
                    <FeaturedLink>Easy Classes</FeaturedLink>
                  </div>
                </div>
                <div className="w-full border-t-2 border-gray-200 pt-4">
                  <div className="flex items-start justify-start gap-2">
                    <FaGraduationCap className="text-2xl mt-[2px] text-scarlet" />
                    <p className="m-0 text-xl font-bold">Level</p>
                  </div>
                  <div className="ml-8 mt-2 flex flex-col gap-2">
                    <FeaturedLink>Undergraduate</FeaturedLink>
                    <FeaturedLink>Graduate</FeaturedLink>
                    <FeaturedLink>Pharmacy</FeaturedLink>
                  </div>
                </div>
                <div className="w-full border-t-2 border-gray-200 pt-4">
                  <div className="flex items-start justify-start gap-2">
                    <BsAwardFill className="text-2xl mt-1 text-scarlet" />
                    <p className="m-0 text-xl font-bold">Majors</p>
                  </div>
                  <div className="ml-8 mt-2 flex flex-col gap-2">
                    <FeaturedLink>Finance</FeaturedLink>
                    <FeaturedLink>Biology</FeaturedLink>
                    <FeaturedLink>Psychology</FeaturedLink>
                    <FeaturedLink>CSE</FeaturedLink>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
