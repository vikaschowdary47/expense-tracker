import React from "react";
import Form from "./Form";
import Expenses from "./Expenses";
import { Container, Row, Col } from "react-bootstrap";

const Main = () => {
  return (
    <div className="main">
      <Row>
        <Col>
          <Form />
        </Col>
        <Col md={12} lg={6}>
          <Expenses />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
