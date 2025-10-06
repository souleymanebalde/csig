import React, { useState } from "react";
import "../css/Page.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Connexion réussie !");
  };

  return (
    <div className="page">
      <h1>Connexion</h1>
      <form className="formulaire" onSubmit={handleLogin}>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Mot de passe</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default LoginPage;
