// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
           
            <li>Vaibhav Malhotra
            </li>
        </ul>
        
      </div>
      <div className="rights">
        &copy; {new Date().getFullYear()} Your E-Portal Name. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
