import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Header() {
  return (
    <header className="text-large text-center flex flex-wrap">
      <div className="logo flex-auto">
        <Link className="m-5" to="/Home">
          <img className="pl-5 flex-1" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="menu  pt-7 text-right">
        <Link className="m-5" to="/Blog">
          Blog
        </Link>
        <Link className="m-5" to="/About">
          About
        </Link>
        <Link className="m-5" to="/Contact">
          Contact
        </Link>
        <Link className="m-5" to="/Login">
          Login
        </Link>
      </div>
    </header>
  );
}

export default Header;
