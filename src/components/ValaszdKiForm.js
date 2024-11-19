import Button from "react-bootstrap/Button";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

function ValaszdKiForm() {
  return (
    <div>
      <Form>
        <Container className="w-50 gap-4">
          <Row>
            <Col>
              <p className="m-elso text-end">aaaaaaaaaa</p>
            </Col>
            <Col>
              <Form.Select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Form.Select>
            </Col>
            <Col>
              <p className="m-masodik text-start">
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default ValaszdKiForm;
