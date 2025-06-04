import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pagesPReact/Navbar';
import Accueil from './pagesPReact/page1';
import Apropos from './pagesPReact/page2';
import Footer from './pagesPReact/Footer';
import Contact from './pagesPReact/page5';
import Activities from './pagesPReact/page4';
import Membres from './pagesPReact/page6';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/page2" element={<Apropos />} />
        <Route path="/page4" element={<Activities />} />
        <Route path="/page5" element={<Contact />} />
        <Route path="/page6" element={<Membres />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
