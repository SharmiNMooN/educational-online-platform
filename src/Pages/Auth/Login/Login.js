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
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" className="me-2" type="submit">
          Login
        </Button>
        <Form.Text className="text-danger me-2">{error}</Form.Text>
        <Button variant="info">
          <Link to="/register">Register</Link>
        </Button>
      </Form>
      <div className="text-center">
        <h5>Social login</h5>
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
      </div>
    </div>
  );
};

export default Login;
