import React, { useContext, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser, FaBookReader } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ReactTooltip from "react-tooltip";
import Button from "react-bootstrap/Button";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const [currentState, setCurrentState] = useState("");

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    console.log(`location.pathname`, location.pathname);
    setCurrentState(location.pathname);
    console.log({ currentState });
  });
  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link className="me-3" to="/">
            {<FaBookReader size={30}></FaBookReader>}
          </Link>
          <Link to="/">Sikkhayon Academy</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="me-auto">
            <Nav.Item>
              <Nav.Link eventKey="/courses">
                <Link className=" text-dark" to="/courses">
                  Courses
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/faq">
                <Link className=" text-dark" to="/faq">
                  FAQ
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/blog">
                <Link className=" text-dark" to="/blog">
                  Blog
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <div className="me-2">
              <BootstrapSwitchButton
                checked={true}
                size="sm"
                onlabel="Light"
                offlabel="Dark"
                width="30px"
                onstyle="info"
                offstyle="dark"
                style="border"
              />
            </div>
            <>
              {user?.uid ? (
                <>
                  <Link to="/" className="me-2">
                    {user?.photoURL ? (
                      <Image
                        style={{ height: "30px" }}
                        data-tip={user?.displayName}
                        roundedCircle
                        src={user?.photoURL}
                      ></Image>
                    ) : (
                      <FaUser></FaUser>
                    )}
                  </Link>
                  <ReactTooltip />
                  <Button variant="light" onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link
                    className={`me-2 ${
                      currentState === "/login" ? "d-none" : ""
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className={`${currentState === "/login" ? "" : "d-none"}`}
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
