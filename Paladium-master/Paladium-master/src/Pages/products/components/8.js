import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import img from "../pics/daylight.jpg";
import img2 from "../pics/day.jpg";
import "./body.css";

function StaffInfo() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div className="workcont">
        <div className="opttext">
          <p>
            Our company, being an intermediary company, offers daylight optics
            such as binoculars, monoculars, safety goggles, spotting scopes for
            use within daylight hours.
          </p>
        </div>
        <div className="helmetimg">
          <Row xs={1} md={2} className="g-4">
            <Col className="slide">
              <Card>
                <button className="btn" onClick={handleShow}>
                  <Card.Img className="pic" variant="top" src={img} />
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Body>
                    <img className="modalImg" alt="modalImg" src={img}></img>
                  </Modal.Body>
                </Modal>
              </Card>
            </Col>
            <Col className="slide">
              <Card>
                <button className="btn" onClick={handleShow2}>
                  <Card.Img className="pic" variant="top" src={img2} />
                </button>
                <Modal show={show2} onHide={handleClose2}>
                  <Modal.Body>
                    <img className="modalImg" alt="modalImg" src={img2}></img>
                  </Modal.Body>
                </Modal>
              </Card>
            </Col>
          </Row>
        </div>
    </div>
  );
}

export default StaffInfo;