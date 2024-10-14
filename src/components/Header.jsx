import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import './Header.css';

function Header() {
  const { user, logout } = useContext(UserContext);

  return (
    <header className="header">
      <div className="logo">THE FEMININE WORLD</div>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/topics">TOPICS</Link></li>
          <li><Link to="/subscribe">SUBSCRIBE</Link></li>
          {user && <li><Link to="/dashboard">DASHBOARD</Link></li>}
        </ul>
      </nav>
      {user ? (
        <button className="login-btn" onClick={logout}>LOG OUT</button>
      ) : (
        <Link to="/login" className="login-btn">LOG IN</Link>
      )}
    </header>
  );
}

export default Header;