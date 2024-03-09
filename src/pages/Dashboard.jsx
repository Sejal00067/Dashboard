import React, { useState } from 'react';

const Dashboard = () => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Perform search logic here
    console.log('Searching for:', { name, rollNumber });
    // Example: Fetch search results from an API
    // Simulating search results
    const results = [
      { name: 'John', rollNumber: '123' },
      { name: 'Jane', rollNumber: '456' },
      { name: 'Doe', rollNumber: '789' }
    ];
    setSearchResults(results);
  };

  return (
    <div>
      <h1>Student Search</h1>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </div>
      <div>
        <label htmlFor="rollNumber">Roll Number:</label>
        <input
          type="text"
          id="rollNumber"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          placeholder="Enter roll number"
        />
      </div>
      <button onClick={handleSearch}>Search</button>

      <div>
        <h2>Search Results:</h2>
        <ul>
          {searchResults.map((student, index) => (
            <li key={index}>{`Name: ${student.name}, Roll Number: ${student.rollNumber}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
