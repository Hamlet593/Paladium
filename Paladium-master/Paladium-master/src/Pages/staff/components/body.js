import { NavLink } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "./body.css";
import armen from "../../about/components/pics/armen-koghq1.jpg";
import arsen from "../../about/components/pics/arsen-koghq.jpg";
import ashot from "../../about/components/pics/ashot-koghq1.jpg";
import karen from "../../about/components/pics/karen-koghq1.jpg";

function GridExample() {
  return (
    <div>
      <div className="abb2">
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" alt="ArsenHovsepyan" src={arsen} />
              <Card.Body>
                <Card.Title><Link to="/ArsenHovsepyan">ARSEN HOVSEPYAN</Link></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" alt="ArmenKhachatryan" src={armen} />
              <Card.Body>
                <Card.Title><Link to="/ArmenKhachatryan">ARMEN KHACHATRYAN</Link></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" alt="AshotGevorgyan" src={ashot} />
              <Card.Body>
                <Card.Title><Link to="/AshotGevorgyan">ASHOT GEVORGYAN</Link></Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" alt="KarenGrigoryan" src={karen} />
              <Card.Body>
                <Card.Title><Link to="/KarenGrigoryan">KAREN GRIGORYAN</Link></Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default GridExample;