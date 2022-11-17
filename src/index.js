import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter as Router} from "react-router-dom";
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/">
      <App />
    </Router>
  </React.StrictMode>
);
