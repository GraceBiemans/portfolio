import React from 'react';
import Project from './Project';
import { ProjectsList } from '@/types/project';

const projects: ProjectsList = [
  {
    title: "Personal Portfolio",
    description: "Built with React, Next.js, TypeScript, and Tailwind CSS.",
    previewUrl: null,
    githubUrl: "https://github.com/GraceBiemans/portfolio",
    demoUrl: null
  },
  {
    title: "European City Weather App",
    description: "A small React-based project built to practice working with APIs and frontend technologies. It uses HTML, CSS, and JavaScript alongside the free 7Timer! API to fetch and display weather data. Users can select from a list of major European cities to view current weather conditions in a clean, responsive interface.",
    previewUrl: "https://weather-app-hazel-nu-88.vercel.app/",
    githubUrl: "https://github.com/GraceBiemans/weather-app",
    demoUrl: "https://weather-app-hazel-nu-88.vercel.app/"
  },
  {
    title: "Ruthless Hotshot and Hauling",
    description: "A website for a local Saskatoon business, made using WordPress. I worked with the owners to bring their brand to life.",
    previewUrl: "https://ruthlesshotshotandhauling.ca/",
    githubUrl: null,
    demoUrl: "https://ruthlesshotshotandhauling.ca/"
  }
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="mt-18 space-y-20 scroll-mt-20">
      {projects.map((project, index) => (
        <Project
          key={project.title}
          {...project}
          isReversed={index % 2 === 0} // Alternate layout for even/odd projects
        />
      ))}
    </div>
  );
};

export default Projects; 