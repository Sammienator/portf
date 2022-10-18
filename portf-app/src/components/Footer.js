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
    <div style={style} bg="success">
      



            <Row >
            <Col xs={6} >
            < >
           
            <h2> Visit my social media platforms for more projects and insights.</h2>
            
            
          
            
            
            </>
          
                    
            </Col>
           
            <Col xs={6} className="ms-auto"   >
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