import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "./pics/rob2.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
        <Col>
              JP-REOD400 is a small and medium-sized multipurpose robot with
              two-handed claw design. It has small size, weights only 37kg, and
              belongs to the small multi-purpose robot. While its operation
              capacity has reached the standard of medium multipurpose robot,
              and the maximum grasping weight is up to 16KG.
            </Col>
            <Col>Technical specifications are:</Col>
            <Col>Size≤830mm×600mm×460mm</Col>
            <Col>Weight≤ 37kg</Col>
            <Col>Speed≥ 1.7m/s</Col>
            <Col>Verticle obstacle clearing capability：400mm</Col>
            <Col>Grabbing properties:6-16kg</Col>
            <Col>Control distance:500m</Col>
            <Col>Protection grade:IP66</Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img className="robimg" variant="top" src={img} alt="robimg"/>
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;