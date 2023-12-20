import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.scss";

const Navigation = () => (
  <nav className="centered-navigation">
          <div className="logo">
        <img src="https://www.transitionalhousing.org/gallery/2960_amoshouse_com.jpg" alt="Logo" />
      </div>
    <NavLink className="link" to="/">
      Home
    </NavLink>
    <NavLink className="link" to="/types-of-care">
      Types of Care
      <div className="dropdown-content">
        <NavLink to="/PrimaryCare">Primary Care</NavLink>
        <NavLink to="/UrgentCare">Urgent Care</NavLink>
        <NavLink to="/DentalCare">Dental Care</NavLink>
        <NavLink to="/SpecializedCare">Specialized Care</NavLink>
      </div>
    </NavLink>
    <NavLink className="link" to="/MentalHealth">
      Mental Health
    </NavLink>
    <NavLink className="link" to="/MedicalRecords">
      Medical Records
    </NavLink>
    <NavLink className="link" to="/PrescriptionMedication">
      Prescription Medication
    </NavLink>
    <div className="search-container">
      <input type="text" placeholder="Search..." />
    </div>
    {/* Log In and Sign Up buttons */}
    <div className="auth-buttons">
      <NavLink className="link login" to="/login">
        Log In
      </NavLink>
      <NavLink className="link signup" to="/signup">
        Sign Up
      </NavLink>
    </div>
  </nav>
);

export default Navigation;
