// components/Explore.js
import React from 'react';
import Navbar from './Navbar'
import { Link } from "react-router-dom";
const Expo = () => {
  return (
    <>
    <Navbar/>
    <div className="explore-container">
      <h1>Explore Features</h1>
      <div className="feature-options">
        {/* Add feature options here */}
        <div className="feature-card">
          <h2>Report Summarizer</h2>
          <p>Effortlessly summarize legal documents and reports.</p>
         
          <Link to="/TextSummarizer">  <button className="btn-explore"  >Learn More</button></Link>
        </div>
        <div className="feature-card">
          <h2>Case Trial</h2>
          <p>Manage and track court cases efficiently.</p>
          <button className="btn-explore">Learn More</button>
        </div>
        <div className="feature-card">
          <h2>Court Calendar</h2>
          <p>Securely communicate and share documents with clients.</p>
          
          <Link to="/CourtCalender"><button className="btn-explore">Learn More</button></Link>
        </div>
        <div className="feature-card">
          <h2>Video Conferencing</h2>
          <p>Securely communicate and share documents with clients.</p>
          <button className="btn-explore">Learn More</button>
        </div>
        <div className="feature-card">
          <h2>Client Portals</h2>
          <p>Securely communicate and share documents with clients.</p>
          <button className="btn-explore">Learn More</button>
        </div>
        <div className="feature-card">
          <h2>User Support</h2>
          <p>Securely communicate and share documents with clients.</p>
          <button className="btn-explore">Learn More</button>
        </div>
      </div>
    </div>
    
    </>

  );
};

export default Expo;
