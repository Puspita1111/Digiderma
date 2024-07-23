

// import React from 'react';

// const Services = () => {
//   return (
//     <div style={styles.container}>
//       <h2>Our Services</h2>

//       <div style={styles.serviceCard}>
//         <h3>Skin Cancer Prediction</h3>
//         <p>
//           We use deep learning algorithms to predict the likelihood of skin cancer based on input data and images.
//         </p>
//       </div>

//       <div style={styles.serviceCard}>
//         <h3>Early Detection</h3>
//         <p>
//           Early detection is crucial. Our application helps identify potential skin cancer at its early stages for prompt medical attention.
//         </p>
//       </div>

//       <div style={styles.serviceCard}>
//         <h3>User-friendly Interface</h3>
//         <p>
//           Our user-friendly interface makes it easy for users to input data, upload images, and receive predictions with ease.
//         </p>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '800px',
//     margin: 'auto',
//     padding: '20px',
//     textAlign: 'center',
//   },
//   serviceCard: {
//     backgroundColor: '#f4f4f4',
//     borderRadius: '8px',
//     padding: '20px',
//     margin: '20px 0',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
// };

// export default Services;


import React from 'react'
import "./services.css";


const Services = () => {
  return (
    <>
    <div>
       <section>
 <div className='srvc'><h1>SERVICES </h1></div>
 <div class="row">
   <div class="column">
     <div class="card">
      
       <div className='Servicecontainer'>
       <h3>Skin Cancer Prediction</h3>
       <p>
       We use deep learning algorithms to predict the likelihood of skin cancer based on input data and images.
       </p>
       </div>
     </div>
   </div>
   <div class="column">
     <div class="card">
       
       <div className='Servicecontainer'>
       <h3>Early Detection</h3>
       <p>
       Early detection is crucial. Our application helps identify potential skin cancer at its early stages for prompt medical attention.
       </p>
       </div>
     </div>
   </div>
   
   
   
   
   <div class="column">
     <div class="card">
       
       <div className='Servicecontainer'>
       <h3>User-friendly Interface</h3>
       <p>
       Our user-friendly interface makes it easy for users to input data, upload images, and receive predictions with ease.
       </p>
       </div>
     </div>
   </div>
 </div>
</section>

    </div>
    </>
  )
}

export default Services