import logo from './assets/logo.png';
import './App.css';
import Home from './pages/Home.js';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    {/* <Routes>
          <Route 
          path="/" 
          element={<Home />} />
    </Routes> */}
</Router>
  );
}

export default App;
