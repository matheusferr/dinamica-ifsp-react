import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbarContainer">
      <Link className="link" to="/">
        home
      </Link>
      <Link className="link" to="/about">
        about
      </Link>
    </nav>
  );
}
