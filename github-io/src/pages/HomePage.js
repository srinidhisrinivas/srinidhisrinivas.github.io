import profile from '../graphics/Profile-Full.jpg'
import bottomplants from '../graphics/bottom-plants.png'
import { LinksTable } from '../components/HomePageComps.js'
import { Header } from '../components/HeaderComps.js'
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
        <div className="resume-link-container">
        <a href='https://drive.google.com/file/d/1dlBgmJIQgSqsGq9Ikthw1FQFPq3zbt69/view?usp=sharing' target='_blank' className='link-url'>Résumé</a>
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
          Hello! I am Srinidhi Srinivas. Welcome to my garden. Here you will find a brief botanical exhibition of my experiences (as a gardener, of course) and the fruits of my labour. <br/>
          <br/>
           Feel free to take a look around, smell the flowers, and read up on the variety of plants that reside here.
          <br/>
          <br/>
          You may be wondering why my photo is spinning. Honestly, I am wondering the same. I think a plant pest is playing tricks on me. I hope it doesn't ruin your experience of my garden nonetheless. 
          
        </p>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
