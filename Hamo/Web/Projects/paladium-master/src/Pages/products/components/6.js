import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../pics/vest1.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col>
            <span>
              Our company, being an intermediary company, offers bulletproof
              vests.
            </span>
          </Col>
          <Col className="prodcomp">
            Bulletproof Vest is an item of body armor that helps absorb the
            impact and reduce or stop penetration to the torso from
            firearm-fired projectiles and fragmentation from explosions. The
            vest may come in a soft form, as worn by many police officers,
            prison guards, security guards and some private citizens. There are
            also hard armors, either in conjunction with soft armor or alone.
            This allows for protection against rifle ammunition or
            fragmentation.
          </Col>
          <Col className="prodcomp">
            Comfortable and breathable carriers, featuring bulletproof ballistic
            panels, perfectly adapted for wearing under clothes. They can remain
            almost invisible to all but the wearer. Full bullet protection up to
            NIJ level III and IV available, and edged-blade and spike protection
            available on selected models.
          </Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img variant="top" src={img} alt="plate1"/>
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
