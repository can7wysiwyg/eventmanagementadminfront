import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { GlobalState } from "../../GlobalState";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged] = state.AdminApi.isLogged;
  const [isAdmin] = state.AdminApi.isAdmin;

  
  const logoutAdmin = async () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/";
  };

  function Webname() {
    if (isLogged !== true) {
      return (
        <Link className="navbar-brand" to="/">
          Events Marketer
        </Link>
      );
    } else {
      return (
        <Link className="navbar-brand" to="/">
          Admin
        </Link>
      );
    }
  }

  const loggedRouter = () => {
    return (
      <Nav>
        <Link className="nav-link" to="/" onClick={logoutAdmin}>
          Logout
        </Link>
      </Nav>
    );
  };

  const AdminRoute = () => {
    return (
      <Nav>
        <NavDropdown title="Management" id="basic-nav-dropdown">
          <NavDropdown.Item href="/management">Management</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
  };

  const AdminLogin = () => {
    if (isAdmin) {
      return AdminRoute();
    }
  };

  
  return (
   <>
   <Navbar bg="dark" variant="dark" expand="lg">
      {Webname()}
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/events">Trending Events</Nav.Link>
          <Nav.Link href="/new_events">New Events</Nav.Link>
          <Nav.Link href="/search_events">Search Events</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>

          
        </Nav>
        <Nav className="ml-auto">
        {isLogged ? loggedRouter() :   <Nav.Link href="/login">Login</Nav.Link> }
        {AdminLogin()}
          
         
         </Nav>
      </Navbar.Collapse>
    </Navbar>

   
   </>    
        
  );
};

export default Header;
