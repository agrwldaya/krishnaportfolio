


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/navbar.jsx';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/contact.jsx';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        {/* Define routes for Home only */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;