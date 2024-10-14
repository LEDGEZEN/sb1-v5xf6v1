import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Topics from './pages/Topics';
import Subscribe from './pages/Subscribe';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BookSession from './pages/BookSession';
import { UserProvider } from './contexts/UserContext';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/book-session" element={<BookSession />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;