import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.scss";
 

const Navigation = () => (
  <nav className="centered-navigation">
    <NavLink className="link" to="/">
      Home
    </NavLink>
    <NavLink className="link" to="/types-of-care">
      Types of Care
      <div className="dropdown-content">
        <NavLink to="/primary-care">Primary Care</NavLink>
        <NavLink to="/urgent-care">Urgent Care</NavLink>
        <NavLink to="/dental-czre">Dental Care</NavLink>
        <NavLink to="/specialized-care">Specialized Care</NavLink>
      </div>
    </NavLink>
    <NavLink className="link" to="/MentalHealth">
      Mental Health
    </NavLink>
    <NavLink className="link" to="/MedicalRecords">
      Medical Records
    </NavLink>
    <NavLink className="link" to="/Prescription Medication">
      Prescription Medication
    </NavLink>
    <NavLink className="link" to="/Telehealth">
      Telehealth
    </NavLink>
    <div className="search-container">
      <input type="text" placeholder="Search..." />
    </div>
    {/* Log In and Sign Up buttons */}
    <div className="auth-buttons">
      <NavLink className="link login" to="/login">
        Log In
      </NavLink>
      <NavLink className="link login" to="/signup">
        Sign Up
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
