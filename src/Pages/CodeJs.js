import { Row,Col } from "react-bootstrap";
import sidejs from "../Images/sidejs.png"

function CodeJs() {
    return (<>
    <Row className="background">
      <Col>  
    <div className="codestyle">
    <h1 className="title-code">JavaScript Syntax</h1>
    <p>JavaScript syntax is the set of rules, how JavaScript programs are constructed:</p>
    <b>// How to create variables:
var x;
let y;

// How to use variables:
x = 5;
y = 6;
let z = x + y;
</b>

<h4>
    <h2>JavaScript Values
The JavaScript syntax defines two types of values:</h2>

<li>Fixed values</li>
<li>Variable values</li>
<li>Fixed values are called Literals.</li>

Variable values are called Variables</h4>

<h2>JavaScript Literals</h2>
<h5>The two most important syntax rules for fixed values are:</h5>

<li>1. Numbers are written with or without decimals:</li>

<h6>10.50</h6>

<h6>1001</h6>


<h1 className="title-code">Math Properties (Constants)</h1>
<h2>The syntax for any Math property is : Math.property.</h2>

<h3>JavaScript provides 8 mathematical constants that can be accessed as Math properties:</h3>

<h1>Example</h1>
<li>Math.E    </li>    // returns Euler's number
<li>Math.PI  </li>     // returns PI
<li>Math.SQRT2 </li>   // returns the square root of 2
<li>Math.SQRT1_2 </li> // returns the square root of 1/2
<li>Math.LN2    </li>  // returns the natural logarithm of 2
<li>Math.LN10   </li>  // returns the natural logarithm of 10
<li>Math.LOG2E  </li>  // returns base 2 logarithm of E
<li>Math.LOG10E  </li> // returns base 10 logarithm of E
    
<h1 className="title-code">Math.random()</h1>
<p>Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)</p>

<h1 className="title-code">Conditional Statementsv</h1>
<p>Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.</p>

<h3>In JavaScript we have the following conditional statements:</h3>

<li>Use if to specify a block of code to be executed, if a specified condition is true</li>
<li>Use else to specify a block of code to be executed, if the same condition is false</li>
<li>Use else if to specify a new condition to test, if the first condition is false</li>
<li>Use switch to specify many alternative blocks of code to be executed</li>
</div>
</Col>

<Col><img src={sidejs} className="imgecsscode"/></Col>
</Row>
    </>  );
}

export default CodeJs;