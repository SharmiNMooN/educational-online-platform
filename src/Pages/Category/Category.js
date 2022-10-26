import React from "react";
import { FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
const Category = ({ category }) => {
  return (
    <ListGroup.Item className="mb-2 bg-light">
      <Link to={`categories/${category.id}`}>
        <FaBook className="me-2 text-black" />
        {category.name}
      </Link>
    </ListGroup.Item>
  );
};

export default Category;
