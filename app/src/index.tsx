import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
