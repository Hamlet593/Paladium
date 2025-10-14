import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img from "../../../Components/carousel1/pics/ourwork.jpg"


function Service4() {
  return (
    <div>
      <title>Our Projects | PaladiumTechServiceLimited</title>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
          <Carousel.Caption className="abcap">
            <p className="abp">Our Projects</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Service4;