import React, { useState } from 'react';
import './Subscribe.css';

function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the subscription logic
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <div className="subscribe">
      <h1>Join Our Feminine Community</h1>
      <div className="subscribe-content">
        <div className="subscribe-info">
          <h2>Embrace Your Feminine Power</h2>
          <p>Subscribe to our newsletter and unlock a world of feminine wisdom, self-care tips, and exclusive content designed to nurture your inner goddess.</p>
          <ul className="benefits">
            <li>Weekly inspiration and affirmations</li>
            <li>Expert advice on holistic well-being</li>
            <li>Exclusive access to digital events and workshops</li>
            <li>Special offers on our premium content</li>
          </ul>
        </div>
        <div className="subscribe-form">
          <h3>Stay Connected</h3>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe Now</button>
          </form>
          <p className="form-footer">Join 10,000+ women on their journey to self-discovery</p>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;