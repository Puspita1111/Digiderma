// import React from 'react'

// const About = () => {
//     return (
//         <div>
//             <h1> This is a About Us Page</h1>
//         </div>
//     )
// }

// export default About



// About.js

import React from 'react';
import "./About.css";

const About = () => {
  return (
    <div className="con">
    <div style={styles.container}>
      <h2>About Skin Cancer Prediction App</h2>

      <p>
        Welcome to our Skin Cancer Prediction App, where we combine cutting-edge technology with medical expertise to provide a reliable tool for early skin cancer detection.
      </p>

      <p>
        Our mission is to empower individuals to monitor their skin health and detect potential issues at the earliest stages. Skin cancer, when detected early, is highly treatable, and our application aims to contribute to better outcomes for our users.
      </p>

      <h3>Key Features:</h3>
      <ul>
        <li>Advanced Deep Learning: Our application leverages state-of-the-art machine learning algorithms for accurate skin cancer predictions.</li>
        <li>Early Detection: Detect potential skin cancer at its early stages for timely medical intervention.</li>
        <li>User-Friendly Interface: An intuitive and user-friendly interface makes it easy for users to interact with the application.</li>
      </ul>

      <h3>Meet the Team:</h3>
      <p>
        Our team consists of passionate professionals in the fields of healthcare, technology, and deep learning. Together, we are dedicated to making a positive impact on skin health.
      </p>
    </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'justify',
    colour:'red',
  },

};
export default About;
