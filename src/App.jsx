import React from 'react';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;
