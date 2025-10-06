import React from "react";
import "../css/Dashboard.css";

export default function ResponsableDashboard() {
  return (
    <div className="dashboard">
      <h2>Tableau de bord - Responsable de Labo</h2>
      <div className="cards">
        <div className="card">Valider les demandes</div>
        <div className="card">Planifier les prestations</div>
        <div className="card">Suivi du personnel et du matériel</div>
      </div>
    </div>
  );
}
