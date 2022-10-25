import React from "react";
import { Outlet } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import RightSideNav from "../Pages/Shared/RightSideNav/RightSideNav";

const Main = () => {
  const AllCategories = useLoaderData();
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <RightSideNav categories={AllCategories}></RightSideNav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
