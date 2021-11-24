import { Col, Row } from "react-bootstrap";
import Selector from "../Images/Selector.gif"
import sidecss from "../Images/sidecss.png"
import codelern from "../Images/codelern.jpg"
function CodeCss() {

    return (  <>
    <Row className="background">
      
      <Col className="codestyle">
    <div >
    
    <h1 className="code" className="title-code">CSS Syntax</h1>
   
    <img src={Selector}/>
 
    <p className="pclass">The selector points to the HTML element you want to style.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.</p>
<h1 className="title-code">Example</h1>
<b>In this example all {"<p>"} elements will be center-aligned, with a red text color:</b>
<p>{"p {"}
  color: red;
  text-align: center;
{"}"}</p>
<h3>Example Explained</h3>
<ul>
<li>p is a selector in CSS (it points to the HTML element you want to style: {"<p>"}).</li>
<li>color is a property, and red is the property value</li>
<li>text-align is a property, and center is the property value</li>
</ul>

{/* <img src={codelern} style={{height:"150px"}} /> */}
<h1 className="title-code">CSS Comments</h1>
<p>Comments are used to explain the code, and may help when you edit the source code at a later date.

Comments are ignored by browsers.</p>

<h4>A CSS comment is placed inside the {"<style>"} element, and starts with{" /* and ends with */"}:</h4>
<h3>Example</h3>
<p>/* This is a single-line comment */
p { 
  "{color: red;}"
}</p>

<h1 className="title-code">CSS Backgrounds</h1>
<h3>In these chapters, you will learn about the following CSS background properties:</h3>

<li>background-color</li>
<li>background-image</li>
<li>background-repeat</li>
<li>background-attachment</li>
<li>background-position</li>

</div>
</Col>
<Col><img src={sidecss} className="imgecsscode"/></Col>
</Row>
    </>);
}

export default CodeCss;