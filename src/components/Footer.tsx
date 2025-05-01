import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} Leon Shimizu. All rights reserved.
          </p>
          
          <div className="flex items-center">
            <span className="text-gray-600 dark:text-gray-400 flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> in Guam
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;