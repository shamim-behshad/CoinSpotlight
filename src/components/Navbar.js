import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = ()=>{

    const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

    return(
       
      <nav className="navbar">
      <Link to={'/CoinSpotlight/parallax'}><div className="brand-title">CoinSpotlight</div></Link>
      <div className="market">Market</div>
      <button className="toggle-button" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`navbar-links ${isActive ? 'active' : ''}`}>
        <ul>
          <Link to={'/CoinSpotlight/parallax'}> <li><a href="">Home</a></li></Link>
          <Link><li><a href="">About</a></li></Link>
          <Link><li><a href="">Contact</a></li></Link>
        </ul>
      </div>
    </nav>
   
    )
}

export default Navbar