/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <div id="navbar" className="nav-links">
          <h2>  <NavLink to="/books">Catalogue of Books</NavLink> </h2>
          <h2>  <NavLink to="/users/login">User Login</NavLink> </h2>
          <h2>  <NavLink to="/users/register">Account Registration</NavLink> </h2>
          <h2>  <NavLink to="/users/me">My Account</NavLink> </h2>
        </div>
      );    
}