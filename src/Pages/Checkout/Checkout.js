import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaDownload } from "react-icons/fa";
const Checkout = () => {
  const course = useLoaderData();
  console.log({ course });
  const { title, details, image_url, author, start_date, total_enrolled } =
    course;
  return (
    <Card>
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
            <p>Course Start at: {start_date}</p>
          </div>
        </div>
        <div>
          <Link>
            <FaDownload className="me-2"></FaDownload>
          </Link>
        </div>
      </Card.Header>
      <Card.Img variant="top" src={image_url} style={{ height: "320px" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>Duration: {course.duration}</div>
        <div>Price: {course.price}/- tk</div>
        <div>
          Total enrolled:
          <span>{total_enrolled ?? 0}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Checkout;
