import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "./pics/rob1.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
        <Col>
              JP-R30 portable reconnaissance robot is the latest generation of
              reconnaissance robot with built-in image sensor, audio collector,
              infrared lamp module, accelerometer, etc. It can effectively
              collect environmental information, realize remote visual combat
              command and day-night reconnaissance operations, with high
              reliability and strong practicality.
            </Col>
            <Col>Technical specifications are:</Col>
            <Col>Size: 280×270×115mm</Col>
            <Col>Weight: ≤3.2kg</Col>
            <Col>Maximum vertical drop height: ≥5 m</Col>
            <Col>Maximum obstacle height: ≥100mm</Col>
            <Col>Visual remote control distance: ≥500m</Col>
            <Col>Continuous and stable maximum driving speed: ≥2m/s</Col>
            <Col>Night vision distance (clear sky without moon) : ≥40m</Col>
            <Col>Continuous working hours: ≥ 2h</Col>
            <Col>Operating temperature: -40℃ ~ +55℃</Col>
            <Col>Protection grade: ≥IP67</Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img className="robimg" variant="top" src={img} alt="rob1"/>
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;