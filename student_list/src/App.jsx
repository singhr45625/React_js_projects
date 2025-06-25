import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Offers from './components/Offers';
import SocialMedia from './components/SocialMedia';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import './assets/styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Products />
        <Offers />
        <SocialMedia />
        <Contact />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
