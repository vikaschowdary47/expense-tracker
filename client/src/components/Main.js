import React, { useState } from "react";
import Form from "./Form";
import Expenses from "./Expenses";
import { Row, Col } from "react-bootstrap";

const Main = () => {
  const [data, setData] = useState(false);
  const [editData, setEditData] = useState([]);
  const [field, setField] = useState();

  return (
    <div className="main">
      <Row>
        <Col>
          <Form data={data} editData={editData} field={field} />
        </Col>
        <Col md={12} lg={6}>
          <Expenses data={setData} editData={setEditData} field={setField} />
        </Col>
      </Row>
    </div>
  );
};

export default Main;
