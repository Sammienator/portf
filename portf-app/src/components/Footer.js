import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';




const style = {
  backgroundColor: "transparent",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "sticky",
  left: "0",
  top: "100",
  height: "70px",
  width: "100%"
};

 function footer () {
  return (
    <div style={style}>
      



            <Row>
           
            <Col xs={12} >
            < >
            <p>  <FontAwesomeIcon icon={faFacebook} /> </p>
            <p>  <FontAwesomeIcon icon={faGithub} /> </p>
            <p>  <FontAwesomeIcon icon={faInstagram} />  </p>
            <p> <FontAwesomeIcon icon={faTwitter} />  </p>
           
            
            
          
            
            
            </>
          
                    
            </Col>
            </Row>

    </div>
  );
}
export default footer ;