import React, { useState } from "react";
import "../css/Page.css";

function PlanificationPage() {
  const [planning, setPlanning] = useState(null);

  const handlePlanifier = () => {
    const resultat = {
      jour: "Mardi 8 Octobre 2025",
      heure: "10h00 - 12h00",
      responsable: "Laborantin Alpha Diallo",
    };
    setPlanning(resultat);
  };

  return (
    <div className="page">
      <h1>Planification des prestations</h1>
      <p>
        Cliquez sur le bouton ci-dessous pour générer une planification
        automatique selon les disponibilités du laboratoire.
      </p>
      <button onClick={handlePlanifier}>Générer la planification</button>

      {planning && (
        <div className="planning">
          <h3>📅 Résultat de la planification :</h3>
          <p><strong>Jour :</strong> {planning.jour}</p>
          <p><strong>Heure :</strong> {planning.heure}</p>
          <p><strong>Responsable :</strong> {planning.responsable}</p>
        </div>
      )}
    </div>
  );
}

export default PlanificationPage;
