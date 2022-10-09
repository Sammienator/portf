import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/esm/Container';

function StripedExample() {
  return (
    <div>
      <h1> My Skills</h1>
      <p> I am proficient in several languages and frameworks</p>
      <Container>  
      <ProgressBar animated now={40} label={`JAVASCRIPT`} />
      <ProgressBar animated now={60} label={`CSS`} />
      <ProgressBar animated now={20} label={`REACT`}/>
      <ProgressBar animated now={90}label={`HTML`} />
      <ProgressBar animated now={90}label={`BOOTSTRAP`} />
      <ProgressBar animated now={90}label={`NODEJS`} />

      </Container>
    </div>
  );
}

export default StripedExample;