import Home from './pages/Home.js';
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Profile from './pages/Profile.js';
import Game from './pages/Game.js';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
   <div className="flex-column justify-flex-start min-100-vh">
          <div className="container">
            <Routes>
              <Route 
                path="/" 
                element={<Home />}         
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/profile"
                element={<Profile />}
              />
              <Route
                path="/game"
                element={<Game />}
              />
            </Routes>
          </div>        
        </div>
</Router>
  );
}

export default App;
