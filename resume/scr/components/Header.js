import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => (
  <header className="bg-blue-600 text-white py-20">
    <div className="container mx-auto px-6">
      <h1 className="text-4xl font-bold mb-4">Girish Parashar</h1>
      <p className="text-xl mb-6">Python-Driven Data Analyst</p>
      <div className="flex space-x-4">
        <a href="https://github.com/Girish-Parashar" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200">
          <Github className="w-5 h-5 mr-2" /> GitHub
        </a>
        <a href="https://linkedin.com/in/Girish-Parashar" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-200">
          <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
        </a>
        <a href="mailto:shivratangirishparashar87@gmail.com" className="flex items-center hover:text-blue-200">
          <Mail className="w-5 h-5 mr-2" /> Email
        </a>
      </div>
    </div>
  </header>
);

export default Header;
