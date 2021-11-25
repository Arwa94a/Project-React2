import { Carousel, Col, Row } from "react-bootstrap"
import vision from "../Images/vision.png"
import learn from "../Images/learn.png"
import links from "../Images/links.png"
import { Link } from "react-router-dom"
function InfoImage() {
  return (
    <>
      <Row className="generalAll" >
        <Col className=" general">
          <Link className="nav-link" to="/vision">
            <img src={vision} className="imgHome" />
          </Link>
          <h3>The Vision Of Kingdom Of Saudi Arabia In Programming</h3>
        </Col>
        <Col  className=" generalSecond">
          <Link className="nav-link" to="/Learn">
            <img src={learn} className="imgHome" />
          </Link>
          <h3>How Start To Learn Programming</h3>
        </Col>
        <Col className=" generalLast" >
          <Link className="nav-link" to="/PlatForms">
            <img src={links} className="imgHome" />
          </Link>
          <h3>Programming Tutorial Links</h3>
        </Col>
      </Row>
    </>
  )
}

export default InfoImage
