import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Home from './routes/Home';
import DynamicWiki from './routes/DynamicWiki';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/DynamicWiki" element={<DynamicWiki />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
