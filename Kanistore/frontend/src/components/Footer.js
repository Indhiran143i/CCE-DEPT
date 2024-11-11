import React from 'react';
import { GiComet } from 'react-icons/gi';  // Importing comet icon

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        CCE Department
      </div>
      <div className="container mx-auto text-center mt-4">
        <span className="text-xl">COMET ASSOCIATION</span>
        <GiComet size={30} className="inline-block ml-2 text-yellow-400" />
      </div>
    </footer>
  );
};

export default Footer;
