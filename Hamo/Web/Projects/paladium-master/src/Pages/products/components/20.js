import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import img from "./pics/fear01.jpg";
import img2 from "./pics/fear02.jpg";
import img3 from "./pics/fear03.jpg";
import "./body.css";

function StaffInfo() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
  
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);


  return (
    <div className="workcont">
      <div className="helmettext">
        <p>
        <Col>
          This multifunctional unmanned helicopter is designed for
          reconnaissance (both for the defense and for the emergency
          situations), for the destruction of armored objects and
          fortifications, it can transport rescue equipment to inaccessible
          places, as well as to bring injured out from the battlefield.
        </Col>
        <Col>Technical specifications are:</Col>
        <Col>Dimension: 3.7x1.5x1.8m</Col>
        <Col>Engine: Gasoline Engine</Col>
        <Col>Max Takeoff Weight: 550 kg</Col>
        <Col>Max Horizontal Flight Speed: 140 km/h</Col>
        <Col>Effective Payload Weight: 180 kg</Col>
        <Col>Flight Hours: 3h</Col>
        <Col>Max Climb Rate: 4m/s</Col>
        <Col>Max Flight Attitude: 3000 m</Col>
        <Col>Max Control Radius (min cicrling radius): 150 km</Col>
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
                <Modal.Body>
                  <img className="modalImg" alt="modalImg" src={img2}></img>
                </Modal.Body>
              </Modal>
            </Card>
          </Col>
          <Col className="slide1">
            <Card>
              <button className="btn" onClick={handleShow3}>
                <Card.Img className="pic" variant="top"  src={img3} />
              </button>
              <Modal show={show3} onHide={handleClose3}>
                <Modal.Body>
                  <img className="modalImg" alt="modalImg" src={img3}></img>
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
