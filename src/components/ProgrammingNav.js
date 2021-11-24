import { useContext } from "react"
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"
import Brand from "../Images/Brand.png"
import DevelotContext from "../Uilts/DevelotContext"
function ProgrammingNav() {
  const { logout } = useContext(DevelotContext)
  return (
    <>
      <div className="navbar-2">
        <img src={Brand} alt="" height={60} />
        <ul className="me-auto">
          <li>
            {" "}
            <Link to="/" className="nav-link nav1">
              Home
            </Link>
          </li>
          <li>
            <Link to="/information" className="nav-link nav1">
              Information
            </Link>
          </li>

          <li>
            <Link to="/api" className="nav-link nav1">
             API
            </Link>
          </li>
          {localStorage.tokenJs ? (
            <li className="me-auto">
              <Link to="/add-information" className="nav-link nav1">
                Add your information
              </Link>
            </li>
          ) : null}
        </ul>

        <ul class="  right-menu" className="md-auto">
          {localStorage.tokenJs === undefined ? (
            <>
              <li>
                {" "}
                <Link to="/login" className="nav-link nav1">
                  Login
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/signup" className="nav-link nav1">
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <>
              {" "}
              <ul class="  right-menu nav1" className="md-auto">
                <li>
                  {" "}
                  <Link to="/logout " className="nav-link nav1" onClick={logout}>
                    Logout
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/profile" className="nav-link nav1">
                    Profile
                  </Link>
                </li>
              </ul>
            </>
          )}
        </ul>
      </div>
    </>
  )
}

export default ProgrammingNav
