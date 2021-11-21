import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


import codehtml from "../Images/codehtml.png"
import Vidhtml from "../Images/vidhtml.png"


function Css() {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Link className="nav-link" to="/vidcss">
                <img src={Vidhtml} height={500} />
              </Link>
              <Card.Text>Some videos that explain the most important objects in HTML</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Link className="nav-link" to="/codecss">
                <img src={codehtml} height={500} />
              </Link>
              <Card.Text>The most important Codes in HTML.Ihope it is useful to you.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        )
      </Row>
    </>
  )
}
 export default Css