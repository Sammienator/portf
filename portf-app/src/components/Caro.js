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
      <h3> Brief Personal Summary</h3>

      <p> 

      Creative Front-End Developer offering 3+ years of experience providing high-impact web solutions for diverse industry organizations. Skilled in designing, developing and testing multiple web-based applications incorporating a range of technologies. Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer
        </p>

           <p> Very passionate about aesthetics and UI design.</p>
      
        
        </Col>


        <Col xs={4} className="mt-5">
        <h3> I have always loved code</h3>
      <p>Produced stunning visual elements of web applications by translating UI/UX design wireframes into code while producing high quality, reusable markup using HTML5 and CSS3</p>
        
     
        
        </Col>

        
        <Col xs={4} className="mt-5">
        <h3> I have always loved code</h3>
      <p>Seasoned and independent Front End Developer with 3 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging.</p>
        
     
        
        </Col>
        
     
        
      </Row>

    
    </Container>
    </div>
  );
}

export default DarkVariantExample;