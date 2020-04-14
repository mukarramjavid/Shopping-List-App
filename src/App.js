import React from "react";
import "./App.css";
import Compound from "./Components/Compound";
import { Grid, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      {" "}
      <Grid>
        <Row className="show-grid text-center">
          <Col md={12} xs={12}>
            <h1>Shopping List App</h1>
          </Col>
        </Row>
        <Compound />
      </Grid>
    </>
  );
}

export default App;
