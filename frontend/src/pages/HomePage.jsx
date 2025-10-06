import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/home.css";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Bienvenue sur la plateforme de gestion des laboratoires de la CSIG</h1>
        <p>
          Cette plateforme permet aux chercheurs et institutions de soumettre des
          demandes de prestations d'analyse ou de recherche, de suivre leur
          demande et d'obtenir leurs résultats.
        </p>
        <button className="cta-button" onClick={handleClick}>
          Connectez-vous pour commencer !
        </button>
      </div>
    </div>
  );
}
