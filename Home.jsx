import React from 'react';
import './Home.css';
import profile from '../assets/my1.jpg'; // Replace with your uploaded photo

const Home = () => {
  return (
    <section className="home">
      <div className="intro-text">
        <h1>Hello! I'm <span>Dhruvi Topiya</span></h1>
        <h3>I'm a MERN Stack Developer</h3>
        <p>
          I build scalable applications, explore Cloud Computing and Web Development,
          and have experience with real-time projects like Breast Cancer Prediction, Sentiment Analysis,
          and IoT-based smart shopping trolleys.
        </p>
        <div className="buttons">
          <a href="#projects" className="btn filled">View My Work</a>
          <a href="#contact" className="btn outlined">Contact Me →</a>
        </div>
      </div>
      <div className="profile-pic">
        <img src={profile} alt="Dhruvi Topiya" />
      </div>
    </section>
  );
};

export default Home;