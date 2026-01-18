import React from 'react';
import { Project } from '../types/resume.types';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export interface ProjectsProps {
  readonly projects: readonly Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="section-container bg-gray-900">
      <h2 className="section-title">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="card p-6">
            <h3 className="text-xl font-semibold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-sm rounded-lg font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <FaGithub />
                  <span className="text-sm">Code</span>
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                >
                  <FaExternalLinkAlt className="text-sm" />
                  <span className="text-sm">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
