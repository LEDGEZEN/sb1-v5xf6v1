import React from 'react';
import './Topics.css';

function Topics() {
  const topicsList = [
    {
      title: "Nutrition",
      description: "Discover the power of nourishing your body with wholesome foods and balanced eating habits.",
      icon: "🍎"
    },
    {
      title: "Well-Being",
      description: "Explore holistic approaches to mental, emotional, and physical health for a balanced life.",
      icon: "🧘‍♀️"
    },
    {
      title: "Slow-Living",
      description: "Learn to embrace a more intentional and mindful approach to daily life and find joy in simplicity.",
      icon: "🌿"
    },
    {
      title: "Self-Care",
      description: "Prioritize your own needs and develop nurturing practices to recharge and rejuvenate.",
      icon: "💖"
    },
    {
      title: "Career & Personal Growth",
      description: "Empower yourself with tools and strategies for professional success and personal development.",
      icon: "🚀"
    },
    {
      title: "Relationships",
      description: "Cultivate meaningful connections and navigate interpersonal dynamics with grace and authenticity.",
      icon: "🤝"
    }
  ];

  return (
    <div className="topics">
      <h1>Explore Our Topics</h1>
      <p className="topics-intro">Dive into a world of knowledge and inspiration designed to nurture your feminine essence and empower your journey.</p>
      <div className="topics-grid">
        {topicsList.map((topic, index) => (
          <div key={index} className="topic-card">
            <div className="topic-icon">{topic.icon}</div>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;