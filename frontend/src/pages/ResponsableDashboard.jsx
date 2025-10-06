import React from 'react';
import '../css/Page.css';

function ResponsableDashboard() {
  return (
    <div className="page">
      <h1>Espace Responsable de laboratoire</h1>
      <p>Prestations à valider :</p>
      <ul>
        <li>Demande #001 — en attente de validation</li>
        <li>Demande #002 — en cours de traitement</li>
      </ul>
    </div>
  );
}

export default ResponsableDashboard;
