import java from "../Images/java.png"
import html from "../Images/html.png"
import css from "../Images/css.png"

import { Link } from "react-router-dom"
function ThreeCard() {
  return (
    <>
     
    <h3>To Start learn any language programming Have To know About Css And Html</h3>
    <div class="d-flex justify-content-between m-5 ">
      <div class="card  " style={{ width: "18rem" }}>
        <Link to="JavaScript">
          {" "}
          <img src={java} class="card-img-top" alt="..." />
        </Link>
        <div class="card-body">
          <p class="card-text three">
          JavaScript is high-level, often just-in-time compiled and multi-paradigm. It has dynamic typing, prototype-based object-orientation and first-class functions.
          </p>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <Link to="Html">
          {" "}
          <img src={html} class="card-img-top" alt="..." />
        </Link>
        <div class="card-body">
          <p class="card-text three">
          The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
          </p>
        </div>
      </div>
      <div class="card" style={{ width: "18rem" }}>
        <Link to="Css">
          {" "}
          <img src={css} class="card-img-top" alt="..." />
        </Link>
        <div class="card-body">
          <p class="card-text three">
          Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
          </p>
        </div>
      </div>
      </div>
    </>
  )
}

export default ThreeCard
