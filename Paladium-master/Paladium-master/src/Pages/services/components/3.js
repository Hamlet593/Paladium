import serv1 from "../../../Components/carousel1/pics/Communication.png";
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
              Our experts are specialized in the installing, sustaining,
              troubleshooting and repairing standard, voice, data, video
              networks and devices in order to minimize equipment downtime.
            </span>
          </Col>
          <Col className="stinfocol">
            <p>Diagnosis of technical problems of communication equipment;</p>
          </Col>
          <Col className="stinfocol">
            <p>Identify and eliminate the causes of malfunctions;</p>
          </Col>
          <Col className="stinfocol">
            <p>
              Connection of communication equipment parameters and
              specifications to standards
            </p>
          </Col>
          <Col className="stinfocol">
            <p>
              Capital repair resources (conditions) & extension of service life
            </p>
          </Col>
          <Col className="stinfocol">
            <p>
              Inspection of communication equipment, cleaning, adjustment of
              contacts, switches, connectors;
            </p>
          </Col>
          <Col className="stinfocol">
            <p>Repair and upgrade of internal network automation system;</p>
          </Col>
          <Col className="stinfocol">
            <p>Repair of cordless phones, replacement if necessary;</p>
          </Col>
          <Col className="stinfocol">
            <p>Replacement of rechargeable batteries;</p>
          </Col>
          <Col className="stinfocol">
            <p>
              Ensuring uninterrupted operation of video surveillance systems,
              repair, updating;
            </p>
          </Col>
          <Col className="stinfocol">
            <p>
              Ensuring uninterrupted operation of sound alarm systems, repair,
              updating.
            </p>
          </Col>
          <Col className="stinfocol">
            <p>Online and offline staff training upon request.</p>
          </Col>
          <Col className="stinfocol">
            <p>Cable diagnostics and update․</p>
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
