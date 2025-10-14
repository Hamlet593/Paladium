import arsen from "../../about/components/pics/Arsen.JPG";
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
              <Card.Img variant="top" src={arsen} alt="#"/>
            </Card>
          </Col>
        </div>
        <div className="stinfo">
          <Col><h5>Mechanical engineer, Specialist in Weapons and Accessories</h5></Col>
          <Col>
            <span>
              Arsen dedicated more than 20 years of experience in maintaining
              vehicles, armored vehicles, operating and maintaining a wide
              variety of weaponry. He is specialized in inspecting, storing, and
              maintaining small arms and ammunition. Arsen has worked on a wide
              variety of projects, including maintaining missile defense
              systems, testing body armor and developing conventional weapons.
              Arsen has military educational background and in addition he
              served in army for more than 20 years. Expert in weaponry and
              defense items such as safety goggles, body armors and accessories,
              helmets, optical devices, in applied research, simulation, new
              content development, and validation.
            </span>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
