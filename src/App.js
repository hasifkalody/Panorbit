import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages//Home';
import Landing from './Pages/Landing';
import Context from './Components/Context/Context'
function App() {
  return (
    <Context>
      <Router>
        <Routes>
          <Route path='landingPage' element={<Landing/>} />
          <Route path='homepage' element={<HomePage/>} />
        </Routes>
      </Router>
    </Context>
  );
}

export default App;
