import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();

  return <div>{courseId}</div>;
};

export default CourseDetails;
