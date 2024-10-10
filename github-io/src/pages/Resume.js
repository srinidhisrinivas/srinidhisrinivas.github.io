import meme from '../graphics/meme.jpg';
import { Header } from '../components/HeaderComps.js'
import '../App.css';

function Resume() {
  return (
    <div className="App">
      <Header />
      <div className="site-content">
        <img src={meme} className="meme" alt="logo" />
        <p>
          Hello! My resume will be visible here.
        </p>
      </div>      
    </div>
  );
}

export default Resume;
