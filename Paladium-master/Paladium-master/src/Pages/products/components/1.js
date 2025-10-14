import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import "./body.css"

function StaffInfo() {
  return (
    <div className="prodcont1">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col className="col1">
            <span>
              Our company, being an intermediary company, offers different
              technical spare parts for all common vehicle types in the car and
              commercial vehicle sector. Our priority is our clients'
              requirements and we ensure that the spare parts are available just
              when customers need them.
            </span>
          </Col>
          <Col>We offer following items:</Col>
          <Col>Accessories</Col>
          <Col>Belt Drive</Col>
          <Col>Body & Lamp Assembly</Col>
          <Col>Brake & Wheel Hub</Col>
          <Col>Cooling System</Col>
          <Col>Drivetrain</Col>
          <Col>Electrical</Col>
          <Col>Electrical-Bulb & Socket</Col>
          <Col>Electrical-Connector</Col>
          <Col>Electrical-Switch & Relay</Col>
          <Col>Engine</Col>
          <Col>Exhaust & Emission</Col>
          <Col>Fuel & Air</Col>
          <Col>Heat & Air Conditioning</Col>
          <Col>Ignition</Col>
          <Col>Interior</Col>
          <Col>Steering</Col>
          <Col>Suspension</Col>
          <Col>Transmission-Automatic</Col>
          <Col>Wheel</Col>
          <Col>Wiper & Washer</Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              {/* <Card.Img variant="top" src={img} /> */}
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
