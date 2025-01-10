import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import History from './components/History';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <History />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;