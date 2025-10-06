import React, { useState } from "react";
import "../css/Page.css";

function DemandePage() {
  const [formData, setFormData] = useState({
    nom: "",
    domaine: "",
    description: "",
    materiel: "",
    methode: "",
    typeAnalyse: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Demande soumise avec succès !");
    console.log(formData);
  };

  return (
    <div className="page">
      <h1>Soumettre une demande de prestation</h1>
      <form className="formulaire" onSubmit={handleSubmit}>
        <label>Nom du demandeur</label>
        <input name="nom" onChange={handleChange} required />

        <label>Domaine de recherche</label>
        <input name="domaine" onChange={handleChange} required />

        <label>Description du projet</label>
        <textarea name="description" onChange={handleChange} required />

        <label>Matériel nécessaire</label>
        <input name="materiel" onChange={handleChange} required />

        <label>Méthodologie</label>
        <input name="methode" onChange={handleChange} required />

        <label>Type d’analyse</label>
        <input name="typeAnalyse" onChange={handleChange} required />

        <button type="submit">Soumettre la demande</button>
      </form>
    </div>
  );
}

export default DemandePage;
