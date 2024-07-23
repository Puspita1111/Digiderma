import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Result = () => {
  const [predictedDisease, setPredictedDisease] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await axios.get(' '); 
        setPredictedDisease(response.data.disease_type); 
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

export default Result;