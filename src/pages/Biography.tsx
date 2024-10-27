import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const Biography = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#bddbed] to-[#d7e8bc] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Meet the dedicated team behind Vision Artistry, bringing decades of experience
            and passion to ocular prosthetics.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="space-y-20">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800"
              alt="Dr. Sarah Mitchell"
              className="rounded-lg shadow-xl"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Dr. Sarah Mitchell</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                With over 20 years of experience in ocular prosthetics, Dr. Mitchell has
                dedicated her career to helping patients regain confidence through
                expertly crafted prosthetic eyes. Her journey began at the prestigious
                London Institute of Ophthalmology, where she developed a passion for
                combining artistry with medical precision.
              </p>
              <div className="flex items-center space-x-2 text-[#ffb990]">
                <Award className="h-5 w-5" />
                <span className="text-gray-700">Board Certified Ocularist</span>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Vision Artistry, we believe that every prosthetic eye should be as
                unique as the individual wearing it. Our approach combines traditional
                craftsmanship with modern technology, ensuring the highest quality and
                most natural-looking results possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#ffb990]">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-gray-700">Continuous Innovation</span>
                </div>
                <div className="flex items-center space-x-2 text-[#ffb990]">
                  <Users className="h-5 w-5" />
                  <span className="text-gray-700">Patient-Centered Care</span>
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800"
              alt="Our Workshop"
              className="rounded-lg shadow-xl order-1 md:order-2"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Biography;