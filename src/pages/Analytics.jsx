import React, { useState } from 'react';
import axios from 'axios';

function Analytics(){
    const [subjectName, setSubjectName] = useState('');
    const [fileUpload, setFileUpload] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const handleFileUpload = (event) => {
      setFileUpload(event.target.files[0]);
    };
  
    const handlePredict = async () => {
      setIsLoading(true);
      setErrorMessage('');
  
      if (!fileUpload) {
        setErrorMessage('Please upload a signature image.');
        setIsLoading(false);
        return;
    }
  
    try {
        const formData = new FormData();
        formData.append('signature', fileUpload);
  
        const response = await axios.post('YOUR_BACKEND_API_URL', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
    });
  
    setPredictions(response.data.predictions);
    setIsLoading(false);
    } catch (error) {
    console.error('Error predicting signature:', error);
    setErrorMessage('An error occurred while predicting the signature.');
    setIsLoading(false);
    }
};
  
const handleDownloadCSV = () => {
      // Logic to download CSV file
    }

return (
    <div>
        <h1>Analytics</h1>
        <input 
        type="text"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        placeholder="Enter the Subject"
        />
        <input type="file" onChange={handleFileUpload} />
        <button onClick={handlePredict} disabled={isLoading}>
        {isLoading ? 'Predicting...' : 'Predict'}
        </button>
        {errorMessage && <div>{errorMessage}</div>}
        {predictions.length > 0 && (
        <div>
            <h2>Predicted Names:</h2>
            <ul>
            {predictions.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
            </ul>
            <button onClick={handleDownloadCSV}>Download CSV</button>
        </div>
    )}
    </div>
);
};

export default Analytics;