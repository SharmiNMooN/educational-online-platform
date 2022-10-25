import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Course = () => {
  const course = useLoaderData();
  console.log({ course });
  const { title, details, image_url, category_id } = course;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">Get premium access</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Course;
