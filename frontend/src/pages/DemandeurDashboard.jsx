import React from "react";
import "../css/Dashboard.css";
import { useNavigate } from "react-router-dom";


export default function DemandeurDashboard() {
  const navigate = useNavigate();

  const handleDemandeClick = () => {
    navigate("/demande");
  };

  return (
    <div className="dashboard">
      <h2>Tableau de bord - Demandeur</h2>
      <div className="cards">
        <div className="card" onClick={handleDemandeClick}>Faire une nouvelle demande</div>
        <div className="card">Suivre mes demandes</div>
        <div className="card">Consulter mes résultats</div>
      </div>
    </div>
  );
}
