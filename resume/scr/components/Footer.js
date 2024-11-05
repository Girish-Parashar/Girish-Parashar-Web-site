import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6 text-center">
      <p>© 2024 Girish Parashar. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="mailto:shivratangirishparashar87@gmail.com" className="hover:text-blue-400"><Mail className="w-5 h-5" /></a>
        <a href="https://github.com/Girish-Parashar" className="hover:text-blue-400"><Github className="w-5 h-5" /></a>
        <a href="https://linkedin.com/in/Girish-Parashar" className="hover:text-blue-400"><Linkedin className="w-5 h-5" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
