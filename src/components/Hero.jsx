import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import heroImage from '../assets/hero-image.jpg';
import roseImage from '../assets/rose.svg';

function Hero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Drown In\nYOUR feminine\nEssence",
      description: "Sit Back & Enjoy Beneficial Content That Acts As Your Daily Guide, Covering Holistic Topics Such As Nutrition, Well-Being, Slow-Living, Valuable Knowledge, & More!"
    },
    {
      title: "Embrace Your\nAuthentic\nSelf",
      description: "Discover the power within you and learn to embrace your true feminine essence through our curated content and expert guidance."
    },
    {
      title: "Nurture Your\nMind, Body\n& Soul",
      description: "Explore holistic approaches to well-being and personal growth, designed specifically for the modern woman's needs."
    }
  ];

  const handleBookSession = () => {
    navigate('/book-session');
  };

  const handleSubscribe = () => {
    navigate('/subscribe');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          {slides[currentSlide].title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {index === 1 ? <span className="highlight">{line}</span> : line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <img src={roseImage} alt="Rose" className="rose-image" />
        <p>{slides[currentSlide].description}</p>
        <div className="cta-buttons">
          <button className="cta-btn book" onClick={handleBookSession}>Book A Session!</button>
          <button className="cta-btn book" onClick={handleSubscribe}>Subscribe Now!</button>
        </div>
        <div className="slider-controls">
          <button className="arrow-btn" onClick={nextSlide}>&rarr;</button>
          <div className="dots">
            {slides.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Woman in pink shirt" />
      </div>
      <div className="social-handle">@thefeminineworld | www.thefeminineworld.com</div>
    </div>
  );
}

export default Hero;