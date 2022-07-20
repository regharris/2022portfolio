import React from 'react';
import  ReactDOM  from 'react-dom';
import About from './Components/About.js';
import Footer from './Components/Footer.js';
import ResumeDecor from './Components/resumeDecoration.js';
import Resume from './Components/Resume.js';
import Projects from './Components/Projects.js';
import ProjectDecor from './Components/projectDecoration.js';
import ContactDecor from './Components/contactDecoration.js';
import Navbar from './Components/Navbar.js';
import './index.css'

const App = () =>{
    return(
        <div> 
            <Navbar /> 
            <About />
            <ResumeDecor />
            <Resume />
            <ProjectDecor />
            <Projects />
            <ContactDecor />
            <Footer />
        </div>
    )
}



ReactDOM.render(<App />,document.querySelector('#root'))