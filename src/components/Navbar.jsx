import React from 'react';
import { Link } from 'react-scroll';
import { RainbowButton } from "./ui/rainbow-button";


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="about" smooth={true}>About</Link></li>
        <li><Link to="projects" smooth={true}>Projects</Link></li>
        <li><Link to="contact" smooth={true}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;