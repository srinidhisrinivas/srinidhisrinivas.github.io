import meme from '../graphics/meme.jpg';
import { Header, ProjectsTable } from '../components/Components.js'
import '../App.css';

function Debug() {
  return (
    <div className="App">
      <Header />
      <div className="site-content">
      <div className="proj-page-container">
      <h1 className="page-header"> Plants </h1>
      <p className="page-summary"> Here are some of my projects, erm..., plants that I've grown and taken care of over the years. Click on each for more information! </p>
      
        <ProjectsTable
            projectList={[
                "a","b","c","d"
            ]}
        /> 
      </div>
      </div>      
    </div>
  );
}

export default Debug;
