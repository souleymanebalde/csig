import React from "react";
import "../css/Dashboard.css";

export default function LaborantinDashboard() {
  return (
    <div className="dashboard">
      <h2>Tableau de bord - Laborantin</h2>
      <div className="cards">
        <div className="card">Prestations en cours</div>
        <div className="card">Mon planning</div>
        <div className="card">Historique des analyses</div>
      </div>
    </div>
  );
}
