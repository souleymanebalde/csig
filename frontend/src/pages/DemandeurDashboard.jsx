import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Page.css';

function DemandeurDashboard() {
  return (
    <div className="page">
      <h1>Espace Demandeur</h1>
      <p>Bienvenue sur votre tableau de bord.</p>
      <ul>
        <li><Link to="/demande">Faire une nouvelle demande</Link></li>
        <li><Link to="/suivi">Suivre sa demande</Link></li>
      </ul>
    </div>
  );
}

export default DemandeurDashboard;
