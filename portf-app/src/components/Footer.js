import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "100px",
  width: "100%"
};

 function footer () {
  return (
    <div style={style}>
      



            <Row>
           
            <Col xs={12} className="flex" id='icons' >
            <ul className='icons' >
            <p> <i class="fab fa-facebook"></i>  </p>
            <p>  <i class="fab fa-github"></i></p>
            <p>  <i class="fab fa-twitter"></i></p>
            <p>  <i class="fab fa-instagram"></i></p>
          
            
            
            </ul>
            <h1>The Sammienator Inc. 2022</h1>
                    
            </Col>
            </Row>

    </div>
  );
}
export default footer ;