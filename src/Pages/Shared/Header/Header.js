import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser, FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ReactTooltip from 'react-tooltip';
import Button from "react-bootstrap/Button";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
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
            {<FaBookReader></FaBookReader>}
          </Link>
          <Link to="/">Sikkhayon Academy</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <p className="me-2">
              <BootstrapSwitchButton  checked={true} size="sm" onlabel="Light" offlabel="Dark" width="30px" onstyle="info" offstyle="dark" style="border" />
            </p>
            <>
              {user?.uid ? (
                <>
                  <Link to="/profile"  className="me-2">
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
                  <Link className="me-2" to="/login">
                    Login
                  </Link>
                  <Link to="/register">Register</Link>
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
