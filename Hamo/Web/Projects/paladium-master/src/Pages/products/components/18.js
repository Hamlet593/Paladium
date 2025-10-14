import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../pics/tank.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col>
            VOLCANO-07P is intended for the destruction of armored objects,
            low-flying objects, as well as for the destruction of
            fortifications. It can be used both in a stationary version for the
            defense line and in a mobile version. Missile launch control system
            integrates electro-optical sighting and aiming, positioning
            navigation and missile launch, capable of reconnaissance and strike
            as a single unit. The system can launch missile to carry out
            precision strike against various enemy targets such as tanks,
            armored vehicles and fire points.
          </Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img variant="top" src={img} alt="communication" />
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;