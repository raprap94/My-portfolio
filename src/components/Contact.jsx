import React from 'react';
import SparklesText from "./ui/sparkles-text";
import { RainbowButton } from "./ui/rainbow-button";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2><SparklesText text="Contact Me" /></h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <RainbowButton>Submit</RainbowButton>
      </form>
    </section>
  );
};

export default Contact;
