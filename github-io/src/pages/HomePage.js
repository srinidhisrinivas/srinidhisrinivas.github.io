import profile from '../graphics/Profile-Full.jpg'
import bottomplants from '../graphics/bottom-plants.png'
import { Header, LinksTable } from '../components/Components.js'
import React from 'react'
import '../App.css';

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="site-content">
        <div className="home-profile-container">
        <div className="home-photo-container">
        <img src={profile} className="profile-photo" alt="logo" />
        </div>
        <div className="links-box">
        <LinksTable
        	links={
        	[
        	  {"name":"E-Mail",
        	   "url": "mailto:srinidhisrinivas@gmail.com",
        	   "linkText": "srinidhisrinivas@gmail.com"},
        	  {"name":"LinkedIn",
        	   "url": "https://www.linkedin.com/in/srinidhi-srinivas-5999b616b",
        	   "linkText": "srinidhi-srinivas-5999b616b"},
        	  {"name":"GitHub",
        	   "url": "https://www.github.com/srinidhisrinivas",
        	   "linkText": "srinidhisrinivas"}
        	]}
        />
        </div>
        </div>
        <div className="home-text-container">
        <p className="home-text">
          Hello! Welcome to my garden. I am Srinidhi Srinivas. <br/>
          <br/>
          You may be wondering why my photo is spinning. Honestly, I am wondering the same. I hope it doesn't ruin your experience of my garden nonetheless. 
          <br/>
          <br/>
          Feel free to take a look around, smell the flowers, and take in the sights.
          
        </p>
        </div>
        <div className="bottom-image-container">
        <img src={bottomplants} className="bottom-image" />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
