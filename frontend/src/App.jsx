import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import DemandePage from "./pages/DemandePage";
import PlanificationPage from "./pages/PlanificationPage";
import LoginPage from "./pages/LoginPage";
import DemandeurDashboard from "./pages/DemandeurDashboard";
import LaborantinDashboard from "./pages/LaborantinDashboard";
import ResponsableDashboard from "./pages/ResponsableDashboard";
import DgDashboard from "./pages/DgDashboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/demande" element={<DemandePage />} />
          <Route path="/planification" element={<PlanificationPage />} />
          <Route path="/demandeur" element={<DemandeurDashboard />} />
          <Route path="/laborantin" element={<LaborantinDashboard />} />
          <Route path="/responsable" element={<ResponsableDashboard />} />
          <Route path="/dg" element={<DgDashboard />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
