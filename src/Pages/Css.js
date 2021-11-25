import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

import codehtml from "../Images/codehtml.png"
import Vidhtml from "../Images/vidhtml.png"

function Css() {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card.Img variant="top" />
          <Card.Body>
            <Link className="nav-link" to="/vidcss">
              <img src={Vidhtml} height={400} style={{marginTop:"150px"}} />
            </Link>
            <Card.Text style={{marginLeft:"150px"}} class="infoCode">Some videos that explain the most important objects in Css</Card.Text>
          </Card.Body>
        </Col>
        <Col>
          <Card.Img variant="top" />
          <Card.Body>
            <Link className="nav-link" to="/codecss">
              <img src={codehtml} height={400} style={{marginTop:"150px"}}/>
            </Link>
            <Card.Text class="infoCode" >The most important Codes in Css.Ihope it is useful to you.</Card.Text>
          </Card.Body>
        </Col>
        )
      </Row>
    </>
  )
}
export default Css
