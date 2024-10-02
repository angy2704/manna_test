// pages/Home.js
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Card, Container, Form, Button } from "react-bootstrap";

import bg from "../assets/images/bg.png";
import Logo from "../assets/images/Logo.svg";

const Login = () => {
  return (
    <div>
      <Container>
        <Card>
          <Card.Body>
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6 p-20">
              <div className="row my-3">
                    <div className="col-md-12">
                        <Logo />
                    </div>
                  </div>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      autoComplete="off"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      autoComplete="off"
                    ></Form.Control>
                  </Form.Group>
                  <div className="row justify-content-between my-3">
                    <div className="col-md-6">
                      <Form.Group controlId="formBasicCheckbox">
                        <Form.Check
                          type="checkbox"
                          label="Remember me"
                          defaultChecked={false}
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                      <Link to="#">Forgot Password?</Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                        <Button className="w-100">Login /Sign in</Button>
                    </div>
                  </div>
                  <div className="row my-3">
                    <div className="col-md-12">
                        <p className="text-center">Don't have an account? <Link to="#">Sign Up</Link></p>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
