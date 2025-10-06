import React from 'react';
import '../css/Page.css';


function LaborantinDashboard() {
  return (
    <div className="page">
      <h1>Espace Laborantin</h1>
      <p>Liste des prestations à réaliser :</p>
      <ul>
        <li>Préparer les équipements pour la demande #001</li>
        <li>Effectuer les analyses demandées</li>
        <li>Voir la planification des prestations</li>
      </ul>
  
    </div>
  );
}

export default LaborantinDashboard;
