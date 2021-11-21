import DevelotContext from "../Uilts/DevelotContext"
import { useContext } from "react";
import login3 from "../Images/login3.png"
import signup2 from "../Images/signup2.png"
import { Alert, Col, Row } from "react-bootstrap"
import backlogin from "../Images/backlogin.png"
function Login() {
    const {login,errorLogin}=useContext(DevelotContext)
    return (  <>
     <img className="backsignup"  src={backlogin}/>
    
      <div className="signup-contaner">
        <form  onSubmit={login}>
          <img src={login3} alt="" className="wave" />
          
         
          <div className="input-div">
            <h5>Email</h5>
            <input type="email" name="email" class="input" required/>
          </div>

          <div className="input-div">
            <h5>Password</h5>
            <input type="password" name="password" class="input" required/>
          </div>
          <Row>
          <Col md="10">{errorLogin!==null ?<Alert variant="danger">{errorLogin}</Alert>:null}</Col>
      </Row>
          <button type="button" type="submit" class="btn btn-success">Login</button>
        </form>
        
      
     
      
     </div>
    </>);
}

export default Login;