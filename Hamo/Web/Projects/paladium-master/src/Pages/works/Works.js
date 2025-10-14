import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img from "../../Components/carousel1/pics/ourwork.jpg"
import Works from "./Components/Slider"
import Text from "./Components/Text";


function Service4() {
  return (
    <div>
      <title>Our Work | PaladiumTechServiceLimited</title>
      <Carousel slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={img} alt="First slide" />
          <Carousel.Caption className="abcap">
            <p className="abp">Our Work</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Text />
      {/* <Works /> */}
    </div>
  );
}

export default Service4;