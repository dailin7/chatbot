import React from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useParams } from "react-router-dom";

import CourseTag from "./CourseTag";
import FeaturedLink from "./FeaturedLink";

import { sampleCourse } from "./sampleCourse";

const details = sampleCourse.course;
const sections = sampleCourse.sections;
const section = sections[0];

const CourseDetails = () => {
  // const { courseId } = useParams();
  // console.log(section);

  return (
    <div className="max-w-[1536px] w-[90%] mx-auto mt-6">
      <Link to="/">
        <FeaturedLink direction="left">Back to Search</FeaturedLink>
      </Link>
      <p className="font-normal mt-3">{`${details.subject} ${details.catalogNumber}`}</p>
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-0">
        <div className="relative z-10 sm:w-1/2">
          <p className="mr-1 text-3xl font-bold mb-4">{details.title}</p>
          <div className="flex flex-wrap gap-4 my-2">
            <CourseTag>{`${details.maxUnits} Credit Hours`}</CourseTag>
            <CourseTag className="hidden xs:block">
              {details.academicCareer}
            </CourseTag>
            <CourseTag className="hidden xs:block">{details.campus}</CourseTag>
          </div>
        </div>
        <div className="relative z-10 sm:w-1/2">
          <p className="text-sm p-5 bg-white shadow-md">
            {details.description}
          </p>
        </div>
      </div>
      <div className="absolute left-0 w-[100vw] h-[200px] -skew-y-3 bg-scarlet" />
      <p className="relative z-10 text-3xl text-white font-bold mt-8 sm:mt-12 md:mt-16 mb-5">
        Sections
      </p>
      <div className="relative z-10">
        {sections.map((section) => (
          <Accordion square={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <div className="w-full flex gap-4 lg:items-center">
                <div>
                  <p className="font-bold text-sm">Type</p>
                  <p className="w-[100px]">{section.component}</p>
                </div>
                {section.meetings.map(
                  ({
                    monday,
                    tuesday,
                    wednesday,
                    thursday,
                    friday,
                    startTime,
                    endTime,
                    buildingDescription,
                    instructors,
                  }) => (
                    <div className="w-full flex md:flex-col gap-4 md:gap-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1 lg:gap-4">
                        <div className="md:h-auto md:w-1/2 xl:w-1/3 ">
                          <p className="font-bold text-sm">Time</p>
                          <div className="flex flex-col xs:flex-row gap-2 xs:items-center">
                            <div className="flex gap-2 items-center">
                              {monday && (
                                <CourseTag className="w-6 h-6 flex items-center justify-center text-base">
                                  M
                                </CourseTag>
                              )}
                              {tuesday && (
                                <CourseTag className="w-6 h-6 flex items-center justify-center text-base">
                                  Tu
                                </CourseTag>
                              )}
                              {wednesday && (
                                <CourseTag className="w-6 h-6 flex items-center justify-center text-base">
                                  W
                                </CourseTag>
                              )}
                              {thursday && (
                                <CourseTag className="w-6 h-6 flex items-center justify-center text-base">
                                  Th
                                </CourseTag>
                              )}
                              {friday && (
                                <CourseTag className="w-6 h-6 flex items-center justify-center text-base">
                                  F
                                </CourseTag>
                              )}
                            </div>
                            <div className="xs:border-l-2 border-gray-200 xs:pl-2">
                              {startTime} - {endTime}
                            </div>
                          </div>
                        </div>
                        <div className="md:w-1/4 xl:w-1/3">
                          <p className="font-bold text-sm">Location</p>
                          {buildingDescription}
                        </div>
                        <div className="md:w-1/4 xl:w-1/3">
                          <p className="font-bold text-sm">Instructor</p>
                          {instructors[0].displayName}
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <p>
                <span className="font-bold">Course ID: </span>
                {section.courseId}
              </p>
              <p>
                <span className="font-bold">Section: </span>
                {section.section}
              </p>
              <p>
                <span className="font-bold">Instruction Mode: </span>
                {section.instructionMode}
              </p>
              {section.attributes.map(({ name, description }) => (
                <p>
                  <span className="font-bold">{name}: </span>
                  {description}
                </p>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <div className="h-12" />
    </div>
  );
};

export default CourseDetails;
