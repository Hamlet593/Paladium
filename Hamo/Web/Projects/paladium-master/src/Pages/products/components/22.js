import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import img from "./pics/ZT-10P1.jpg";
import img2 from "./pics/ZT-10P2.jpg";
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
        <Col>Main tactical and technical specifications:</Col>
        <Col>
          Launch platform: individual soldier portable canister launch or
          vehicle multiple launcher launch
        </Col>
        <Col>Max range: ≮10km</Col>
        <Col>Accuracy (4m×6m typical target): CEP≯1.5m</Col>
        <Col>Power plant: electric：400mm</Col>
        <Col>Main flight performance specifications:</Col>
        <Col>Endurance: 40~50min</Col>
        <Col>Typical operational altitude: 50m~500m</Col>
        <Col>Loitering speed: 30m/s~35m/s</Col>
        <Col>Max speed: 45~55m/s</Col>
        <Col>Turning radius: ≤100m</Col>
        </p>
      </div>
      <div className="helmetimg">
        <Row xs={1} md={2} className="g-4">
          <Col className="slide1">
            <Card>
              <button className="btn" onClick={handleShow}>
                <Card.Img className="pic1" variant="top" src={img} />
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
                <Card.Img className="pic1" variant="top" src={img2} />
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
