import React from 'react';
import '../assets/styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} GYM STORE. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;