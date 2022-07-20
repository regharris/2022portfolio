import React from 'react';
import { Link } from 'react-router-dom';




let Navbar = () => {
    return(
        <nav class="navbar fixed-top">
        <ul id="Navbar">
          <li className='Navbaritem'>Home</li>
          <li className='Navbaritem'>Resume</li>
          <li className='Navbaritem'>Projects</li>
          <li className='Navbaritem'>Contact</li>
        </ul>
        </nav>
        
    )
}


export default Navbar

