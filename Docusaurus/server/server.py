from flask import Flask, render_template
from flask_cors import CORS  # Import the CORS extension
import subprocess

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/run_streamlit_app', methods=['GET'])
def run_streamlit_app():
    subprocess.run(['streamlit', 'run', 'app.py'])
    return 'Streamlit app is running!'

if __name__ == '__main__':
    app.run(debug=True)
