import armen from "../../about/components/pics/Armen.jpg";
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
              <Card.Img variant="top" src={armen} alt="#"/>
            </Card>
          </Col>
        </div>
        <div className="stinfo">
          <Col><h5>Mechanical engineer, Specialist/Engineer in vehicles’ maintenance</h5></Col>
          <Col>
            <span>
              Armen has military educational background, more than 20 years of
              experience in military service and in maintenance of automobiles
              and other vehicles. He has qualification of controlling, operating
              and maintaining of unmanned aerial vehicles. Skilled producer of
              documentation and drawings associated with mechanical engineering.
              Possesses wide range of technical skills as well as training a
              productive team. Expert user of Solidworks in developing
              mechatronics systems from beginning to end, also in planning,
              visual ideation, modeling, feasibility assessment and prototyping.
            </span>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
