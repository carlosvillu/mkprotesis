import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#bddbed] to-[#d7e8bc] py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Restoring Confidence Through Artistry
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              With over two decades of experience in crafting custom ocular prosthetics, 
              we understand that each client's journey is unique. Our mission is to restore 
              not just appearance, but confidence and comfort. Using cutting-edge technology 
              and artistic precision, we create prosthetics that seamlessly blend with your 
              natural appearance, allowing you to face the world with renewed confidence.
            </p>
            <button className="bg-[#ffb990] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 
              transition-colors duration-300 shadow-lg">
              Book Consultation
            </button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800"
              alt="Professional ocularist at work"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium text-gray-600">
                "Every prosthetic tells a story of restoration"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;