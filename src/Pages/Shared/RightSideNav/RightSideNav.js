import React from "react";
import { FaBook } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const RightSideNav = ({ categories }) => {
  return (
    <div>
      <div className="mt-4">
        <h5>Course Categories</h5>
        <ListGroup>
          {categories?.map((category, index) => (
            <ListGroup.Item className="mb-2">
              <Link to={`categories/${category.id}`}>
                <FaBook className="me-2" />
                {category.name}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default RightSideNav;
