import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { HairRemoval } from './pages/services/HairRemoval';
import { FillerBotox } from './pages/services/FillerBotox';
import { Waxing } from './pages/services/Waxing';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/hair-removal" element={<HairRemoval />} />
            <Route path="/services/filler-botox" element={<FillerBotox />} />
            <Route path="/services/waxing" element={<Waxing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;