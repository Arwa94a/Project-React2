import vidhtml2 from "../Videohtml/vidhtml2.mp4"
import vidhtml3 from "../Videohtml/vidhtml3.mp4"
// import vidhtml1 from "../Videohtml/vidhtml4.mp4"
import backgroundvid from "../Images/backgroundvid.png"
import MarginsinHtmlandCss from "../Videohtml/vidhtml1.mp4"

import { Col, Container, Row } from "react-bootstrap"

function VidHtml() {
  return (
    <>
     <Container> 
    <img src={backgroundvid} className="backGroundVid" alt="..." />
    <Row className="ms-5" >
    <Col>
    
    <h2> Centering in Html</h2>
      <video width="500" height="500" controls>
        <source src={vidhtml2} type="video/mp4" />
       
      </video>
    <p class="text-center"> who to do centering align in html? The center tag is one of the HTML tags; when we use these tags in the document, it will align the paragraphs or words or any text, values it can be aligned with the center position of the web pages. In Html, these tags will use all the versions except Html5 instead of that CSS style have a property to align the elements with the center position. </p>
      </Col>
      <Col>
      <h2> Margin in Html</h2>
      <video width="500" height="500" controls>
        <source src={MarginsinHtmlandCss} type="video/mp4"md="" />
        
      </video>
     <p class="text-center"> who to Margin in html and cssThe margin specifies a shorthand property for setting the margin properties in one </p>
      </Col>
      
       </Row>
       <Row className="ms-5">
      <Col>  
      <h2> Index in HTML </h2>
      <video width="500" height="500" controls>
        <source src={vidhtml2} type="video/mp4" md="3" />
       
      </video>

      <p class="text-center">Index in html The index.html page is the most common name used for the default page shown on a website if no other page is specified when a visitor requests the site. In other words, index.html is the name used for the homepage of the website. Websites are built inside of directories on a web serve</p>
     </Col>
      <Col>
      <h2> Html Callback </h2>
      <video width="500" height="500" controls>
        <source src={vidhtml3} type="video/mp4" />
         </video>
    <p class="text-center">CallbackThis is a default implementation of HTMLCallback that basically doesn't do much but does keep the HTMLComponent work intact. This class was created so developers will avoid pitfalls of HTMLCallback, as using the wrong return values. Note that in any case an HTMLComponent doesn't have to use an HTMLCallback.</p>
      </Col>
     </Row>
     </Container>
    </>
  )
}

export default VidHtml
