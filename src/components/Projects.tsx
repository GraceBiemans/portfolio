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
    description:
      "A simple and informative website for a local Saskatchewan company, reflecting their skills and goals. This site allows clients to get to know the company and contact them through a form or any of their provided information. I collaborated with the owners to create their logo and to give them a cost-effective presence online, including Google business setup.",
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