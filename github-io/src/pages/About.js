import meme from '../graphics/meme.jpg';
import bottomplants from '../graphics/bottom-plants.png'
import { Header } from '../components/HeaderComps.js'
import '../App.css';

function About() {
  return (
    <div className="App">
      <Header />
      <div className="site-content">
        <img src={meme} className="meme" alt="logo" />
        <p>
          Hello! My about me section will be visible here.
        </p>
        <div className="bottom-image-container">
        <img src={bottomplants} className="bottom-image" />
        </div>
      </div>      
    </div>
  );
}

export default About;
