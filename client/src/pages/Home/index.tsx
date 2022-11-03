import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
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
import { useAppDispatch, useAppSelector } from "../../hooks/useAppRedux";

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
  const store = useAppSelector((store) => store);
  console.log(store);
  const formData = useAppSelector(({ search }) => search);
  const dispatch = useAppDispatch();

  const [showFilter, setShowFilter] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [prevSearchTerm, setPrevSearchTerm] = useState("");

  const [searchTrigger, searchResult] = useLazyGetClassesQuery();

  const search = () => {
    const formChanged =
      formData.searchTerm !== initialFormData.searchTerm ||
      formData.term.value !== initialFormData.term ||
      formData.campus.value !== initialFormData.campus ||
      formData.catalogNum !== initialFormData.catalogNum ||
      formData.subject !== initialFormData.subject;
    setShowResults(formChanged);
    setPrevSearchTerm(formData.searchTerm);
    if (formChanged) {
      searchTrigger({
        searchTerm: formData.searchTerm,
        term: formData.term.value,
        campus: formData.campus.value,
        subject: formData.subject,
        catalogNum: formData.catalogNum,
      });
    }
  };

  const search_2 = (tag: string) => {
    setShowResults(true);
    setPrevSearchTerm(formData.searchTerm);
    searchTrigger({
      searchTerm: tag,
      term: formData.term.value,
      campus: formData.campus.value,
      subject: formData.subject,
      catalogNum: formData.catalogNum,
    });

  };

  useEffect(() => {
    search();
  }, []);

  const searchClass = (e: SyntheticEvent) => {
    e.preventDefault();
    search();
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
                  setShowFilter(() => false);
                  dispatch(searchActions.clearTerm());
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
            searchResult.isFetching ? (
              <div>Loading</div>
            ) : searchResult.isSuccess ? (
              <>
                <p className="text-3xl font-bold">
                  {searchResult.data.length ? "Search " : "No "}
                  Results for "{prevSearchTerm}"
                  {searchResult.data.length
                    ? `(${searchResult.data.length})`
                    : ""}
                </p>
                {searchResult.data.map(({ course }) => (
                  <Course
                    key={course.courseId}
                    courseId={course.courseId}
                    subject={course.subject}
                    catalogNumber={course.catalogNumber}
                    title={course.title}
                    description={course.description}
                    maxUnits={course.maxUnits}
                    campus={course.campus}
                    academicCareer={course.academicCareer}
                  />
                ))}
                {/* <div>
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
                </div> */}
              </>
            ) : (
              <div>Error</div>
            )
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
                    <FeaturedLink onClick={() => {
                      // searchTrigger({
                      //   searchTerm: "Easy Classes",
                      //   term: formData.term.value,
                      //   campus: formData.campus.value,
                      //   subject: formData.subject,
                      //   catalogNum: formData.catalogNum,
                      // })
                      search_2("Easy Classes")
                      dispatch(searchActions.setSearchTerm("Easy Classes"))
                      }
                      }>Easy Classes</FeaturedLink>
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
                    <FeaturedLink
                      onClick={() => {
                        dispatch(searchActions.setSearchTerm("Finance"));
                        searchTrigger({
                          searchTerm: "Finance",
                          term: formData.term.value,
                          campus: formData.campus.value,
                          subject: formData.subject,
                          catalogNum: formData.catalogNum,
                        });
                      }}
                    >Finance</FeaturedLink>
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
