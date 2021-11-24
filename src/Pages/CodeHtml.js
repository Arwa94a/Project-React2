import { Col, Row } from "react-bootstrap"
import TableHtml from "../Images/TableHtml.gif"
import sidehtml from "../Images/sidehtml.png"

function CodeHtml() {
  return (
    <>
      <Row className="background">
        <Col className="codestyle">
          <div className="codestyle">
            <h1 className="title-code">HTML Computer Code Elements</h1>
            <p>HTML contains several elements for defining user input and computer code.</p>
            <h3>Example</h3>
            <b className="code-write">
              {"<code>"}x = 5; y = 6; z = x + y;
              {"</code>"}
            </b>
            <br />

            <h1 className="title-code">HTML {"<samp>"} For Program Output</h1>
            <p>
              The HTML {"<samp>"} element is used to define sample output from a computer program. The content inside is
              displayed in the browser's default monospace font.
            </p>
            <h3>Example</h3>
            <b  className="code-write">
              {"<p>"}Message from my computer:{"</p>"}
              {"<p>"}
              {"<samp>"}File not found.{"<br>"}Press F1 to continue{"</samp>"}
              {"</p>"}
            </b>
            <h4>Resulte</h4>
            <p>Message from my computer:</p>
            <p>
              <samp>
                File not found.
                <br />
                Press F1 to continue
              </samp>
            </p>
            <br />
            <h1 className="title-code">HTML {"<kbd>"} For Keyboard Input</h1>
            <p>
              The HTML {"<kbd>"} element is used to define keyboard input. The content inside is displayed in the
              browser's default monospace font.
            </p>
            <h3 >Example</h3>
            <b  className="code-write">
              {"<p>"}Save the document by pressing {"<kbd>"}Ctrl + S{"</kbd>"}
              {"</p>"}
            </b>
            <br />

            <h1 className="title-code">HTML {"<var> "}For Variables</h1>
            <p>
              The HTML {"<var>"} element is used to define a variable in programming or in a mathematical expression.
              The content inside is typically displayed in italic.
            </p>
            <h3>Example</h3>
            <b  className="code-write">
              {"<p>"}The area of a triangle is: 1/2 x {"<var>"}b{"</var>"} x <var>h</var>, where <var>b</var> is the
              base, and {"<var>"}h{"</var>"} is the vertical height.{"</p>"}
            </b>
            <br />
            <div>
              <h1 className="title-code">What are Semantic Elements?</h1>A semantic element clearly describes its
              meaning to both the browser and the developer. Examples of non-semantic elements: {"<div>"} and {"<span>"}{" "}
              - Tells nothing about its content. Examples of semantic elements: {"<form>"}, {"<table>"}, and{" "}
              {"<article>"} - Clearly defines its content.
              <h2>Semantic Elements in HTML</h2>
              Many web sites contain HTML code like: {`<div id="nav"> <div class="header"> <div id="footer">`} to
              indicate navigation, header, and footer. In HTML there are some semantic elements that can be used to
              define different parts of a web page:
           <Row> <Col>  <ul>
                <li>{"<article>"}</li>
                <li>{"<aside>"}</li>
                <li>{"<details>"}</li>
                <li>{"<figcaption>"}</li>
                <li>{"<figure>"}</li>
                <li>{"<footer>"}</li>
                <li>{"<header>"}</li>
                <li>{"<main>"}</li>
                <li>{"<mark>"}</li>
                <li>{"<nav>"}</li>
                <li>{"<section>"}</li>
                <li>{"<summary>"}</li>
                <li>{"<time>"}</li>
              </ul>
              </Col>
              <Col>
              <img src={TableHtml} alt="" />
              </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col>
          <img src={sidehtml} className="imgecsscode" />
        </Col>
      </Row>
    </>
  )
}

export default CodeHtml
