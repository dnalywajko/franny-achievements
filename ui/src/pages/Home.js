// Home.js
import React from 'react';
import AchievementTree from '../components/AchievementTree/AchievementTree.js';
//import './Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Achievement Tracker</h2>
      <AchievementTree />
    </div>
  );
}

export default Home;
