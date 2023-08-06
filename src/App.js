// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCkIx6MIJpWvlztx9q18s3o8xui0XSLguE",
  authDomain: "dynamicwiki-2614d.firebaseapp.com",
  projectId: "dynamicwiki-2614d",
  storageBucket: "dynamicwiki-2614d.appspot.com",
  messagingSenderId: "476145826078",
  appId: "1:476145826078:web:3d8357472482203441710f",
  measurementId: "G-F4FVY2K3JH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// React imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles.css';

// import components
import Header from './components/Header';
import Footer from './components/Footer';

// import pages
import Home from './routes/Home';
import Projects from './routes/Projects';
import Contact from './routes/Contact';
import DynamicWiki from './routes/DynamicWiki';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/DynamicWiki" element={<DynamicWiki />} />
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
