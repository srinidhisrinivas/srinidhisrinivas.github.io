import profile from '../graphics/Profile-Full.jpg'
import { Header } from '../components/Components.js'
import React from 'react'
import '../App.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="site-content">
        <div className="home-photo-container">
        <img src={profile} className="profile-photo" alt="logo" />
        <div className="links">
        E-Mail: srinidhisrinivas@gmail.com <br/>
        LinkedIn: www.linkedin.com/in/srinidhi-srinivas-5999b616b
 <br/>
        GitHub: github.com/srinidhisrinivas
        </div>
        </div>
        <div className="home-text-container">
        <p className="home-text">
          Hello! I am Srinidhi Srinivas. <br/>
          <br/>
          You may be wondering why my photo is spinning. Honestly, I am wondering the same. I hope it doesn't ruin your experience of my garden nonetheless. 
          
        </p>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
