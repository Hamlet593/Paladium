import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../pics/uav2.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
        <Col className="prodcomp">
            Our company, being an intermediary company, offers multipurpose
            reconnaissance UAV. The system is developed in accordance with
            modern market and various application environment.
          </Col>
          <Col className="prodcomp">
            For more information please contact us.
          </Col>
            <Col className="prodcomp">
              The conventional layout of single rotor helicopter with tail rotor
              is adopted for UAV. UAV has two side mounting points for mounting
              task, and photoelectric pod is set at the lower part of the nose
              in which the camera can be hung. . All navigation, flight control
              and system monitoring tasks of UAV can be completed in the flight
              control module.
            </Col>
          <Col className="prodcomp">Main specifications are:</Col>
          <Col className="prodcomp">Max range 150km</Col>
          <Col>Max speed 120km/h</Col>
          <Col>Range 75km</Col>
          <Col>Maximal height 3500m</Col>
          <Col>For more information please contact us.</Col>
          <Col className="prodcomp">
            The UAV can be operated in flexible methods with either vehicle
            integrated launcher or portable catapult. The system also can carry
            various payloads for emergency relief, aerial mapping, disaster
            surveillance and evaluation, forest fire prevention, urban
            firefight, land and resources survey.
          </Col>
          <Col className="prodcomp">Main specifications are:</Col>
          <Col className="prodcomp">Max range 250km</Col>
          <Col>Max speed 160km/h</Col>
          <Col>Endurance ≥2.5h</Col>
          <Col>Control range 80km</Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img className="uavimg1" variant="top" src={img} alt="#"/>
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;