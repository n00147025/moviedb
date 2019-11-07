/**
 * @Date:   2019-11-06T23:02:43+00:00
 * @Last modified time: 2019-11-07T22:26:35+00:00
 */
import React from 'react';

import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container navbar navbar-dark bg-dark">
        <a href="../index" className="navbar-brand">
          <img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" style={{paddingRight: 10}}/>
          Movie DB
        </a>
          <ul className="navbar-nav">
            <Link to="/About">
            <li  className="nav-link">
              About
            </li>
            </Link>
            <Link to="/Home" >
            <li className="nav-link">
              Home
            </li>
            </Link>
          </ul>
      </div>
    </nav>
  )
}
export default Navbar;
