import signup3 from "../Images/signup3.png"
import signup2 from "../Images/signup2.png"
import { Alert, Col, Row } from "react-bootstrap"
import DevelotContext from "../Uilts/DevelotContext"
import { useContext } from "react";
import backsignup from "../Images/backsignup.png"
function SignUp() {
    const {signUp,errorSignup}=useContext(DevelotContext)
  return (
    <>
   
        <img className="backsignup"  src={backsignup}/>
    <h2 class="welcome">Welcome</h2>

      <div className="signup-contaner">
        <form  onSubmit={signUp}>
          <img src={signup3} alt="" className="wave" />
          
          <div className="input-div">
            <h5>First Name</h5>
            <input type="text" name="firstName" class="input" required />
          </div>
          <div className="input-div">
            <h5>Last Name</h5>
            <input type="text" name="lastName" class="input" required />
          </div>

          <div className="input-div">
            <h5>Photo:</h5>
            <input type="url" name="photo" class="input" required/>
          </div>

          <div className="input-div">
            <h5>Email</h5>
            <input type="email" name="email" class="input" required/>
          </div>

          <div className="input-div">
            <h5>Password</h5>
            <input type="password" name="password" class="input" required/>
          </div>
          <Row>
          <Col md="10">{errorSignup!==null ?<Alert variant="danger">{errorSignup}</Alert>:null}</Col>
      </Row>
          <button type="button" type="submit" class="btn btn-success">Sign Up</button>
        </form>
        
      
     
      
     </div>
     <img src={signup2} alt="" className="wave1" style={{opacity:.5}} />
    </>
  )
}

export default SignUp
