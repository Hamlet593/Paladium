import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import img from "../pics/Night.jpg";
import img2 from "../pics/Night2.jpg";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
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
      <div className="helmettext">
        <p>
          Our company, being an intermediary company, offers night vision
          optics. Night vision devices may be passive, relying solely on ambient
          light, or may be active, using an IR (infrared) illuminator to better
          visualize the environment. The devices can be handheld but many are
          head-mounted and attach to helmets.{" "}
        </p>
      </div>
      <div className="helmetimg">
        <Row xs={1} md={2} className="g-4">
          <Col className="slide1">
            <Card>
              <button className="btn" onClick={handleShow}>
                <Card.Img className="pic" variant="top" src={img} />
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Body className="modalbody1">
                  <img className="modalImg" alt="modalImg" src={img}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide1">
            <Card>
              <button className="btn" onClick={handleShow2}>
                <Card.Img className="pic" variant="top" src={img2} />
              </button>
              <Modal show={show2} onHide={handleClose2}>
                <Modal.Body className="modalbody1">
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
