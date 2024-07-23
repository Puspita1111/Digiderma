// import React, { useState } from "react";
// import axios from "axios";
// import Prediction from './Prediction'; // Import the Prediction component

// function ImageUploadPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState(''); // Add email state
//   const [image, setImage] = useState('');
//   const [showPrediction, setShowPrediction] = useState(false); // State to manage the visibility of the Prediction component

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   }

//   const handleEmailChange = (e) => { // Add function to handle email change
//     setEmail(e.target.value);
//   }

//   const handleChange = (e) => {
//     setImage(e.target.files[0]);
//   }

//   const handleApi = () => {
//     // call the API
//     const url = 'http://127.0.0.1:8000/upload/';

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email); // Append email to the form data
//     formData.append('image', image);

//     axios.post(url, formData).then(result => {
//       console.log(result.data);
//       setShowPrediction(true); // Show the Prediction component after successful API call
//       alert('success');
//     }).catch(error => {
//       alert('service error');
//       console.log(error);
//     });
//   }

//   return (
//     <div>
//       <h2>IMAGE UPLOAD</h2>
//       <input type="text" placeholder="Name" value={name} onChange={handleNameChange} /> <br />
//       <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} /> <br /> {/* Add email input field */}
//       <input type="file" onChange={handleChange} /> <br />
//       <button onClick={handleApi}>SUBMIT</button>

//       {showPrediction && <Prediction />} {/* Render Prediction component if showPrediction is true */}
//     </div>
//   );
// }

// export default ImageUploadPage;


//image

import React, { useState } from "react";
import "./ImageUplodePage.css";

import axios from "axios";
import Prediction from './Prediction'; // Import the Prediction component

function ImageUploadPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(''); // Add email state
  const [image, setImage] = useState('');
  const [showPrediction, setShowPrediction] = useState(false); // State to manage the visibility of the Prediction component

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => { // Add function to handle email change
    setEmail(e.target.value);
  }

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleApi = () => {
    // call the API
    const url = 'http://127.0.0.1:8000/upload/';

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email); // Append email to the form data
    formData.append('image', image);

    axios.post(url, formData).then(result => {
      console.log(result.data);
      setShowPrediction(true); // Show the Prediction component after successful API call
      alert('success');
    }).catch(error => {
      alert('service error');
      console.log(error);
    });
  }

  return (
    <div className="container11">
      <div className="upload-container11">
        <h2>IMAGE UPLOAD</h2>
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} /> <br />
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} /> <br /> {/* Add email input field */}
        <input type="file" onChange={handleChange} /> <br />
        <button onClick={handleApi}>SUBMIT</button>
      </div>
      <div className="underline"></div>
      {showPrediction && <Prediction />} {/* Render Prediction component if showPrediction is true */}
    </div>
  );
}

export default ImageUploadPage;
