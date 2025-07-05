import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
          {testimonial.photo && (
            <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover" />
          )}
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
      <p className="text-gray-500 text-sm">{new Date(testimonial.date).toLocaleDateString()}</p>
    </motion.div>
  );
};

export default TestimonialCard;