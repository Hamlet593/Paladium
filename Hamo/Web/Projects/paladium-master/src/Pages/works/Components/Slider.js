import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import img1 from "../../products/components/pics/1.jpg"
import img2 from "../../products/components/pics/2.jpg"
import img3 from "../../products/components/pics/3.jpg"
import img4 from "../../products/components/pics/4.jpg"
import img5 from "../../products/components/pics/5.jpg"
import img6 from "../../products/components/pics/6.gif"
import img7 from "../../products/components/pics/7.jpg"
import img8 from "../../products/components/pics/8.jpg"



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


  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);


  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);


  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);


  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);


  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);



  return (
    <div className="workcont">
      <Row xs={1} md={2} className="g-4">
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow}>
              <Card.Img className="pic" variant="top" alt="project" src={img1} />
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                <img className="modalImg" src={img1}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow2}>
              <Card.Img className="pic" variant="top" alt="project" src={img2} />
            </button>
            <Modal show={show2} onHide={handleClose2}>
              <Modal.Body>
                <img className="modalImg" src={img2}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow3}>
              <Card.Img className="pic" variant="top" alt="project" src={img3} />
            </button>
            <Modal show={show3} onHide={handleClose3}>
              <Modal.Body>
                <img className="modalImg" src={img3}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow4}>
              <Card.Img className="pic" variant="top" alt="project" src={img4} />
            </button>
            <Modal show={show4} onHide={handleClose4}>
              <Modal.Body>
                <img className="modalImg" src={img4}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow5}>
              <Card.Img className="pic" variant="top" alt="project" src={img5} />
            </button>
            <Modal show={show5} onHide={handleClose5}>
              <Modal.Body>
                <img className="modalImg" src={img5}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow6}>
              <Card.Img className="pic" variant="top" alt="project" src={img6} />
            </button>
            <Modal show={show6} onHide={handleClose6}>
              <Modal.Body>
                <img className="modalImg" src={img6}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow7}>
              <Card.Img className="pic" variant="top" alt="project" src={img7} />
            </button>
            <Modal show={show7} onHide={handleClose7}>
              <Modal.Body>
                <img className="modalImg" src={img7}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
        <Col className="slide">
          <Card>
            <button className="btn" onClick={handleShow8}>
              <Card.Img className="pic" variant="top" alt="project" src={img8} />
            </button>
            <Modal show={show8} onHide={handleClose8}>
              <Modal.Body>
                <img className="modalImg" src={img8}></img>
              </Modal.Body>
            </Modal>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default GridExample;
