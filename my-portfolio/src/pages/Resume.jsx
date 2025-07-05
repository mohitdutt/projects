import { motion } from 'framer-motion';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import resumePdf from '../assets/resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">My Resume</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex justify-center mb-6">
            <a 
              href={resumePdf} 
              download="YourName_Resume.pdf"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-secondary transition-colors"
            >
              Download Resume
            </a>
          </div>
          
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <Document
              file={resumePdf}
              loading={<div className="p-8 text-center">Loading resume...</div>}
              error={<div className="p-8 text-center text-red-500">Failed to load resume</div>}
            >
              <Page pageNumber={1} />
            </Document>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;