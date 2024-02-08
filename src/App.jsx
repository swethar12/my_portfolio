import React from "react";
import { Link, Element } from "react-scroll";
import About from './components/About';
import Contact from './components/Contact';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from "./components/Footer";
import './App.css';

function App() {
  const navItems = [
    { id: 1, title: 'Home' },
    { id: 2, title: 'About' },
    { id: 3, title: 'Skills' },
    { id: 4, title: 'Projects' },
    { id: 5, title: 'Contact' },
  ];

  return (
    <div className="bg-grey-200">
      <Navbar navItems={navItems} />
      <Element name="Home"><Landing id="Home" /></Element>
      <Element name="About"><About id="About" /></Element>
      <Element name="Skills"><Skills id="Skills" /></Element>
      <Element name="Projects"><Projects id="Projects" /></Element>
      <Element name="Contact"><Contact id="Contact" /></Element>
     
      <Footer/>
    </div>
  );
}

export default App;

// Navbar.jsx

