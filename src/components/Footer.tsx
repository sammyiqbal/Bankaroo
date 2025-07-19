import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-teal-400 font-bold text-2xl">₹</span>
              <span className="text-2xl font-bold">Bankaroo</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your smart, user-friendly financial companion. Track income, manage expenses, 
              and achieve your savings goals with ease.
            </p>
            <p className="text-white mb-4 font-bold">
  Follow us here -:
</p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/sammyiqbal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/saman-iqbal-a-a60697304/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              
            </div>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-gray-400">Email: samster@bankaroo.com</p>
              <p className="text-gray-400">Phone: +91 444112644</p>
              <p className="text-gray-400">Address: 468 Sammy St,Delhi,DL 400026</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2025 Bankaroo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;