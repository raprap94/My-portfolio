import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Articles from './components/Articles'
import Footer from './components/Footer'; // Import the Footer component
import './styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Articles/>
      <Contact />
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default App;
