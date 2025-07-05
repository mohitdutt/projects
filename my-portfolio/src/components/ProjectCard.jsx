import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg"
    >
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
        <Link 
          to={`/projects/${project.id}`} 
          className="text-primary font-medium hover:underline"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;