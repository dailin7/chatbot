import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <div>
      <hr className="my-6" />
      <p className="text-sm">{`${subject} ${catalogNumber}`}</p>
      <Link
        to={`/course/${courseId}`}
        className="font-bold text-xl hover:underline"
      >
        <FeaturedLink>
          <p className="mr-1">{title}</p>
        </FeaturedLink>
      </Link>
      <p className="text-sm text-ellipsis mt-2 mb-4">
        {description.substring(0, 100) + "..."}
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
