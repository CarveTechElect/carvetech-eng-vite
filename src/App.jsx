import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Picture from './Pages/Picture';
import Video from './Pages/Video';

function App() {
  return (
      <Router>
      <Header />
      <main>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/picture" element={<Picture />} />
              <Route path="/video" element={<Video />} />
          </Routes>
          </main>
          <Footer />
      </Router>
  );
}
export default App;