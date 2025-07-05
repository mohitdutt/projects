import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-800"
          >
            Hi, I'm <span className="text-primary">Your Name</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 mb-4">
              Front-end Developer & UI Designer
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              I create clean, well-crafted interfaces that not only look good but provide excellent user experience.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="/projects" 
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors text-center"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-blue-50 transition-colors text-center"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;