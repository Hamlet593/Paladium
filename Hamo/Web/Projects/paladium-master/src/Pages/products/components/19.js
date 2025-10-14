import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "./pics/VX-5.png";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
            <Col>Main specifications:</Col>
            <Col>Combat Range: 75 km</Col>
            <Col>Max Range: 150 km</Col>
            <Col>Max Speed: 120 km/h</Col>
            <Col>Max Flight Attitude: 3500 m </Col>
            <Col>CEP: 1.5 m</Col>
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