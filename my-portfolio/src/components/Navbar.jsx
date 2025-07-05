import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-2xl font-bold text-primary">Portfolio</Link>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {links.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={link.path} 
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;