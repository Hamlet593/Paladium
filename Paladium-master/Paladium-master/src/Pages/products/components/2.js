import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import img from "../pics/helmet1.jpg";
import img2 from "../pics/helmet2.jpg";
import img3 from "../pics/helmet3.jpg";
import "./body.css";

function GridExample() {
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
          Our company, being an intermediary company, offers helmets. The
          helmets have reduced damage impact in the head and neck and protects
          against the most advanced handguns due to ballistic aramid structure.
          The ballistic helmets use the best in the business high-performance
          man-made aramid fiber from Kevlar. For more information please contact
          us.
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

export default GridExample;
