import React from 'react';
import SparklesText from './ui/sparkles-text';

const Hero = () => {
  return (
    <header className="hero">
      <h2>
        <SparklesText text="Welcome Summoners" />
      </h2>
      <p>
        <SparklesText text="I'm a Creative Developer" />
      </p>
    </header>
  );
};

export default Hero;
