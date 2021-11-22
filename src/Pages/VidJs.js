import Asynchronous from "../Videojs/Asynchronous.mp4"
import GetterSetter from "../Videojs/GetterSetter.mp4"
 import OptionalChaining from "../Videojs/OptionalChaining.mp4"
import Oobject from "../Videojs/Oobject.mp4"

import { Col, Row } from "react-bootstrap"

function VidHtml() {
  return (
    <> 
    
    <Row className="ms-5" >
    <Col> 
    <h2> Asynchronoust </h2>
      <video width="500" height="500" controls> 
      
        <source src={Asynchronous} type="video/mp4" />
       
      </video>
    <p class="text-center">How Does Async/Await Work in JavaScrip?Async means asynchronous. It allows a program to run a function without freezing the entire program. This is done using the Async/Await keyword. Async/Await makes it easier to write promises. The keyword ‘async’ before a function makes the function return a promise </p>
      </Col>
      <Col>
      <h2> Getter And Sertter </h2>
      <video width="500" height="500" controls>
        <source src={GetterSetter} type="video/mp4"md="" />
        
      </video>
     <p class="text-center"> As a rule, there exist two object property types: data properties and accessor properties. All the properties we represented before are data properties. Accessor properties are relatively new and execute on getting and setting values. However, they seem like a regular property to the external code.</p>
      </Col>
      
       </Row>
       <Row className="ms-5">
      <Col> 
      <h2> Optional Chaining </h2> 
      <video width="500" height="500" controls>
        <source src={OptionalChaining} type="video/mp4" md="3" />
       
      </video>

      <p class="text-center">Optional chaining, represented by ?. in JavaScript, is a new feature introduced in ES2020. Optional chaining changes the way properties are accessed from deeply nested objects. It fixes the problem of having to do multiple null checks when accessing a long chain of object properties in Java Script</p>
     </Col>
      <Col>
       <h2>Object In Java Script</h2>
      <video width="500" height="500" controls>
        <source src={Oobject} type="video/mp4" />
         </video>
    <p class="text-center">An object is a non-primitive, structured data type in JavaScript. Objects are same as variables in JavaScript, the only difference is that an object holds multiple values in terms of properties and methods.
</p>
      </Col>
     </Row>
    </>
  )
}

export default VidHtml
