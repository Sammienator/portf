import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/esm/Container';

function StripedExample() {
  return (
    <div>
     
      <p className='heading'>  languages and frameworks i am proficient in</p>
      <Container>  
     <p><ProgressBar animated now={40} label={`JAVASCRIPT`} />   </p> 
     <p><ProgressBar animated now={100} label={`HTML`} />   </p>
     <p><ProgressBar animated now={95} label={`CSS`} />   </p>
     <p><ProgressBar animated now={90} label={`BOOTSTRAP`} />   </p>
     <p><ProgressBar animated now={50} label={`NODEJS`} />   </p>
     <p><ProgressBar animated now={60} label={`MONGODB`} />   </p>
     <p><ProgressBar animated now={50} label={`EXPRESSJS`} />   </p>
      

      </Container>
    </div>
  );
}

export default StripedExample;