import ashot from "../../about/components/pics/Ashot22.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./staff.css";
import { Row } from "react-bootstrap";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img variant="top" src={ashot} alt="#"/>
            </Card>
          </Col>
        </div>
        <div className="stinfo">
          <Col><h5>Aviation Composite Technician</h5></Col>
          <Col>
            <span>
              Ashot has more than 10 years of experience in working, repairing
              and maintaining aircrafts. He has performed repairs using oven
              processes and vacuum techniques to components with fibre glass,
              aramid, carbon fibre and other advanced carbon and composed
              materials. He maintained an aircraft's electronic instruments,
              such as radio communication devices and equipment, radar systems,
              and navigation aids, designing aircraft’s parts and propulsion
              systems and in studying the aerodynamic performance of aircraft
              and construction materials. He has passed courses of production
              and operation of UAV, preparation and execution of UAV flights,
              designing and building parts of UAV form composed materials.
            </span>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
