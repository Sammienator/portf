import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import m22 from '../assets/m22.jpeg';
import Button from 'react-bootstrap/Button';

function Cont2() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width  */}
      <Row>
        <Col xs={12}  >
         <h1 className='heading' style={{ fontFamily: "Carattere, cursive", fontSize: "80px", fontWeight: "bolder"}}> Juniour Front-End Developer. </h1>
        </Col>
        
      </Row>

  

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>


      <Col xs={6} className="mt-5" style={{fontFamily: "Cinzel Decorative, cursive"}}>
        <h2 style={{textDecoration: "underline", fontSize: "50px" ,fontWeight: "bolder" }}>Who am i? </h2>
                  I am a responsible, self-motivated person, greatly expereienced from working in diverse
          environments, and an individual who aspires to achieve both organisational and personal goals
          that may be presented to me. I have just over  2 and a half years of
          experience as a junior software developer . As a self taught developer, I
          have contributed to over a dozen projects and repositories through out career. I have attended multiple 
          BOOTcamps and internships such as Google Africa Developer scholarship (GADS) Andela Community among others, and this is where I was able to hone and refine my developer skills .
        <br/>
        <p><Button variant='primary' > Get Quote </Button>{' '}
      <Button variant='' >Skills</Button>{' '}
      </p>
        
        </Col>


        <Col xs={6} className="mt-5">
        
        <img 
          className="d-block"
          src={m22}
          alt="First slide"
          id='jumbo'
          style={{"box-shadow": "30px 30px 20px #ccc"}}
          
        />
        
        </Col>
        
     
        
      </Row>
    </Container>
  );
}

export default Cont2;