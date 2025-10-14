import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../pics/uav.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
        <Col>
            <span>
              Our company, being an intermediary company, offers multipurpose
              striking UAV. The system is developed in accordance with
              requirement from modern market and various application
              environment.
            </span>
          </Col>
          <Col className="prodcomp">
            For more information please contact us.
          </Col>
          <Col className="prodcomp">
            The UAV aerial platform uses a highly sophisticated and low cost air
            frame made of foam material and designed as a hand launch system for
            easy operation and maintenance.
          </Col>
          <Col className="prodcomp">Main specifications are:</Col>
          <Col className="prodcomp">Max takeoff weight 7kg</Col>
          <Col>Control range 12km</Col>
          <Col>Warhead 1.5kg</Col>
          <Col>Endurance ≥1h</Col>
          <Col className="prodcomp">
            The UAV can be operated in flexible methods with either vehicle
            integrated launcher or portable catapult and it can effectively
            damage the heavy armored target.
          </Col>
          <Col className="prodcomp">Main specifications are:</Col>
          <Col className="prodcomp">Max range 150km </Col>
          <Col>Max speed 160km/h</Col>
          <Col>Control range 50km</Col>
          <Col>Warhead 8kg</Col>
          <Col>Endurance ≥1.5h</Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img className="uavimg1" variant="top" src={img} alt="uavimg1"/>
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;