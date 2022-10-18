import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/esm/Container';

function StripedExample() {
  return (
    <div>
     
      <p className='heading'>  languages and frameworks i am proficient in</p>
      <Container>  
     <p><ProgressBar animated now={40} label={`Javascript`} />   </p> 
     <p><ProgressBar animated now={100} label={`Html`} />   </p>
     <p><ProgressBar animated now={95} label={`Css`} />   </p>
     <p><ProgressBar animated now={90} label={`Bootstrap`} />   </p>
     <p><ProgressBar animated now={50} label={`Nodejs`} />   </p>
     <p><ProgressBar animated now={60} label={`Mongodb`} />   </p>
     <p><ProgressBar animated now={50} label={`Expressjs`} />   </p>
      

      </Container>
    </div>
  );
}

export default StripedExample;