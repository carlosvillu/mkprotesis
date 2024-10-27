import React from 'react';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#bddbed] to-[#d7e8bc] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Portfolio</h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Explore our collection of custom ocular prosthetics, showcasing our commitment to 
            excellence in craftsmanship and attention to detail.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <PortfolioGrid />
      </div>
    </div>
  );
};

export default Portfolio;