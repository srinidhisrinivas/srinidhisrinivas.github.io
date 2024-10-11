import logo from './graphics/logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/HomePage.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Resume from './pages/Resume.js';
import Debug from './pages/Debug.js';
import ProjectTemplate from './pages/ProjectTemplate.js';
import projectList from './json/projectList.json'

function App() {
  let projectRoutes = []
  projectList.forEach((proj, idx) => projectRoutes.push(
  	<Route 
  	    path={"/"+proj.route}
  	    element=<ProjectTemplate 
  	        project={proj}/>
            key={idx}
        />
  ));
  // Include this route for debug page
  // <Route path="/debug" element=<Debug /> />
  return (
    <Routes>
    	 <Route path="/"
    	 element={<Navigate to="/home" replace/>}
    	 />
  
    	 <Route path="/home" element=<Home /> />
    	 <Route path="/about" element=<About /> />
    	 <Route path="/resume" element=<Resume /> />
    	 <Route path="/projects" element=<Projects /> />
    	 
    	 {projectRoutes}
    </Routes>
  );
}

export default App;
