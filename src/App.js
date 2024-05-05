import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from '../src/pages/auth/Login';
import Signup from '../src/pages/auth/signup';
import Order from '../src/pages/orderForm/order';
import './App.css';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-items">
        <div className="left-nav">
          <ul>
            {/* Use anchor links with href attributes to scroll to specific sections */}
            <li><a href="#content">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about-us">About Us</a></li>
          </ul>
        </div>
        <div className="right-nav">
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>&#9776;</button>
            <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};


const Content = ({ onGetStartedClick }) => {
  return (
    <div className="content" id="content">
      <h1>Transform Your Logistics With Us</h1>
      <p>
        Digitize every aspect of your fleet and logistics operations to unlock
        unprecedented efficiency, bolster safety measures, and slash costs.
        Embrace the future of transportation with our cutting-edge technologies.
      </p>
      <Link to="/login"><button onClick={onGetStartedClick}>Get Started</button></Link>    </div>
  );
};

const Features = () => {
  return (
    <section className="Features">
      <div className="App-section" id="features">
        <h2>Features of Vehicle Tracking System</h2>
        <div className="App-features">
          <div className="App-feature">
            <h3>Real-Time Vehicle Tracking</h3>
            <p>Enhance fleet productivity with our real-time tracking. Stay updated on vehicle locations instantly, enabling efficient resource allocation and proactive decision-making. With live data insights, optimize routes, minimize delays, and deliver exceptional service to customers.</p>
          </div>
          <div className="App-feature">
            <h3>Predictive Maintenance</h3>
            <p>Ensure fleet reliability with predictive maintenance. Proactively identify maintenance needs through data analysis, preventing costly breakdowns and minimizing downtime. Optimize vehicle performance, extend lifespan, and keep operations running smoothly with our predictive maintenance solution.</p>
          </div>
          <div className="App-feature">
            <h3>Environmental Sustainability Features</h3>
            <p>Drive sustainability forward with our environmental features. Monitor carbon emissions, idle time, and fuel consumption to minimize your fleet's environmental footprint. Embrace eco-friendly practices, such as promoting fuel-efficient driving and adopting alternative fuels, to reduce environmental impact and support a greener future.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-content" id="about-us"> {/* Add id="about-us" here */}
        <h2>About Us</h2>
        <p>
          Fleet Management is dedicated to revolutionizing the logistics industry through innovative technology solutions. With a focus on efficiency, safety, and sustainability, we strive to empower businesses to optimize their fleet operations and drive success.
        </p>
        <p>
          Our team consists of passionate individuals with expertise in fleet management, software development, and cutting-edge technologies. We are committed to delivering exceptional products and services that meet the evolving needs of our customers.
        </p>
        <p>
          At Fleet Management, we believe in the power of collaboration and continuous improvement. We work closely with our clients to understand their challenges and tailor solutions that exceed their expectations. Our goal is to build long-lasting partnerships based on trust, reliability, and mutual success.
        </p>
        <p>
          Thank you for choosing Fleet Management. Together, let's transform the future of logistics and transportation.
        </p>
      </div>
    </section>
  );
};


const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleGetStartedClick = () => {
    setShowLoginForm(true);
  };

  return (
    <Router>
      <div className="container" id="container">
        <div className="left-side">
          <img src={require('../src/assets/3.png')} alt="im" style={{ width: '100%' }} />
        </div>
        <div className="right-side">
          <NavigationBar />
          <div className="content-wrapper">
            <Routes>
              <Route
                exact
                path="/"
                element={<Content onGetStartedClick={handleGetStartedClick} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/order" element={<Order />} />

            </Routes>
          </div>
        </div>
      </div>
      <Features />
      <AboutUs />
    </Router>
  );
};

export default App;
