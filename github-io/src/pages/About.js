import meme from '../graphics/meme.jpg';
import { Header } from '../components/Components.js'
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
      </div>      
    </div>
  );
}

export default About;
