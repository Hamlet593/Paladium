import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";
import serv1 from "./pics/autoservice.svg";
import serv2 from "./pics/it.svg";
import serv3 from "./pics/phone.svg";
import serv4 from "./pics/test.svg";
import { NavLink } from "react-bootstrap";

function GridExample() {
  return (
    <div className="servcont">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={serv1} alt="Auto Services"/>
            <Card.Body>
              <Card.Title>
                <NavLink href="/AutoServices">Auto Services</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={serv2} alt="ITServices"/>
            <Card.Body>
              <Card.Title>
                <NavLink href="/ITServices">IT Services</NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={serv3} alt="MaintenanceOfCommunucationEquipment"/>
            <Card.Body className="card-body-list">
              <Card.Title>
                <NavLink href="/MaintenanceOfCommunucationEquipment">
                  Maintenance Of Communication Equipment
                </NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={serv4} alt="TrainingAndTesting"/>
            <Card.Body>
              <Card.Title>
                <NavLink href="/TrainingAndTesting">
                  Training And Testing
                </NavLink>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;
