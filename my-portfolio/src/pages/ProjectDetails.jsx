import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          
          <div className="mb-8">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <p className="text-gray-700 mb-6">{project.longDescription}</p>
              
              <div className="flex space-x-4">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-secondary"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-secondary"
                  >
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                )}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
              <ul className="space-y-2">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;