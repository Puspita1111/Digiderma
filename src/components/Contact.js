
// import React, { useState } from 'react';
// import "./Contact.css";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle form submission (e.g., sending emails, saving to a database)
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="bac">
//     <div style={styles.container}>
//       <h2>Contact Us</h2>
//       <p style={styles.description}>If you have any questions or concerns about skin cancer prediction, please feel free to reach out to us.</p>

//       <form onSubmit={handleSubmit} style={styles.form}>
//         <label style={styles.label}>
//           Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} />
//         </label>
//         <br />
//         <label style={styles.label}>
//           Email:
//           <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} />
//         </label>
//         <br />
//         <label style={styles.label}>
//           Message:
//           <textarea name="message" rows="4" value={formData.message} onChange={handleChange} style={styles.input} />
//         </label>
//         <br />
//         <button type="submit" style={styles.button}>Submit</button>
//       </form>
//     </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '600px',
//     margin: 'auto',
//     padding: '20px',
//     textAlign: 'center',
//   },
//   description: {
//     // fontSize: '16px',
//      fontSize: '20px',    
//     marginBottom: '20px',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   label: {
//     marginBottom: '10px',
//   },
//   input: {
//     width: '100%',
//     padding: '8px',
//     marginBottom: '15px',
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '10px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// export default ContactUs;

import React from 'react'
 import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="containerContact">
     <div className="form-container">
    <div className="left-container">
      <div className="left-inner-container">
      <h2 >Digiderma </h2>
      <p>Got questions or feedback? </p>
        
        <p>Reach out to us at Digiderma, your go-to platform for uploading images and instant cancer detection!</p>
    </div>
      </div>
    <div className="right-container">
      <div className="right-inner-container">
        
			<h2 className="lg-view">Contact Us</h2>
      {/* <h2 ></h2> */}
           <p>* Required</p>
			<div className="social-container">
				{/* <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				<a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				<a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
			</div>
      <form action="https://formspree.io/f/xleqlewr" method="POST" className="document">
      {/* <div className="document"> */}
          {/* <input type="text" placeholder="Name *"  required/> */}
      {/* <input type="email" placeholder="Email *" required/> */}
			{/* <input type="text" placeholder="Subject" /> */}
			{/* <input type="phone" placeholder="Phone" required/> */}
          {/* <textarea rows="4" placeholder="Message" required></textarea> */}
			{/* <button>Submit</button> */}

      <input
              type="text"
              name="username"
              placeholder="username*"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email*"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              placeholder="Message*"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
      {/* </div> */}
		</form>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Contact