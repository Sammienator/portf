import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

function Contact () {
  return (

   <div> 
    
     <Container>    

     <h2 className='heading'> Reach out to me below for a quote, questions or clarifications</h2>

    <Form>

     <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="Names" placeholder="Enter Your Name" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Telephone Number</Form.Label>
        <Form.Control type="Number" placeholder="Telephone Number" />
        <Form.Text className="text-muted">
          We'll never share your Mobile Number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Peronal Message</Form.Label>
        <Form.Control as="textarea" type='Message' placeholder='Write Your Message Here....' rows={3} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Join My Mailing List Community" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </Container>

      </div>



  );
}

export default Contact;