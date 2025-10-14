import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import img from "../pics/cover2.jpg";
import img2 from "../pics/cover1.jpg";
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
            Car covers are the smart solution that help your vehicle to stay
            safe from dings, scratches, pollen, insects, and bird droppings.
            Whether used as an emergency backup or an everyday item, the
            benefits of utilizing a quality car cover is hard to exaggerate. The
            lifespan of your vehicle can be enhanced both indoors and outdoors
            by using a car cover, and using one can protect your vehicle from
            damage ranging from dust particle scratches to blunt force impact.
            When made with weatherproof materials, these covers can keep a
            vehicle preserved incredibly well—anywhere. A customized vehicle
            cover is a crucial piece of protection when you want to keep your
            vehicle safe. For more information please contact us!
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
