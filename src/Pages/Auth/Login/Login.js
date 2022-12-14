import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        console.log({ result });
        navigate(from, { replace: true });
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          toast.error(
            "Your email is not verified. Please verify your email address."
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-primary w-60 ">
      <h1 className="text-center text-white">Sign In</h1>
      <Form onSubmit={handleSubmit} className="w-50 w-sm-100 m-auto">
        <Form.Group
          className="mb-4 text-white"
          controlId="formBasicEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            className="border-4 border-dark"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group
          className="mb-4 text-white"
          controlId="formBasicPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            className="border-4 border-dark"
            required
          />
        </Form.Group>

        <div className="">
          <Button
            variant="light"
            className="border-4 border-dark me-2"
            type="submit"
          >
            Login
          </Button>

          <Button variant="warning" className="border-4 border-dark">
            <Link to="/register">Register</Link>
          </Button>
            <Form.Text className="text-danger me-4">{error}</Form.Text>
        </div>
      </Form>
      <div className="text-center">
        <h5 className="text-white">Social login</h5>
        <ButtonGroup vertical>
          <Button
            onClick={handleGoogleSignIn}
            className=""
            variant="outline-light"
          >
            {" "}
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button onClick={handleGithubSignIn} variant="outline-light mb-4">
            {" "}
            <FaGithub></FaGithub> Login with Github
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Login;
