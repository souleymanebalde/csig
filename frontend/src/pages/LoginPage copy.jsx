import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Page.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("demandeur");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulation de l'authentification
    if (email && password) {
      alert(`Connexion réussie en tant que ${userType}`);

      // Redirection selon le type d'utilisateur
      if (userType === "demandeur") navigate("/dashboard-demandeur");
      else if (userType === "laborantin") navigate("/dashboard-laborantin");
      else if (userType === "responsable") navigate("/dashboard-responsable");
      else if (userType === "directeur") navigate("/dashboard-directeur");
    }
  };

  return (
    <div className="page">
      <h1>Connexion</h1>
      
      <form className="formulaire" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        

        <label>Type d’utilisateur</label>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          required
        >
          <option value="demandeur">Demandeur</option>
          <option value="laborantin">Laborantin</option>
          <option value="responsable">Responsable de labo</option>
          <option value="directeur">Directeur général</option>
        </select>

        <button type="submit" onClick={handleLogin}>Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;
