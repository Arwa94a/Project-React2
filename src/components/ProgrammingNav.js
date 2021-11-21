import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Brand from "../Images/Brand.png"
function ProgrammingNav() {
    return ( <>
  
  <div className="navbar-2">

  <img src={Brand} alt="" height={60}/>
<ul  className="me-auto">
    <li> <Link to="/" className="nav-link" >Home</Link></li>
    <li><Link to="/information" className="nav-link" >Information</Link></li>
    
</ul>

<ul class="  right-menu" className="md-auto">
{localStorage.tokenJs===undefined?(<>
    <li>   <Link to="/login" className="nav-link" >Login</Link></li>
    <li> <Link to="/signup" className="nav-link">Sign Up</Link></li>
  </>  
   
    ):(
    <> <ul>
     <li>   <Link to="/logout" className="nav-link">Logout</Link></li>
    <li> <Link to="/account" className="nav-link" >Account</Link></li>
    </ul></>
    
    )}
    
    </ul>
    </div>
    
    </> );
}

export default ProgrammingNav;