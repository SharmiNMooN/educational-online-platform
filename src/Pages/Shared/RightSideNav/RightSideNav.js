import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Category from "../../Category/Category";

const RightSideNav = ({ categories }) => {
  return (
    <div>
      <div className="mt-4">
        <h5 className="text-center">Course Categories</h5>
        <ListGroup>
          {categories?.map((category, index) => (
            <Category category={category} key={category.id}></Category>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default RightSideNav;
