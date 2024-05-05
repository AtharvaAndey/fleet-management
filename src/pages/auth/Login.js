import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { Route } from 'react-router-dom';

const Login = () => {
  // State to store username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your login logic goes here
    if (username === 'yourUsername' && password === 'yourPassword') {
      // Successful login, redirect or perform necessary actions
      console.log('Login successful');
      setError('');
    } else {
      // Failed login, display error message
      setError('Invalid username or password');
    }
  };

  return (
    <div className="Login">
      <h2>Login</h2>
      <Link to="/order"> ORDER PE JAAO </Link>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username/Email:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up!</a>
        </p>
      </form>
    </div>
  );
};

export default Login;