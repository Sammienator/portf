import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/esm/Container';

function StripedExample() {
  return (
    <div>
     
      <p className='heading'>  languages and frameworks i am proficient in</p>
      <Container>  
     <p><ProgressBar animated now={40} label={`Javascript`} variant="info" />   </p> 
     <p><ProgressBar animated now={100} label={`Html`} variant="info" />   </p>
     <p><ProgressBar animated now={95} label={`Css`} variant="success" />   </p>
     <p><ProgressBar animated now={90} label={`Bootstrap`} variant="info" />   </p>
     <p><ProgressBar animated now={50} label={`Nodejs`}  variant="warning"/>   </p>
     <p><ProgressBar animated now={60} label={`Mongodb`} variant="info" />   </p>
     <p><ProgressBar animated now={50} label={`Expressjs`} variant="danger" />   </p>
      

      </Container>
    </div>
  );
}

export default StripedExample;