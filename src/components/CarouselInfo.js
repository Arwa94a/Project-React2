import { Carousel } from "react-bootstrap"
import vision from "../Images/vision.png"
import learn from "../Images/learn.png"
import links from "../Images/links.png"
import { Link } from "react-router-dom"
function CarouselInfo() {
  return (
    <>
     <Carousel className="m-5">
        <Carousel.Item class="vision">
          <img className="d-block w-100" src={vision} alt="First slide" style={{ opacity: 0.5, height: "500px" }} />
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
          <img className="d-block w-100 " src={learn} alt="Second slide" style={{ opacity: 0.5, height: "500px" }} />

          <Carousel.Caption>
            <Link className="nav-link" to="/Learn">
              {" "}
              <h3>How Start To Learn Programming</h3>
            </Link>
            <p class="learnP">If you Want Learn Programming And you Don't Know How To start</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={links} alt="Third slide" style={{ opacity: 0.5, height: "500px" }} />

          <Carousel.Caption>
            <Link className="nav-link" to="/PlatForms">
              {" "}
              <h3>Programming Tutorial Links</h3>
            </Link>
            <p class="linkP">Here Find Some Links Help You To Learn Programming.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default CarouselInfo
