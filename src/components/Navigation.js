import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          {/* <NavLink to="/Ticketstatus">Ticketstatus</NavLink>
          <NavLink to="/">Bookticket</NavLink>
          <NavLink to="/details">Details</NavLink>
          <NavLink to="/open">Open</NavLink>
          <NavLink to="/close">Close</NavLink>
          <NavLink to="/reset">Reset</NavLink> */}




<nav class="navbar navbar-default">
  <div class="container-fluid">
    <ul class="nav navbar-nav">
      <li><NavLink to="/Ticketstatus">Ticketstatus</NavLink></li>
      <li><NavLink to="/">Bookticket</NavLink></li>
      <li><NavLink to="/details">Details</NavLink></li>
      <li><NavLink to="/open">Open</NavLink></li>
      <li><NavLink to="/close">Close</NavLink></li>
      <li><NavLink to="/reset">Reset</NavLink></li>
    </ul>
  </div>
</nav>
  

       </div>
    );
}
 
export default Navigation;


