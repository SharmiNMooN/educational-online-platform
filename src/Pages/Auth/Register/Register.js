import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please verify your email address.");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <Container className="w-60 bg-primary">
      <Form onSubmit={handleSubmit} className="w-50 m-auto">
        <p className="text-center fw-bold text-white h1 mb-5 mx-1 mx-md-4 mt-4">
          Sign up
        </p>
        <Form.Group className="text-white my-4 " controlId="formBasicEmail">

          <Form.Label>Your Full Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Your Full Name" />
        </Form.Group>
        <Form.Group className="text-white my-4" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        </Form.Group>

        <Form.Group className="text-white my-4" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="text-white my-4" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group
          className="text-white d-flex "
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            label={
              <>
                I agree all statements in{" "}
                <Link to="/terms"> Terms of service</Link>
              </>
            }
          />
        </Form.Group>
        <Button
          className="mb-4 align-item-start"
          variant="light"
          type="submit"
          disabled={!accepted}
        >
          Register
        </Button>

        <Button className="mb-4 align-item-end" variant="warning">
          <Link to="/login">Login</Link>
        </Button>
        <Form.Text className=" mb-4 text-danger align-item-center me-2">
          {error}
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
