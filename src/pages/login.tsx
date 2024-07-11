import axios from "axios";
import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const response = await axios
      .post("http://localhost:3000/admin/auth/signIn", {
        email,
        password,

        method: "POST",
      })
      .then((result) => {
        sessionStorage.setItem("token", result.data.token);
        console.log(result.data.token);
        alert("login successfully!");
        navigate("/");
      });
  };
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-2 border-primary"> </div>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Logo
                  </h2>
                  <div className="mb-3">
                    <div className="mb-3 mt-md-4">
                      <div className="mb-3">
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
                        <Form.Group className="mb-3"></Form.Group>
                        <div className="d-grid mt-4">
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={login}
                          >
                            Login
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don`t have an account??{" "}
                        <a href="/register" className="text-primary fw-bold">
                          Sign Up
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
