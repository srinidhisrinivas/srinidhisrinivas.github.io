import { Header } from '../components/HeaderComps.js'
import { ProjectsTable } from '../components/ProjectComps.js'
import '../App.css';
import projectList from '../json/projectList.json'

function Projects() {
  // Filter the relevant information for the projects display page
  let projectListFiltered = projectList.map((proj) => {
     return {
  	"short_name": proj.short_name,
  	"route": proj.route
  	}
  });
  return (
    <div className="App">
      <Header />
      <div className="site-content">
      <div className="proj-page-container">
      <h1 className="page-header"> Projects </h1>
      <p className="page-summary"> Here are some of my projects, erm..., plants that I've grown and taken care of over the years. Click on each for more information! </p>
      
        <ProjectsTable
            projectList={projectListFiltered}
        /> 
      </div>
      </div>      
    </div>
  );
}

export default Projects;
