import logo from './graphics/logo.svg';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage.js';
import PageTwo from './pages/PageTwo.js';

function App() {
  return (
    <Routes>
    	 <Route path="/"
    	 element={<Navigate to="/home" replace/>}
    	 />
  
    	 <Route path="/home" element=<HomePage /> />
    	 <Route path="/pagetwo" element=<PageTwo /> />
    </Routes>
  );
}

export default App;
