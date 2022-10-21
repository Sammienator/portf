import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import m2 from '../assets/m2.jpeg';
import Button from 'react-bootstrap/Button';

function Cont2() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width  */}
      <Row>
        <Col xs={12}  >
         <h1 className='heading'> Juniour Front-End Developer. </h1>
        </Col>
        
      </Row>

  

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>


      <Col xs={6} className="mt-5">
        <h2>Code is Life, Art! </h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br/>
        <p><Button variant="primary"> Get Quote </Button>{' '}
      <Button variant="secondary">Skills</Button>{' '}
      </p>
        
        </Col>


        <Col xs={6} className="mt-5">
        
        <img 
          className="d-block"
          src={m2}
          alt="First slide"
          id='jumbo'
          
        />
        
        </Col>
        
     
        
      </Row>
    </Container>
  );
}

export default Cont2;