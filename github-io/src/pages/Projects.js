import meme from '../graphics/meme.jpg';
import { PageNav } from '../components/Components.js'
import '../App.css';

function Projects() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={meme} className="meme" alt="logo" />
        
        
        <div style={{"padding-top":10+'px'}}>
      
      	<PageNav 
      	    links={[{name:"Home",link:"home"},{name:"Projects",link:"projects"}]}
      	/>
      	 
      </div>
      </header>
      
    </div>
  );
}

export default Projects;
