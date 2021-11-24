import { Carousel, Col, Row } from "react-bootstrap"
import vision from "../Images/vision.png"
import learn from "../Images/learn.png"
import links from "../Images/links.png"
import { Link } from "react-router-dom"
function CarouselInfo() {
  return (
    <>
    <Row >
      <Col md="8" className="mx-auto">
     <Carousel className="m-5" style={{borderRadius:"40px", border:"1px solid black",padding:"40px"}}>
        <Carousel.Item class="vision">
          <img className="d-block w-100 carouselImg " src={vision} alt="First slide"  />
          <Carousel.Caption>
            <Link className="nav-link" to="/vision">
              {" "}
              <h3>The Vision Of Kingdom Of Saudi Arabia In Programming</h3>
            </Link>
            <p class="visionP">
              {" "}
              In pursuit of the 2030 Saudi Vision, Tuwaiq Academy was established in 2020 to empower 100,000 programmers
              by 2030.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carouselImg " src={learn} alt="Second slide"  />

          <Carousel.Caption>
            <Link className="nav-link" to="/Learn">
              {" "}
              <h3>How Start To Learn Programming</h3>
            </Link>
            <p class="learnP">If you Want Learn Programming And you Don't Know How To start</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 carouselImg"  src={links} alt="Third slide"  />

          <Carousel.Caption>
            <Link className="nav-link" to="/PlatForms">
              {" "}
              <h3>Programming Tutorial Links</h3>
            </Link>
            <p class="linkP">Here Find Some Links Help You To Learn Programming.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
      </Row>
    </>
  )
}

export default CarouselInfo
