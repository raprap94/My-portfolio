import React from 'react';
import { Link } from 'react-scroll';
import SparklesText from "./ui/sparkles-text";
import { RainbowButton } from "./ui/rainbow-button";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><SparklesText text="My Portfolio" /></h1>
      <ul>
        <li><Link to="about" smooth={true}><RainbowButton>About Me</RainbowButton></Link></li>
        <li><Link to="projects" smooth={true}><RainbowButton>Projects</RainbowButton></Link></li>
        <li><Link to="contact" smooth={true}><RainbowButton>Contact</RainbowButton></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;