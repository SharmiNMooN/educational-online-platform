import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../Shared/CourseCard/CourseCard";
import { Col, Row } from "react-bootstrap";
const Home = () => {
  const AllCourses = useLoaderData();
  return (
    <div>
      <h2>Total Courses: {AllCourses.length}</h2>

      <Row>
        {AllCourses.map((course) => (
            <Col sx={12} sm={12} md={6} lg={6}>
            <CourseCard key={course.id} course={course}></CourseCard>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
