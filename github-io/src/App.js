import logo from './graphics/logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/HomePage.js';
import Projects from './pages/Projects.js';
import About from './pages/About.js';
import Resume from './pages/Resume.js';

function App() {
  return (
    <Routes>
    	 <Route path="/"
    	 element={<Navigate to="/home" replace/>}
    	 />
  
    	 <Route path="/home" element=<Home /> />
    	 <Route path="/about" element=<About /> />
    	 <Route path="/resume" element=<Resume /> />
    	 <Route path="/projects" element=<Projects /> />
    </Routes>
  );
}

export default App;
