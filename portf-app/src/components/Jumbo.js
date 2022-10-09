import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pic3 from '../assets/pic3.jpg';

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
        <h2>Lorem ipsum dolor sit amet </h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Col>


        <Col xs={6} className="mt-5">
        
        <img width="70%" height= "50%"
          className="d-block"
          src={pic3}
          alt="First slide"
        />
        
        </Col>
        
     
        
      </Row>
    </Container>
  );
}

export default Cont2;