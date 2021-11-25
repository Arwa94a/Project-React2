import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import vidhtml from "../Images/vidhtml.png"
import codehtml from "../Images/codehtml.png"

function Html() {
  return (
    <>
      <Row xs={1} md={2} >
        <Col class="html">
          <Card.Img variant="top" />
          <Card.Body>
            <Link className="nav-link" to="/vidhtml">
              <img src={vidhtml} height={400} style={{marginTop:"150px"}}/>
            </Link>
            <Card.Text style={{marginLeft:"150px"}} class="infoCode">Some videos that explain the most important objects in HTML</Card.Text>
          </Card.Body>
        </Col>
        <Col class="html">
          <Card.Img variant="top" />
          <Card.Body>
            <Link className="nav-link" to="/codehtml">
              <img src={codehtml} height={400} style={{marginTop:"150px"}} />
            </Link>
            <Card.Text class="infoCode">The most important Codes in HTML.Ihope it is useful to you.</Card.Text>
          </Card.Body>
        </Col>
        )
      </Row>
    </>
  )
}

export default Html
