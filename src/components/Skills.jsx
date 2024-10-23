import React from 'react';
import IconCloud from './ui/icon-cloud';
import SparklesText from "./ui/sparkles-text";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="icon-cloud-demo relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background px-5 pb-5 pt-2">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

const Skills = () => {
  return (
    <section id="skills" className="skills bg-gray-900 text-white py-10 px-5">
  <h2 className="text-3xl font-bold text-center mb-5"><SparklesText text="Skills" /></h2>
  <div className="icon-cloud-demo mb-8">
    <IconCloudDemo />
  </div>
  <p className="text-center text-2xl mb-4">
    I am a passionate student focusing on various technologies including:
  </p>
  <ul className="list-disc list-inside text-left mx-auto max-w-lg text-xl">
    <li className="py-1">JavaScript and TypeScript for web development</li>
    <li className="py-1">React for building user interfaces</li>
    <li className="py-1">Node.js and Express for backend development</li>
    <li className="py-1">Understanding of databases like MongoDB and PostgreSQL</li>
    <li className="py-1">Experience with Git for version control</li>
    <li className="py-1">Familiarity with cloud services like AWS</li>
    <li className="py-1">UI/UX design principles to enhance user experience</li>
  </ul>
</section>
  );
};

export default Skills;
