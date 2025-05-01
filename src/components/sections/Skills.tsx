import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/portfolioData';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="bg-white dark:bg-gray-700 px-6 py-3 rounded-full shadow-sm text-gray-700 dark:text-gray-200 font-medium"
                whileHover={{ 
                  y: -3, 
                  backgroundColor: '#0284c7', 
                  color: '#ffffff'
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {skill}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;