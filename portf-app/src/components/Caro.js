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
      <h2 className='heading' style={{fontFamily: "Cinzel Decorative, cursive", fontSize: "50px" ,fontWeight: "bolder" , "marginTop": "90px"}} > About Me </h2>
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

      

      <Row  >


      <Col xs={6} className="mt-5" style={{fontFamily: "Cinzel Decorative, cursive"}}>
      <h3 style={{fontSize: "30px" ,fontWeight: "bolder", textDecoration: "underline"}}> Brief  Personal  Summary</h3>

      <p> 

      A positive, innovative, results-driven Junior Software Developer with 2 years of experience in front end development and who takes pride in the ability to effectively combine workplace objectives with personal and professional goals.I am extremely versatile in multiple dvelopment stacks as well.
        </p>

           
      
        
        </Col>


        <Col xs={6} className="mt-5" style={{fontFamily: "Cinzel Decorative, cursive"}}>
        <h3 style={{fontSize: "30px" ,fontWeight: "bolder",textDecoration: "underline"}}> I have always loved code</h3>
      <p>
      I am a Supportive and enthusiastic team player dedicated to efficiently achieving and surpassing my project goals. I aspire to willingly be  innovative and learn new technologies as well. I am also a  quick learner who is  passionate about development.

      </p>
        
     
        
        </Col>

        
       


        
        
     
        
      </Row>

   


     <Row style={{"textAlign": "center"}}>

     <Col xs={12} className="mt-5" style={{fontFamily: "Cinzel Decorative, cursive"}}>
        <h3 style={{fontSize: "30px" ,fontWeight: "bolder", textDecoration: "underline" , }}> My profeciencies</h3>
      <p >
      My skills are, but not limited to: HTML5, CSS3,Vanilla Javascript, Mongo DB, BOOTSTRAP v4, BOOTSTRAP V5,React-BOOTSTRAP , Visual Studio among others. I also posses excellent Customer Service etiquette, i am a Creative thinker, i am dependable as well as being a team player.
      </p>
        
     
        
        </Col>

     </Row>


      <Row className='head' style={{marginBottom: "90px", fontFamily: "Cinzel Decorative, cursive" }} >
      <Col >
        <h4 > "Very passionate about aesthetics and UI design."</h4>
        
        </Col>


      </Row>



      

    
    </Container>
    </div>
  );
}

export default DarkVariantExample;