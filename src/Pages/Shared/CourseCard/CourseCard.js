import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
  console.log(course);
  const {
    id,
    title,
    start_date,
    author,
    details,
    image_url,
    rating,
    total_enrolled,
  } = course;

  return (
    <Card className="mb-5">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            roundedCircle
            className="me-2"
            src={author?.img}
            style={{ height: "60px" }}
          ></Image>
          <div>
            <p className="mb-0">Instructor: {author?.name}</p>
            <p>Course Start at: {new Date(start_date).toLocaleDateString()}</p>
          </div>
        </div>
        <div>
          Rating: <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img
          variant="top"
          style={{ maxHeight: "200px" }}
          src={image_url}
        />
        <Card.Text>
          {details.length > 250 ? (
            <>
              {details.slice(0, 250) + "..."}{" "}
              <Link to={`/courses/${id}`}>Read More</Link>{" "}
            </>
          ) : (
            details
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>Price: {course.price}/- tk</div>
        <div>
          Total enrolled:
          <span>{total_enrolled ?? 0}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default CourseCard;
