import React from 'react';
import '../assets/styles.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b" alt="Gym" />
      </div>
      <div className="hero-content">
        <h1>Welcome to GYM STORE</h1>
        <p>Your one-stop shop for all gym equipment and accessories</p>
      </div>
    </section>
  );
};

export default Hero;