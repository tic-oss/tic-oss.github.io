import React, { useState } from 'react';

const HelloPage = () => {
  const [message, setMessage] = useState('');

  const fetchHelloMessage = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/hello'); // Change the URL to match your backend server
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Hello Page</h1>
      <p>Click the button below to fetch data from the API:</p>
      <button onClick={fetchHelloMessage}>Fetch API Data</button>

      {message && (
        <div>
          <h2>Response from API:</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default HelloPage;
