import serv1 from "../../../Components/carousel1/pics/Training.jpg";
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
              We provide online and offline training and testing services that
              gives a host of benefits: enhance employee performance, boost
              employee productivity, reduce employee turnover, and improve
              company culture. Explore the importance of training programs for
              employees and employers by pursuing a career in human resources.
              We offer the highest professional training in Auto Service, IT and
              Communication fields.
            </span>
          </Col>
          <Col className="stinfocol">
            <p>IT trainings include:</p>
          </Col>
          <Col className="stinfocol">
            <p>Cyber Security and Security Operations</p>
          </Col>
          <Col className="stinfocol">
            <p>Networking and Servers</p>
          </Col>
          <Col className="stinfocol">
            <p>Information Security</p>
          </Col>
          <Col className="stinfocol">
            <p>Other training upon request</p>
          </Col>
          <Col className="stinfocol1">
            <p>
              Also we ensure the testing for our Customers, purchased products
              that helps our clients to compare actual and expected results in
              order to improve quality.
            </p>
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
