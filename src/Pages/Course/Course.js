import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { FaDownload } from "react-icons/fa";
import ReactToPdf from 'react-to-pdf';
const Course = () => {
  const course = useLoaderData();
  const ref = React.createRef();
  const { title, details, image_url, author, start_date, id } = course;
  return (
    <Card ref={ref}>
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
          <ReactToPdf targetRef={ref} filename={`${title}-details.pdf`}  x={.5} y={.5} scale={0.8}>
            {({toPdf}) => (
                <Link onClick={toPdf}>
                  <FaDownload className="me-2"></FaDownload>
                </Link>
            )}
          </ReactToPdf>
        </div>
      </Card.Header>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/checkout/${id}`}>
          <Button variant="primary">Get premium access</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Course;
