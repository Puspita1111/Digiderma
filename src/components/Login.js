import React, { useState } from 'react';
import axios from 'axios'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      
      const response = await axios.post('amader django r login r url', {
        username: username,
        password: password
      });

      
      alert(response.data.message);

      
    } catch (error) {
      
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <label>
           Email:
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Login
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginTop: '50px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '5px 0',
    padding: '8px',
    borderRadius: '3px',
    border: '1px solid #ccc',
  },
  button: {
    background: '#4CAF50',
    color: 'white',
    padding: '10px',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginTop: '10px',
    textAlign: 'center',
  },
};

export default Login;