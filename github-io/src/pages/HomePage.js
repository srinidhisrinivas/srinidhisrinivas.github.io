import profile from '../graphics/Profile-Full.jpg'
import { Header } from '../components/Components.js'
import React from 'react'
import '../App.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="site-content">
        <img src={profile} className="App-logo" alt="logo" />
        <p>
          Hello! I am Srinidhi Srinivas.
        </p>
        
        <div>
      This div appears   	 
      </div>
      </div>
      
    </div>
  );
}

export default Home;
