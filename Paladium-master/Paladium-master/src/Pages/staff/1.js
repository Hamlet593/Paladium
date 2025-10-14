import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img from "../../Components/carousel1/pics/car2.jpg"
import StaffInfo from "./components/1";

function Staff1() {
  return (
    <div>
      <title>Arsen Hovsepyan | PaladiumTechServiceLimited</title>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
          <Carousel.Caption className="abcap">
            <p className="abp">ARSEN HOVSEPYAN</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <StaffInfo />
    </div>
  );
}

export default Staff1;
