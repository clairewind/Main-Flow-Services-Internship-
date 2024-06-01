// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/')
      .then(res => setMessage(res.data.message)) // Adjusted to access the 'message' property
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
