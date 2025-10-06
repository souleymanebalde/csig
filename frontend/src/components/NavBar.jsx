import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">CSIG Labs</h2>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/demande">Faire une demande</Link>
        <Link to="/planification">Planification</Link>
        <Link to="/login">Connexion</Link>
      </div>
    </nav>
  );
}

export default Navbar;
