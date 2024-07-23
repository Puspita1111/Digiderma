import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || password !== password2) {
      setError('Please fill in all fields and ensure passwords match.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:888/register/', {
        username,
        email,
        password,
        password2,
        first_name,
        last_name,
      });

      // alert(response.data.message);
      alert(response.data.body);


    } catch (error) {
      setError('Failed to sign up. Please try again.');
      console.log(error);
      
    }
    

  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Sign Up</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <label>
          Confirm Password:
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Sign Up
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
  },
};

export default Signup;
