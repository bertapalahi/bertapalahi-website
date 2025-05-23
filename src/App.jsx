import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Interiors from './Interiors';
import Casaments from './Casaments';
import Esports from './Esports';
import Sessions from './Sessions';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="sidebar">
          <NavLink to="/" end className="nav-link">Inici</NavLink>
          <NavLink to="/interiors" className="nav-link">Interiors</NavLink>
          <NavLink to="/casaments" className="nav-link">Casaments</NavLink>
          <NavLink to="/esports" className="nav-link">Esports</NavLink>
          <NavLink to="/sessions" className="nav-link">Sessions</NavLink>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/interiors" element={<Interiors />} />
            <Route path="/casaments" element={<Casaments />} />
            <Route path="/esports" element={<Esports />} />
            <Route path="/sessions" element={<Sessions />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
