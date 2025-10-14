import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col>
            <span>
              Our company, being an intermediary company, offers different
              technical spare parts for tracked vehicles. Our priority is our
              clients' requirements and we ensure that the spare parts are
              available just when customers need them.
            </span>
          </Col>
          <Col className="prodcomp">We offer following items:</Col>
          <Col className="prodcomp">Track Assemblies</Col>
          <Col>Grouser Bars, Backing Plates, Rebars</Col>
          <Col>Belting, Splice</Col>
          <Col>Urethane Sprockets</Col>
          <Col>Wheels & Tires</Col>
          <Col>Axles, Spindles & Hubs</Col>
          <Col>Suspension Components</Col>
          <Col>Controlled Differentials, Parts And Rebuilds</Col>
          <Col>Bearings, Seals & Gaskets</Col>
          <Col className="prodcomp">For more information please contact us.</Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              {/* <Card.Img variant="top" src={img} /> */}
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
