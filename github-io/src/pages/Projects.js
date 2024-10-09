import meme from '../graphics/meme.jpg';
import { Header } from '../components/Components.js'
import '../App.css';

function Projects() {
  return (
    <div className="App">
      <Header />
      <div className="site-content">
        <img src={meme} className="meme" alt="logo" />
        <p>
          Hello! My projects will be visible here.
        </p>
        
        <div>
      This div appears   	 
      </div>
      </div>      
    </div>
  );
}

export default Projects;
