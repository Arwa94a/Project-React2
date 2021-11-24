import MoreLifeChangingCSSTips from "../Videocss/MoreLifeChangingCSSTips.mp4"
import Flexbox from "../Videocss/Flexbox.mp4"
import GRID from "../Videocss/GRID.mp4"
import { Container, Row,Col } from "react-bootstrap"
import backgroundvid from "../Images/backgroundvid.png"
import Aanimation from "../Videocss/Aanimation.mp4"
 

function VidCss() {
  return (
    <>
    <Container>
    <img src={backgroundvid} className="backGroundVid" alt="..." />
      <Row className="ms-5">
        <Col>
        <h2> CSS Tooltips </h2>
          <video width="500" height="500" controls >
            <source src={MoreLifeChangingCSSTips} type="video/mp4" />
          </video>
          <p class="text-center"> </p>
          <p class="text-center">
            {" "}
            CSS Tooltips are used to add information about an element on a web page. Tooltips appear in a
            number of different places on websites, especially when the author of a site wants to clarify something or
            add a definition to a word in a block of tex{" "}
          </p>
        </Col>
        <Col>
        <h2>Flexbox </h2>
          <video width="500" height="500" controls>
            <source src={Flexbox} type="video/mp4" md="" />
          </video>
          <p class="text-center">
            {" "}
            Our comprehensive guide to CSS flexbox layout. This complete guide explains everything about flexbox, focusing on all the different possible properties for the parent element (the flex container) and the child elements (the flex items{" "}
          </p>
        </Col>
        <Col>
        <h2> Centering aling</h2>
          <video width="500" height="500" controls>
            <source src={Aanimation} type="video/mp4" />
          </video>
          <p class="text-center">
            {" "}
            who to do centering align in html? The center tag is one of the HTML tags; when we use these tags in the
            document, it will align the paragraphs or words or any text, values it can be aligned with the center
            position of the web pages. In Html, these tags will use all the versions except Html5 instead of that CSS
            style have a property to align the elements with the center position.{" "}
          </p>
        </Col>
        <Col>
        <h2>Margin </h2>
          <video width="500" height="500" controls>
            <source src={GRID} type="video/mp4" md="" />
          </video>
          <p class="text-center">
            {" "}
            who to Mardin in html and cssThe margin specifies a shorthand property for setting the margin properties in
            one{" "}
          </p>
        </Col>
      </Row>
      </Container>
    </>
  )
}


export default VidCss
