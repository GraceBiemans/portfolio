import React from 'react';
import Project from './Project';

interface ProjectData {
  title: string;
  description: string;
  previewUrl: string;
  githubUrl: string;
  demoUrl: string;
  isPlaceholder?: boolean;
}

const projects: ProjectData[] = [
  {
    title: "European City Weather App",
    description: "A small React-based project built to practice working with APIs and frontend technologies. It uses HTML, CSS, and JavaScript alongside the free 7Timer! API to fetch and display weather data. Users can select from a list of major European cities to view current weather conditions in a clean, responsive interface.",
    previewUrl: "https://weather-app-hazel-nu-88.vercel.app/",
    githubUrl: "https://github.com/GraceBiemans/weather-app",
    demoUrl: "https://weather-app-hazel-nu-88.vercel.app/"
  },
  {
    title: "Rage",
    description: "Placeholder description",
    previewUrl: "https://gracebiemans.github.io/rage/",
    githubUrl: "https://github.com/GraceBiemans/rage",
    demoUrl: "https://gracebiemans.github.io/rage/"
  },
  {
    title: "Project Title",
    description: "Project description will go here. This template shows how the alternating layout will work for future projects, with the preview on the right and content on the left.",
    previewUrl: "",
    githubUrl: "",
    demoUrl: "",
    isPlaceholder: true
  }
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="mt-32 space-y-32 scroll-mt-20">
      {projects.map((project, index) => (
        <Project
          key={project.title}
          {...project}
          isReversed={index % 2 === 1} // Alternate layout for even/odd projects
        />
      ))}
    </div>
  );
};

export default Projects; 