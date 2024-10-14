import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookSession.css';

function BookSession() {
  const [sessionType, setSessionType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    alert(`Session booked: ${sessionType} on ${date} at ${time}`);
    navigate('/dashboard');
  };

  return (
    <div className="book-session">
      <h1>Book a Session</h1>
      <form onSubmit={handleSubmit}>
        <select 
          value={sessionType} 
          onChange={(e) => setSessionType(e.target.value)}
          required
        >
          <option value="">Select Session Type</option>
          <option value="Personal Growth Consultation">Personal Growth Consultation</option>
          <option value="Nutrition Planning">Nutrition Planning</option>
          <option value="Wellness Coaching">Wellness Coaching</option>
        </select>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <input 
          type="time" 
          value={time} 
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <button type="submit">Book Session</button>
      </form>
    </div>
  );
}

export default BookSession;