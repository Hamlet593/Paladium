import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export function Text() {
  return (
    <div className="projtext">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            {/* <Card.Img variant="top" src={serv1} /> */}
            <Card.Body>
              <Card.Title>Exhibition 1</Card.Title>
              <Card.Text>
                Our company participated in various international exhibitions.
                One of them is Dubai Airshow helded in Dubai, UAE in 2021. 
              </Card.Text>
              <Button href="/exhibition1">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            {/* <Card.Img variant="top" src={serv2} /> */}
            <Card.Body>
              <Card.Title>Exhibition 2</Card.Title>
              <Card.Text>
                Our company participated in various international exhibitions.
                One of them is ISNR - International Exhibition for National
                Security and Resilience, helded in Abu Dhabi, UAE.
              </Card.Text>
            <Button href="/exhibition2">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Text;
