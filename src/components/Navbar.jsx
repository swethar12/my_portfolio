/*import React from 'react'
import logo from '../assets/logo.png'; 
import { useRef } from 'react';

const Navbar = () => {
  
  return (
    <div className="sticky top-0 z-50">
        
        <nav className="bg-blue-300 p-4 w-full flex items-center justify-between rounded-xl">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Your Logo"
            className="h-8 w-8 mr-2"
          />
          <p className='text-black'>PORTFOLIO</p>
        </div>
        <ul className="flex space-x-8 text-black mr-4">
          <li className="inline-block"><a href="#landing">Home</a></li>
          <li className="inline-block"><a href="#about">About</a></li>
          <li className="inline-block"><a href="#skills">Skills</a></li>
          <li className="inline-block"><a href="#projects">Projects</a></li>
          <li className="inline-block"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
        </div>
    
  )
}

export default Navbar;


import React from 'react';
import logo from '../assets/logo.png'; 
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ({ navItems }) => {
  return (
    <div>
      <nav className="bg-blue-300 p-4 w-full flex items-center justify-between rounded-xl">
        <div className="flex items-center">
          <img src={logo} alt="Your Logo" className="h-8 w-8 mr-2" />
          <p className='text-black'>PORTFOLIO</p>
        </div>
        <ul className="flex space-x-8 text-black">
          {navItems.map((navItem) => (
            <li key={navItem.id}>
              <Link to={navItem.title} smooth={true} duration={500}>
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;*/

import React from 'react';
import logo from '../assets/logo.png'; 
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = ({ navItems }) => {
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-cyan-600 bg-opacity-90 p-4 w-full flex items-center justify-between rounded-l">
        <div className="flex items-center">
          <img src={logo} alt="Your Logo" className="h-8 w-8 mr-2" />
          <p className='text-white font-bold'>PORTFOLIO</p>
        </div>
        <ul className="flex space-x-8 text-white font-semibold">
          {navItems.map((navItem) => (
            <li key={navItem.id} className="cursor-pointer  hover:text-black">
              <Link to={navItem.title} smooth={true} duration={500}>
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;


