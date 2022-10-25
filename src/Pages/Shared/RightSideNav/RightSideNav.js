import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaBook } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const RightSideNav = ({ categories }) => {
  console.log({ categories });
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    githubProvider.addScope("repo");
    providerLogin(githubProvider)
      .then((result) => {
        console.log({ result });
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2"
          variant="outline-primary"
        >
          {" "}
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button onClick={handleGithubSignIn} variant="outline-dark">
          {" "}
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
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
