import React from "react";
import "../css/Dashboard.css";

export default function DgDashboard() {
  return (
    <div className="dashboard">
      <h2>Tableau de bord - Directeur Général</h2>
      <div className="cards">
        <div className="card">Statistiques globales</div>
        <div className="card">Performance des laboratoires</div>
        <div className="card">Rapports et indicateurs clés</div>
      </div>
    </div>
  );
}
