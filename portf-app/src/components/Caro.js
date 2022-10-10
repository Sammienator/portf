import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import html from '../assets/html.jpg';
import css from '../assets/css.jpg';
import node from '../assets/node.jpg';

function DarkVariantExample() {
  return (

  <div> 
      <h2 > About Me </h2>
      <Container>

      
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={html}
          alt="Third slide"
        />
        
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={css}
          alt="Third slide"
        />
       
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={node}
          alt="Third slide"
        />
      
      </Carousel.Item>

    </Carousel>

      <h3> I have always loved code</h3>

    
    </Container>
    </div>
  );
}

export default DarkVariantExample;