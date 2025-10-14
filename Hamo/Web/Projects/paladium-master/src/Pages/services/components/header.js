import Carousel from 'react-bootstrap/Carousel';
import img from "../../../Components/carousel1/pics/service.jpg"

function NoTransitionExample() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption className='abcap'>
          <p className='sep'>Our Service</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;