import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 w-28 h-400 flex flex-col items-center justify-center bg-gray-800">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaTwitter size={20} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white my-4">
        <FaLinkedin size={20} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white">
        <FaGithub size={20} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white my-4">
        <FaInstagram size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
