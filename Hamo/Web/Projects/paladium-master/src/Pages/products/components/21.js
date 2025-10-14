import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import img from "./pics/ZT-05P1.jpg";
import img2 from "./pics/ZT-05P2.jpg";
import "./body.css";

function StaffInfo() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div className="staffworkcontcont">
      <div className="helmettext">
        <p>
        <Col>Main tactical and technical specifications</Col>
        <Col>Maximum range: 30km；</Col>
        <Col>Endurance： 30mins；</Col>
        <Col>Guidance accuracy：CEP ＜1m；</Col>
        <Col>Kill radius：Blast-fragmentation warhead ≮10m；</Col>
        <Col>Kill probability： 0.8;</Col>
        <Col>Diameter： 80mm；</Col>
        <Col>Weight： Ammunition and launcher together no more than 7kg；</Col>
        <Col>Length： launcher length 900mm；</Col>
        <Col>Guidance method： daylight/IR multiple mode image guidance</Col>
        <Col>Environment condition</Col>
        <Col>Operating temperature： -20℃ +50℃；</Col>
        <Col>Storage temperature： -30℃ +65℃；</Col>
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
