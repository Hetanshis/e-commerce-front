import axios from "axios";
import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const navigate = useNavigate();

  const register = async () => {
    const response = await axios.post(
      "http://localhost:3000/admin/auth/signUp",
      {
        name,
        email,
        password,
        contactNumber,
        method: "POST",
      }
    );
    console.log(response.data);
    alert("register successfully!");
    navigate("/login");
  };

  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"></div>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Logo
                  </h2>
                  <div className="mb-3">
                    <label className="mb-2">Name:</label>{" "}
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter name"
                      className="form-control"
                    />
                    <br />
                    <label className="mb-2">Email:</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      className="form-control"
                    />
                    <br />
                    <label className="mb-2">Password:</label>{" "}
                    <input
                      type="text"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter password"
                      className="form-control"
                    />
                    <br />
                    <label className="mb-2">ContactNumber:</label>{" "}
                    <input
                      type="text"
                      name="contactNumber"
                      id="contactNumber"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      placeholder="Enter contactNumber"
                      className="form-control"
                    />
                    <Form.Group className="mb-3"></Form.Group>
                    <div className="d-grid mt-4">
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={register}
                      >
                        Register
                      </Button>
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account??{" "}
                        <a href="/login" className="text-primary fw-bold">
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
