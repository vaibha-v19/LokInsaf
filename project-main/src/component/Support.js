
import React from 'react';
import Navbar from './Navbar'
const Support = () => {
  return (

    <>
     <Navbar/>
     <div className="support-container">
      <h1>Contact Support</h1>
      <p>If you have any questions or need assistance, please feel free to reach out to our support team. We are here to help!</p>

      <div className="support-options">
        <h2>Support Options:</h2>
        <ul>
          <li>
            <strong>Phone:</strong> <a href="tel:+11234567890">+8595318084</a>
          </li>
          <li>
            <strong>Email:</strong> <a href="mailto:support@judiciary-portal.com">support@judiciary-portal.com</a>
          </li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Contact Us:</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
    
    </>
   
  );
};

export default Support;
