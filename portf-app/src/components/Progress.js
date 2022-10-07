import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function StripedExample() {
  return (
    <div>
      <ProgressBar animated now={40} label={`sam`} />
      <ProgressBar animated now={60} />
      <ProgressBar animated now={20} />
      <ProgressBar animated now={90} />
    </div>
  );
}

export default StripedExample;