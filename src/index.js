import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from "react-router-dom";
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/reckfy.github.io/4p22-final-project-roman-sharafutdinov">
      <App />
    </Router>
  </React.StrictMode>
);
