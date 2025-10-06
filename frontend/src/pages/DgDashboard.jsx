import React from 'react';
import '../css/Page.css';

function DgDashboard() {
  return (
    <div className="page">
      <h1>Espace Directeur Général</h1>
      <p>Indicateurs de performance (KPIs) :</p>
      <ul>
        <li>Nombre total de demandes : 45</li>
        <li>Taux de satisfaction : 92%</li>
        <li>Prestations payantes : 15</li>
      </ul>
    </div>
  );
}

export default DgDashboard;
