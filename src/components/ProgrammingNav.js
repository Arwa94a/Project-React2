import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Brand from "../Images/Brand.png"
function ProgrammingNav() {
    return ( <>
    <>

  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand> <img src={Brand} alt="" height={50}/></Navbar.Brand>
    <Nav className="me-auto">
      <Link to="/" className="nav-link" >Home</Link>
      <Link to="information" className="nav-link" >Information</Link>
    </Nav>
    <Nav className="md-auto"/>
    {localStorage.tokenJs===undefined?(<>
      <Link to="login" className="nav-link" >Login</Link>
      <Link to="signup" className="nav-link">Sign Up</Link></>
):( <>
      <Link to="account" className="nav-link" >Account</Link>
      <Link to="logout" className="nav-link">Logout</Link>
    </>)}
   
    </Container>
  </Navbar>
</>
    
    </> );
}

export default ProgrammingNav;