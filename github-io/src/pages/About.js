import meme from '../graphics/meme.jpg';
import bottomplants from '../graphics/bottom-plants.png'
import { Header } from '../components/HeaderComps.js'
import { ImageScroller } from '../components/ProjectComps.js'
import { useState } from 'react'
import '../App.css';

function About() {
  let bday = new Date("1998-03-23T12:17:00")
  const [curTime, setCurTime] = useState((new Date()-bday));
  
  let bdayDate = bday.toISOString().substring(0,10);
  let bdayTime = bday.toISOString().substring(11,16);
  function handleUpdate(){
     setCurTime((new Date()-bday));
  }
  
  setTimeout(handleUpdate, 1000);
  return (
    <div className="App">
      <Header />
      <div className="site-content">
        <div className="about-page-container">
        <h1 className="page-header"> About Me </h1>
        <div className="about-content-container">
        <div className="about-photo-container">
           <ImageScroller images={["Frankfurt.jpeg", "Juggle.jpeg", "Momfeed.jpeg","DogHold.jpeg","Minnesota.jpg","Bergen.jpg", "Quandary.jpg", "Amsterdam.jpg"]} folder="about" altClassName="about-image"/>
        </div>
        <div className="about-text-container">
        <p> <b>Time in Material Existence:</b> {parseInt(curTime/1000) + " seconds (since " + bdayDate + ", " +bdayTime+")"} </p>
        <p>
          I am Srinidhi Srinivas. My name is hard to pronounce, so I often just go by Srini (<i>"shri-ni"</i>), which is itself hard enough. I am originally from <a href='https://en.wikipedia.org/wiki/Bangalore' target='_blank' className='link-url'>Bangalore</a>, a city in the south of India, where my name is at least a little more typical than the rest of the world. Also typical for Bangalore, the "Silicon Valley of India", is the fact that I'm a programmer.
          <br/><br/>
          Following my schooling, I completed my B.S. in Computer Science (2016-2020) at <a href='https://www.cse.osu.edu/' target='_blank' className='link-url'>THE Ohio State University</a> in Columbus, OH, USA, where I had the chance to gain practical experience with a lot of programming projects and employment, as well as to explore my personal interests of psychology, linguistics, and philosophy, which were neatly encompassed under the minor program "Cognitive Science". One of the cooler experiences I had during this time was a 10-week-long internship in Colorado where I fell in love with the Rocky Mountains and hiking.
          <br/><br/>
          After my adventures in the USA, a scholarship from the <a href='https://www.daad.de/de/' target='_blank' className='link-url'>DAAD</a> allowed me to pursue my M.Sc. in <a href='https://www.ikw.uni-osnabrueck.de/startseite.html' target='_blank' className='link-url'>Cognitive Science</a> (2020-2023), in Osnabrück, Germany, where I still currently am. Aside from the interesting research and professional experience I've gained here, I have had the most enriching personal experience through dialogues with several people from several different backgrounds in several languages. Moreover, life in Germany has indulged my delight in learning languages. Having learned German to fluency, I also passionately teach it to refugees trying to navigate a new society. My latest language project is learning Russian, which has already connected me to a surprising number of people here.
          <br/><br/>
          My hobbies include lots of physical activity. My main passion is basketball, which I've played and watched for about 15 years. I also enjoy long walks/hikes and weight-training for the mobility and strength to keep up with the aforementioned activities. You can sometimes find me in the mosh pit at rock/metal(core) concerts. I am also an avid reader, largely of topics in psychology and philosophy, but also of literature and the occasional random Wikipedia article. At home, I regularly practice mindfulness through meditation and introspection. To fuel my diverse activities, I enjoy taking the time every now and then to cook an elaborate meal. Finally, I love spending time with my amazing, supportive friends and family and making dumb jokes to cope with my existence through shared laughter.
        </p>
        <span class='about-secret-text'>
        (Psst...! Here's a little secret: I actually have no experience in gardening. I once accidentally killed a succulent, the easiest plants to take care of, by over-watering. Plants are cool, though!)
        </span>
        </div>
        </div>
        </div>
      </div>      
    </div>
  );
}

export default About;
