import React from "react";
import Row from "react-bootstrap/Row";
import Header from "./components/header";
import Feedback from "./components/feedback";
import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <title>Contact Us | PaladiumTechServiceLimited </title>
      <Header />
      <Row xs={1} md={2} className="g-4">
        <Feedback className="feedback" />
      </Row>
    </div>
  );
}

export default Contact;
