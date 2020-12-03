import React from "react";
import "./style.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from "../Clock";
import { Col, Row, Container } from "react-bootstrap";


const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

const Time = ()  => {

return (
<>
<Container>
  <Row >
    <Col md={4}>
        <span className="time">{currDate}</span>
    </Col>
    <Col md={{ span: 4, offset: 4 }}>    
    <span className="current"><Clock/></span>
    </Col>
  </Row>

{/* <span className="current">{currTime}</span> */}
{/* <span className="current"><Clock/></span> */}
</Container>
</>
)
}
export default Time;


