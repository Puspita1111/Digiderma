
import React, { useState } from 'react';
import "./Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending emails, saving to a database)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bac">
    <div style={styles.container}>
      <h2>Contact Us</h2>
      <p style={styles.description}>If you have any questions or concerns about skin cancer prediction, please feel free to reach out to us.</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
        </label>
        <br />
        <label style={styles.label}>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
        </label>
        <br />
        <label style={styles.label}>
          Message:
          <textarea name="message" rows="4" value={formData.message} onChange={handleChange} style={styles.input} />
        </label>
        <br />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  description: {
    // fontSize: '16px',
     fontSize: '20px',    
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ContactUs;

