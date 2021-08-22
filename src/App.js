// import { Route, Router } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import TechCareer from './components/Career/TechCareer';
import Contact from './components/Contact/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';



function App() {
  return (
    <div>
      <Router>
        <Route>
        <Navbar/> 
      <Home/>
      <About/>
      <TechCareer/>
      <Project/>
      <Contact/>
        </Route>
      </Router>
     
    </div>
  );
}

export default App;
