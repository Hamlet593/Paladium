import Carousel from 'react-bootstrap/Carousel';
import img from "../../../Components/carousel1/pics/prod.jpg"

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
          <p className='pep'>Our Products</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default NoTransitionExample;