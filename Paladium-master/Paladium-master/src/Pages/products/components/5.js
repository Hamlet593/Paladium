import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../pics/plate1.jpg";
import "./body.css";

function StaffInfo() {
  return (
    <div className="staffcont">
      <Row xs={1} md={2} className="g-4">
        <div className="stinfo">
          <Col>
            Our company, being an intermediary company, offers armor plates to
            defend against threats including handguns, shot guns, and
            high-powered rifles. The hard ballistic plate combines light weight
            with extremely strong protection. The plate has minimal no
            protection areas and not, as usual, a wide no protection edge. Thus,
            it has a more comprehensive protection area on the entire plate.
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
