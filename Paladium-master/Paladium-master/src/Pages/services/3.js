import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img from "../../Components/carousel1/pics/Communication.png"
import ServInfo from "./components/3"

function Service3() {
  return (
    <div>
      <title>
        MAINTENANCE OF COMMUNICATION EQUIPMENT | PaladiumTechServiceLimited
      </title>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
          <Carousel.Caption className="abcap">
            <p className="abp">MAINTENANCE OF COMMUNICATION EQUIPMENT </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ServInfo />
    </div>
  );
}

export default Service3;
