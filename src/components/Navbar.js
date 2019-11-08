/**
 * @Date:   2019-11-06T23:02:43+00:00
 * @Last modified time: 2019-11-08T11:19:51+00:00
 */
import React from 'react';

import {NavLink,Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark ">
      <div className="container navbar navbar-dark bg-dark">
        <a href="../index" className="navbar-brand">
          <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" style={{paddingRight: 10}}/>
          Movie DB
        </a>
          <ul className="navbar-nav inline" style={{display: 'inline'}}>
            <NavLink to="/About" style={{textDecoration: 'none'}}>
              <li className="nav-link">
                About
              </li>
            </NavLink>
            <NavLink to="/Home" >
              <li className="nav-link" style={{textDecoration: 'none'}}>
                Home
              </li>
            </NavLink>
          </ul>
      </div>
    </nav>
  )
}
export default Navbar;
