
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import vidjs from "../Images/vidhtml.png"

import twitter from "../Images/twitter.png"
import Vidhtml from "../Images/vidhtml.png"
import codehtml from "../Images/codehtml.png"

function JavaScript() {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col>
        
            <Card.Img variant="top" />
            <Card.Body>
              <Link className="nav-link" to="/vidjs">
                <img src={Vidhtml} height={400} style={{marginTop:"150px", marginLeft:"80px"}} />
              </Link>
              <Card.Text style={{marginLeft:"150px"}} class="infoCode">Some videos that explain the most important objects in JavaScript</Card.Text>
            </Card.Body>
         
        </Col>
        <Col>
        
            <Card.Img variant="top" />
            <Card.Body>
              <Link className="nav-link" to="/codejs">
                <img src={codehtml} height={400} style={{marginTop:"150px"}} />
              </Link>
              <Card.Text class="infoCode">The most important Codes in JavaScript.Ihope it is useful to you.</Card.Text>
            </Card.Body>
         
        </Col>
        )
      </Row>
    </>
  )
}

export default JavaScript
