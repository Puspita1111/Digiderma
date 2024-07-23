import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Prediction = () => {
  const [predictedDisease, setPredictedDisease] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const randomIndex = Math.floor(Math.random() * response.data.length); // Generate random index
        setPredictedDisease(response.data[randomIndex].name);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching prediction:', error.message);
        setLoading(false);
      }
    };

    fetchPrediction();
  }, []); 

  return (
    <div>
      <h1>Skin Disease Prediction</h1>
      {loading ? (
        <p>Loading prediction...</p>
      ) : (
        <p>The predicted skin-disease is: {predictedDisease}</p>
      )}
    </div>
  );
};

export default Prediction;