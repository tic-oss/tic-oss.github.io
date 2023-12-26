// src/layouts/CustomLayout.js

import React, { useEffect } from 'react';

const CustomLayout = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/path/to/your/custom-script.js'; // Replace with the path to your custom JavaScript file
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Content of your Docusaurus layout */}
      {/* ... */}

      {/* Button for opening Streamlit app */}
      <div id="streamlitButton" style={buttonStyle}>
        Open Streamlit App
      </div>
    </>
  );
};

const buttonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  padding: '10px',
  background: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};

export default CustomLayout;
