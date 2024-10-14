import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About The Feminine World</h1>
      <div className="about-content">
        <section className="mission">
          <h2>Our Mission</h2>
          <p>At The Feminine World, we are dedicated to empowering women through holistic content and guidance. Our mission is to create a nurturing space where women can explore their feminine essence, grow personally and professionally, and find balance in all aspects of life.</p>
        </section>
        <section className="values">
          <h2>Our Values</h2>
          <ul>
            <li>
              <span className="value-title">Empowerment</span>
              <p>We believe in the inherent strength and potential of every woman.</p>
            </li>
            <li>
              <span className="value-title">Holistic Wellness</span>
              <p>We promote a balanced approach to health, encompassing mind, body, and spirit.</p>
            </li>
            <li>
              <span className="value-title">Authenticity</span>
              <p>We encourage women to embrace their true selves and live authentically.</p>
            </li>
            <li>
              <span className="value-title">Community</span>
              <p>We foster a supportive and inclusive community of like-minded women.</p>
            </li>
          </ul>
        </section>
        <section className="story">
          <h2>Our Story</h2>
          <p>The Feminine World was born from a passion to create a sanctuary for women seeking growth, balance, and connection. Founded by a group of women from diverse backgrounds, we combined our expertise in wellness, psychology, nutrition, and personal development to create a comprehensive platform that addresses the unique needs of modern women.</p>
        </section>
        <section className="team">
          <h2>Our Team</h2>
          <p>Our team consists of experienced professionals, including life coaches, nutritionists, wellness experts, and personal growth mentors. We are committed to providing you with the highest quality content and support on your journey to embracing your feminine essence.</p>
        </section>
      </div>
    </div>
  );
}

export default About;