// static/custom-script.js

document.addEventListener('DOMContentLoaded', function () {
    var streamlitButton = document.getElementById('streamlitButton');
  
    if (streamlitButton) {
      streamlitButton.addEventListener('click', function () {
        // Replace the URL with the actual URL of your Streamlit app
        window.open('http://localhost:8501', '_blank');
      });
    }
  });
  