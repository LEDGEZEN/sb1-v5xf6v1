import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const { user } = useContext(UserContext);

  const subscribedContent = [
    { title: "Embracing Your Feminine Power", type: "Article" },
    { title: "Mindfulness Meditation for Women", type: "Video" },
    { title: "Balancing Career and Personal Life", type: "Podcast" },
  ];

  const bookedSessions = [
    { title: "Personal Growth Consultation", date: "2023-06-15", time: "14:00" },
    { title: "Nutrition Planning Session", date: "2023-06-22", time: "10:30" },
  ];

  return (
    <div className="dashboard">
      <h1>Welcome, {user.name}!</h1>
      
      <section className="subscribed-content">
        <h2>Your Subscribed Content</h2>
        <ul>
          {subscribedContent.map((content, index) => (
            <li key={index}>
              <span className="content-title">{content.title}</span>
              <span className="content-type">{content.type}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="booked-sessions">
        <h2>Your Booked Sessions</h2>
        <ul>
          {bookedSessions.map((session, index) => (
            <li key={index}>
              <span className="session-title">{session.title}</span>
              <span className="session-datetime">{session.date} at {session.time}</span>
            </li>
          ))}
        </ul>
      </section>

      <Link to="/book-session" className="book-session-btn">Book a New Session</Link>
    </div>
  );
}

export default Dashboard;