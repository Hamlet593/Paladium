import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../pics/communication.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col>
            Our company, being an intermediary company, offers communication
            equipment that is used to present businesses with a unique
            opportunity to observe sentiment, wellbeing and engagement
            characteristics, all within the confines of purpose built software.
            Communication tools often feature purpose built data gathering tools
            enabling to observe data, trends and more in real time.
          </Col>
        </div>
        <div className="stimg">
          <Col>
            <Card>
              <Card.Img variant="top" src={img} alt="communication"/>
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
