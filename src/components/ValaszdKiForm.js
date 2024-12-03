import Button from "react-bootstrap/Button";
import React, { useContext, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { ApiContext } from "../contexts/ApiContext";
import ValaszOption from "./ValaszOption";

function ValaszdKiForm(props) {
  const mondat = props.elem.mondat;
  let reszek = mondat.split("_");
  const {valaszok, setValaszok, getAdat} = useContext(ApiContext)
  useEffect(() => {
    getAdat(`exercises-with-answers/${props.elem.exercise_id}`, setValaszok);
  }, []);
  console.log(props.elem.exercise_id)
  return (
    <div>
      <Form>
        <Container className="w-50 gap-4">
          <Row>
            <Col>
              <p className="m-elso text-end">{reszek[0]}</p>
            </Col>
            <Col>
              <Form.Select>
                {
                valaszok.map(
                    (elem,i)=>{
                        return <ValaszOption elem={elem} key={i}/>
                    }
                  )
                }
              </Form.Select>
            </Col>
            <Col>
              <p className="m-masodik text-start">
                {reszek[1]} ({props.elem.alap})
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
