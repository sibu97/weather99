import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard.jsx';
import Navbar from './components/Navbar.jsx'

import logo from './weather-app.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
