import React from 'react';
import  ReactDOM  from 'react-dom';
import About from './Components/About.js';
import Footer from './Components/Footer.js';
import ResumeDecor from './Components/resumeDecoration.js';
import Resume from './Components/Resume.js';
import Projects from './Components/Projects.js';
import ProjectDecor from './Components/projectDecoration.js';
import ContactDecor from './Components/contactDecoration.js';
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


const App = () =>{
    return(
        <div> 
            <BrowserRouter>
            
        <nav class="navbar fixed-top">
        <ul id="Navbar">
            <Link className='Navbaritem' to="#about">Home</Link>
            <Link className='Navbaritem' to="#resume">Resume</Link>
            <Link className='Navbaritem' to="#projects">Projects</Link>
            <Link className='Navbaritem' to="#contact">Contact</Link>
        </ul>
        </nav>
            <About />
            <ResumeDecor />
            <Resume />
            <ProjectDecor />
            <Projects />
            <ContactDecor />
            <Footer />
            </BrowserRouter >
        </div>
    )
}



ReactDOM.render(<App />,document.querySelector('#root'))