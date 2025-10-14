import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "./components/header";
import Feedback from "./components/feedback";
import Map from "./components/map";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <title>Contact Us | PaladiumTechServiceLimited </title>
      <Header />
      <Row xs={1} md={2} className="g-4">
          <Col className="emailcol">
            <Card>
              <Card.Body>
                <Feedback />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Map />
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </div>
  );
}

export default Contact;
