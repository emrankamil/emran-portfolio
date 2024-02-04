// Project.jsx
import React from 'react';
import projectData from '@/data/ProjectData';
import { ProjectData } from '@/types/types';
import ProjectCard from '@/components/projects/ProjectCard';

const Project = () => {
  return (
    <div className="">
      <div className="h-64 mx-auto md:grid grid-cols-2 grid-rows-auto gap-4">
        {projectData.map((project: ProjectData) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Project;
