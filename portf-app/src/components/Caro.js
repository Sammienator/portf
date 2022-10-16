import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.jpg';
import html from '../assets/html.jpg';
import css from '../assets/css.jpg';
import node from '../assets/node.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DarkVariantExample() {
  return (

  <div> 
      <h2 className='heading' > About Me </h2>
      <Container>

      
    <Carousel className='carousel' variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={pic1}
          alt="First slide"
  
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={pic2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={html}
          alt="Third slide"
        />
        
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={css}
          alt="Third slide"
        />
       
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={node}
          alt="Third slide"
        />
      
      </Carousel.Item>

    </Carousel>

      

      <Row>


      <Col xs={4} className="mt-5">
      <h3> I have always loved code</h3>
      <p>I have three years experience in software development</p>
      
        
        </Col>


        <Col xs={4} className="mt-5">
        <h3> I have always loved code</h3>
      <p>I have three years experience in software development</p>
        
     
        
        </Col>

        
        <Col xs={4} className="mt-5">
        <h3> I have always loved code</h3>
      <p>I have three years experience in software development</p>
        
     
        
        </Col>
        
     
        
      </Row>

    
    </Container>
    </div>
  );
}

export default DarkVariantExample;