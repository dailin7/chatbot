import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import CourseTag from "./CourseTag";
import FeaturedLink from "./FeaturedLink";

interface IProps {
  courseId: string;
  subject: string;
  catalogNumber: string;
  title: string;
  description: string;
  maxUnits: number;
  campus: string;
  academicCareer: string;
}

const Course = ({
  courseId,
  subject,
  catalogNumber,
  title,
  description,
  maxUnits,
  campus,
  academicCareer,
}: IProps) => {
  const { width } = useWindowDimensions();
  const cutoff = width >= 1024 ? 200 : width >= 640 ? 100 : 50;

  return (
    <div>
      <p className="text-sm border-t-2 border-gray-200 pt-4 mt-6">{`${subject} ${catalogNumber}`}</p>
      <Link
        to={`/course/${courseId}`}
        className="font-bold text-xl hover:underline"
      >
        <FeaturedLink className="after:hidden sm:after:block">
          <p className="mr-1">{title}</p>
        </FeaturedLink>
      </Link>
      <p className="text-sm mt-2 mb-4">
        {description.substring(0, cutoff) + "..."}
      </p>
      <div className="flex flex-wrap gap-4 my-2">
        <CourseTag>{`${maxUnits} Credit Hours`}</CourseTag>
        <CourseTag className="hidden xs:block">{academicCareer}</CourseTag>
        <CourseTag className="hidden xs:block">{campus}</CourseTag>
      </div>
    </div>
  );
};

export default Course;
