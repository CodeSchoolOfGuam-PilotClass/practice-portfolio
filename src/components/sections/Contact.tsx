import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, FileText } from 'lucide-react';
import { resumeURL } from '../../data/portfolioData';

const Contact: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(headingRef, { once: true });
  
  const wiggleAnimation = {
    wiggle: {
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5, delay: 0.2 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          ref={headingRef}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={isInView ? "wiggle" : ""}
          variants={wiggleAnimation}
        >
          Get In Touch
        </motion.h2>
        
        <div className="max-w-2xl mx-auto text-center">
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            I'm currently looking for new opportunities. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </motion.p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <motion.a 
              href="mailto:contact@leonshimizu.com" 
              className="flex items-center gap-2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-md shadow-sm transition-colors"
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Mail size={20} />
              <span>contact@leonshimizu.com</span>
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/leonshimizu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0077B5] hover:bg-[#006399] text-white px-6 py-3 rounded-md shadow-sm transition-colors"
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </motion.a>
            
            <motion.a 
              href={resumeURL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-md shadow-sm transition-colors"
              whileHover={{ y: -3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <FileText size={20} />
              <span>Download Résumé</span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;