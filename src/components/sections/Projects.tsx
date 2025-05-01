import React from 'react';
import { motion } from 'framer-motion';
import { Github as GitHub, ExternalLink } from 'lucide-react';
import { capstone, miniCapstone, projects } from '../../data/portfolioData';
import { Project as ProjectType } from '../../types';

const FeatureProject: React.FC<{ project: ProjectType, reverse?: boolean }> = ({ project, reverse = false }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-16`}>
      <motion.div 
        className="md:w-1/2 overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={project.image} 
            alt={project.imageAlt} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="md:w-1/2"
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            <GitHub size={16} />
            <span>GitHub</span>
          </a>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-800 text-white px-4 py-2 rounded-md transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-48 overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.imageAlt} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span 
              key={index} 
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-3 py-1.5 rounded-md transition-colors"
          >
            <GitHub size={14} />
            <span>GitHub</span>
          </a>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm bg-sky-600 hover:bg-sky-700 dark:bg-sky-700 dark:hover:bg-sky-800 text-white px-3 py-1.5 rounded-md transition-colors"
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        {/* Featured Projects */}
        <div className="mb-20">
          <FeatureProject project={capstone} />
          <FeatureProject project={miniCapstone} reverse />
        </div>
        
        {/* Other Projects */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          Other Projects
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;