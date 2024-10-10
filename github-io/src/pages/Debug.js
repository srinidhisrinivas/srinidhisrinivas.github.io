import meme from '../graphics/meme.jpg';
import { Header } from '../components/HeaderComps.js'
import { ProjectsTable } from '../components/ProjectComps.js'
import { ProjectPage } from '../pages/ProjectTemplate.js'
import '../App.css';

function Debug() {
  return (
    <ProjectPage 
        header="This is the name of the project"
        images={["TestImage1.jpg", "TestImage2.jpg"]}
        text="Here will be the text of the project"
    />
  );
}

export default Debug;
