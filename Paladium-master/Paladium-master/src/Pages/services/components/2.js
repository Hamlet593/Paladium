import serv1 from "../../../Components/carousel1/pics/IT.jpg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./serv.css";
import { Row } from "react-bootstrap";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col className="itinfo">
            <span>
              Our company designs, develops, implements, manages and optimizes
              access to systems and information to answer your business
              processing and infrastructure needs. We can provide IT service you
              need to improve efficiency, add value and lower costs.
            </span>
          </Col>
          <Col className="stinfocol">
            <p>Diagnosing and Repairing Running Gear Problems</p>
          </Col>
          <Col className="stinfocol">
            <p>Diagnostics of Electrical equipment</p>
          </Col>
          <Col className="stinfocol">
            <p>Replacement fuels and lubricants</p>
          </Col>
          <Col className="stinfocol">
            <p>Filter replacement as needed</p>
          </Col>
          <Col className="stinfocol">
            <p>Headlight adjustment</p>
          </Col>
          <Col className="stinfocol">
            <p>Adaptation of the air intake flap</p>
          </Col>
          <Col className="stinfocol">
            <p>Regulation of injection pump</p>
          </Col>
          <Col className="stinfocol">
            <p>Regulation of diesel injection</p>
          </Col>
          <Col className="stinfocol">
            <p>Checking of the Running Gear and replacement of it</p>
          </Col>
          <Col className="stinfocol">
            <p>Checking of the Suspension and replacement of it</p>
          </Col>
          <Col className="stinfocol">
            <p>Regulation of the Steering column</p>
          </Col>
          <Col className="stinfocol">
            <p>Checking and charging of the Air conditioning (AC)</p>
          </Col>
          <Col className="stinfocol">
            <p>Online or offline staff training (upon request)</p>
          </Col>
          <Col className="stinfocol">
            <p>Checking of the Suspension and replacement of it</p>
          </Col>
          <Col className="stinfocol">
            <p>Regulation of the Steering column</p>
          </Col>
          <Col className="stinfocol">
            <p>Checking and charging of the Air conditioning (AC)</p>
          </Col>
          <Col className="stinfocol">
            <p>Online or offline staff training (upon request)</p>
          </Col>
        </div>
        <div className="stimg">
          <Col>
            {/* <Card>
              <Card.Img variant="top" src={serv1} />
            </Card> */}
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
