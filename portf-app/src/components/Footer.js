import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const style = {
  backgroundColor: "transparent",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "70px",
  width: "100%"
};

 function footer () {
  return (
    <div style={style}>
      



            <Row>
           
            <Col xs={12} >
            < >
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <p>  <i class="fab fa-github"></i> github</p>
            <p>  <i class="fab fa-twitter"></i>Twitter</p>
            <p>  <i class="fab fa-instagram"></i>Instagram</p>
          
            
            
            </>
          
                    
            </Col>
            </Row>

    </div>
  );
}
export default footer ;