import { Header } from '../components/HeaderComps.js'
import { ProjectsTable } from '../components/ProjectComps.js'
import '../App.css';

function Projects() {
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

export default Projects;
