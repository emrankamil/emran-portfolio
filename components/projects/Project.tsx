
import React from 'react';
import projectData from '@/data/ProjectData';
import { ProjectData } from '@/types/types';
import ProjectCard from './Card'

const Project = () => {
  return (
    <div id="projects" className="flex flex-col py-8">
      <div className="text-center " >
            <h1 className="text-purple-300 text-5xl font-bold p-4">PROJECTS</h1>
            <p>Here you will find some of my personal and clients projects that I created, with each project containing its own GitHub Link</p>
        </div>
      <div className="grid-cols-2 grid-rows-auto md:grid gap-2 mx-auto pt-3">
        {projectData.map((project: ProjectData) => (
          <div key={project.id} className="max-w-1/2 my-2 ">
            <ProjectCard project={project} />

          </div>
        ))}
      </div>

    </div>
  );
}

export default Project;
