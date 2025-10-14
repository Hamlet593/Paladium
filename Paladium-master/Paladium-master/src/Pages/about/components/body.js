import { NavLink } from "react-bootstrap"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./body.css";
import armen from "./pics/armen-koghq1.jpg";
import arsen from "./pics/arsen-koghq.jpg";
import ashot from "./pics/ashot-koghq1.jpg";
import karen from "./pics/karen-koghq1.jpg";

function GridExample() {
  return (
    <div className="aboutus1">
      <div className="abb1">
        <span>
          PaladiumTechService Limited is a multi-directional company specialized
          in providing comprehensive testing, maintenance and engineering
          services to a variety of industries including IT, data centers,
          commercial and industrial industries. Our professional staff brings
          their experience and expertise to every project to ensure compliance
          and, most importantly, safety. PaladiumTechService Limited is also an
          intermediary company that provide broker service to clients by
          presenting as a connecting link between the seller and the buyer.
        </span>
      </div>
      <div className="abb2">
        <div className="abtext">
          <h3>
            {/* <NavLink to="/staff">Our Staff</NavLink> */}
            Our Staff
          </h3>
        </div>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" alt="ArsenHovsepyan" src={arsen} />
              <Card.Body>
                <Card.Title>
                  <NavLink href="/ArsenHovsepyan">ARSEN HOVSEPYAN</NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" alt="ArmenKhachatryan" src={armen} />
              <Card.Body>
                <Card.Title>
                  <NavLink href="/ArmenKhachatryan">ARMEN KHACHATRYAN</NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" alt="AshotGevorgyan" src={ashot} />
              <Card.Body>
                <Card.Title>
                  <NavLink href="/AshotGevorgyan">ASHOT GEVORGYAN</NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" alt="KarenGrigoryan" src={karen} />
              <Card.Body>
                <Card.Title>
                  <NavLink href="/KarenGrigoryan">KAREN GRIGORYAN</NavLink>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GridExample;
