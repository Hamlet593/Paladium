import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import serv1 from "../../../Components/carousel1/pics/Autoservice.jpg";
import serv2 from "../../../Components/carousel1/pics/IT.jpg";
import serv3 from "../../../Components/carousel1/pics/Communication.png";
import serv4 from "../../../Components/carousel1/pics/Training.jpg";
import { Link } from "react-router-dom";

function GridExample() {
  return (
    <div className="servcardcont">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" alt="AutoServices" src={serv1} />
            <Card.Body>
              <Card.Title>
                <Link to="/AutoServices">AUTO SERVICES</Link>
              </Card.Title>
              <Card.Text>
                Vehicles need maintenance from time to time. Our dedicated
                experts provide high quality vehicle maintenance and service in
                order to maximize the life and performance of our clients'
                vehicles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" alt="ITServices" src={serv2} />
            <Card.Body>
              <Card.Title>
                <Link to="/ITServices">IT SERVICES</Link>
              </Card.Title>
              <Card.Text>
                Our company designs, develops, implements, manages and optimizes
                access to systems and information to answer your business
                processing and infrastructure needs. We can provide IT service
                you need to improve efficiency, add value and lower costs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" alt="MaintenanceOfCommunucationEquipment" src={serv3} />
            <Card.Body>
              <Card.Title>
                <Link to="/MaintenanceOfCommunucationEquipment">MAINTENANCE OF COMMUNICATION EQUIPMENT</Link>
              </Card.Title>
              <Card.Text>
                Our experts are specialized in the installing, sustaining,
                troubleshooting and repairing standard, voice, data, video
                networks and devices in order to minimize equipment downtime.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" alt="TrainingAndTesting" src={serv4} />
            <Card.Body>
              <Card.Title>
                <Link to="/TrainingAndTesting">TRAINING AND TESTING</Link>
              </Card.Title>
              <Card.Text>
                Also we ensure the testing for our Customers, purchased products
                that helps our clients to compare actual and expected results in
                order to improve quality.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;