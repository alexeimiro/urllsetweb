import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import Features1 from './components/Features1';
import { Legal } from './pages/Legal';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function MainPage() {
  return (
    <>
      <Hero />
      <Features />
      <Features1 />
    </>
  );
}

export default App;
