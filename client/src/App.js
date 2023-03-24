import Home from './pages/Home.js';

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
            </Routes>
          </div>        
        </div>
</Router>
  );
}

export default App;
