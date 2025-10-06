import "../css/navbar.css";
import logo from "../assets/images/csig_logo.png"; // place ton logo dans src/assets/

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo}  alt="CSIG Logo" className="logo" />
      </div>
      <div className="navbar-right">
        <a href="/">Accueil</a>
        <a href="/login">Connexion</a>
        <a href="/dashboard">Tableau de bord</a>
      </div>
    </nav>
  );
}
