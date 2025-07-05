import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const TestimonialForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    text: '',
    photo: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'testimonials'), {
        ...formData,
        date: new Date().toISOString(),
      });
      setSubmitted(true);
      setFormData({
        name: '',
        role: '',
        text: '',
        photo: '',
      });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('Error adding testimonial: ', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Share Your Experience</h2>
      
      {submitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          Thank you for your testimonial!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
              Your Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div>
            <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
              Your Testimonial
            </label>
            <textarea
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL (optional)
            </label>
            <input
              type="url"
              id="photo"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition-colors"
          >
            Submit Testimonial
          </button>
        </form>
      )}
    </div>
  );
};

export default TestimonialForm;