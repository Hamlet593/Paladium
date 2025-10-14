import karen from "../../about/components/pics/Karen.JPG";
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
              <Card.Img variant="top" src={karen} alt="#"/>
            </Card>
          </Col>
        </div>
        <div className="stinfo">
          <Col><h5>Aviation engineer, Electrical engineer</h5></Col>
          <Col>
            <span>
              Karen has comprehensive working experience in aircraft
              maintenance, tracking systems and helicopter parts maintenance, in
              performing complex tasks in post and pre-flight stages. Skilled
              specialist in disassembling and reassembling airframes, engines,
              main and tail rotor assemblies and gear boxes and other component
              parts as required to keep equipment in air-worthy condition. Karen
              has deep knowledge of procedures, practices, and techniques of
              airframe and power plant repairs on helicopters. Karen has
              military educational background and military work experince. He
              has passed courses of production and operation of UAV, preparation
              and execution of flights, installation and dismantling of
              electrical harnesses of unmanned aerial vehicles. He has designed
              and tested electrical systems for automobiles and aircraft,
              including communications systems, power generators, motors and
              navigation systems.
            </span>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default StaffInfo;
