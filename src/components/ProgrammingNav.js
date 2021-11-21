import { useContext } from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Brand from "../Images/Brand.png"
import DevelotContext from "../Uilts/DevelotContext";
function ProgrammingNav() {
  const {logout}=useContext(DevelotContext)
    return ( <>
  
  <div className="navbar-2">

  <img src={Brand} alt="" height={60}/>
<ul  className="me-auto">
    <li> <Link to="/" className="nav-link" >Home</Link></li>
    <li> <Dropdown>
  <NavDropdown title="Informations" id="basic-nav-dropdown">
  
    <Dropdown.Item > <Link to="/information" className="nav-link" >Information</Link></Dropdown.Item>
    <Dropdown.Item ><Link to="/public-information" className="nav-link" >public</Link></Dropdown.Item>
    
 
</NavDropdown></Dropdown>

      </li>
      {localStorage.tokenJs?(  <li className="me-auto">
      
      <Link to="/add-information" className="nav-link">Add your information</Link>
      </li>):null}
</ul>


<ul class="  right-menu" className="md-auto">
{localStorage.tokenJs===undefined?(<>
    <li>   <Link to="/login" className="nav-link" >Login</Link></li>
    <li> <Link to="/signup" className="nav-link">Sign Up</Link></li>
  </>  
   
    ):(
    <> <ul class="  right-menu" className="md-auto">
     <li>   <Link to="/logout" className="nav-link" onClick={logout}>Logout</Link></li>
    <li> <Link to="/profile" className="nav-link" >Profile</Link></li>
    </ul>
    
    </>
    
    )}
    
    </ul>
    </div>
    
    </> );
}

export default ProgrammingNav;