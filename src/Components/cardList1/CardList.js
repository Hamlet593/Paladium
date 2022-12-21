import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./style.css";
import serv1 from "./pics/autoservice.svg";
import serv2 from "./pics/it.svg";
import serv3 from "./pics/phone.svg";
import serv4 from "./pics/test.svg";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

function GridExample() {
  return (
    <div className="servcont">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={serv1} />
            <Card.Body>
              <Card.Title>
                <Link to="/AutoServices">AUTO SERVICES</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={serv2} />
            <Card.Body>
              <Card.Title>
                <Link to="/ITServices">IT SERVICES</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" src={serv3} />
            <Card.Body className="card-body-list">
              <Card.Title>
                <Link to="/MaintenanceOfCommunucationEquipment">
                  MAINTENANCE OF COMMUNICATION EQUIPMENT
                </Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={serv4} />
            <Card.Body>
              <Card.Title>
                <Link to="/TrainingAndTesting">TRAINING AND TESTING</Link>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;
