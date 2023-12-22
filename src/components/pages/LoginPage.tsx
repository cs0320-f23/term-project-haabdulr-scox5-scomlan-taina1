import React, { useState } from 'react';
import { handleSignIn } from "../firebase.ts"; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError('');

      if (!isPasswordValid(password)) {
        setError('Password must meet specifications.');
        setLoading(false);
        return;
      }

      // firebase authentication method for sign-in
      await handleSignIn(email, password);

      console.log('User logged in successfully');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const isPasswordValid = (password) => {
    // Password must be at least 8 characters long and contain at least one special character
    const minLength = 8;
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    return password.length >= minLength && hasSpecialCharacter;
  };


  return (
    <div id="login-container">
      <h2>Login Page</h2>
      <label htmlFor="email-input" className="login-label">
        Email:
        <input
          type="text"
          id="email-input"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password-input" className="login-label">
        Password:
        <input
          type="password"
          id="password-input"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <p className="password-requirements">Password must be at least 8 characters long 
      <br />
      Password must contain at least one special character.
      </p>
      <br />
      {error && <p id="login-error-message" className="login-error" style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin} id="login-button" className="login-button" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
};

export default LoginPage;
