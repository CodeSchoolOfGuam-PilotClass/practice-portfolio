import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { funFacts } from '../../data/portfolioData';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div ref={ref}>
          <motion.p 
            className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            I'm from Guam, I have a daughter named Stassie and a girlfriend named Kami. 
            My passion for coding started when I was a teenager, and I've been building 
            software solutions ever since. I specialize in creating robust and user-friendly 
            web applications that solve real problems.
          </motion.p>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              Fun Facts About Me
            </h3>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {funFacts.map((fact, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                  variants={itemVariants}
                >
                  <p className="text-gray-700 dark:text-gray-300">{fact}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;