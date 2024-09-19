import logo from './graphics/logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/HomePage.js';
import Projects from './pages/Projects.js';

function App() {
  return (
    <Routes>
    	 <Route path="/"
    	 element={<Navigate to="/home" replace/>}
    	 />
  
    	 <Route path="/home" element=<Home /> />
    	 <Route path="/projects" element=<Projects /> />
    </Routes>
  );
}

export default App;
