import React from "react";
import { Link } from "react-router-dom";

const Header =() => {
  <header className="header_design">
    <h1>Tha Cr8</h1>
    <div className="header-logo">
      <a href="#" target="_blank">
        <img src="./Image/IMG_0118.jpeg" alt="#" width="150px" />
      </a>
    </div>
    <nav className="navbar-design">
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/userprofiles" >User Profiles</Link>
      <Link to="/auction" >Auction</Link>
      <Link to="/blog" >Blog</Link>
      <Link to="/poccreators" >POC Creators</Link>
      <Link to="/products" >Products</Link>
    </nav>
  </header>;
}

export default Header;
