import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleSignUp } from "../firebase.ts"; 

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await handleSignUp(email, password);
      navigate("/"); // Redirect to the home page (adjust the path as needed)
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="signup-input"
        />
        <div className="email-requirements">
          Email must contain @.
        </div>
        <label className="signup-label">Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="signup-input"
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      {error && <p className="signup-error">{error}</p>}
    </div>
  );
};

export default SignUp;
