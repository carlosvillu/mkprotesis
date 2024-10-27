import React from 'react';
import TestimonialCard from '../components/Home/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "David Thompson",
      text: "My journey with Vision Artistry has been nothing short of transformative. When I first lost my eye in a workplace accident, I was devastated and worried about how it would affect my personal and professional life. Dr. Mitchell and her team took the time to understand not just my medical needs, but my emotional concerns as well. The level of detail they achieved in matching my prosthetic eye to my natural one is remarkable. The entire process, from initial consultation to final fitting, was handled with such care and professionalism. What impressed me most was their commitment to follow-up care and ensuring long-term comfort. Thanks to their expertise, I've regained my confidence and can go about my daily life without feeling self-conscious. The prosthetic is so natural that even close friends can't tell which eye is prosthetic.",
      date: "March 2024"
    },
    {
      name: "Emily Rodriguez",
      text: "The team's expertise in color matching is exceptional. They created a perfect match for my prosthetic eye, and their attention to detail made all the difference in my confidence.",
      date: "February 2024"
    },
    {
      name: "James Chen",
      text: "After trying two other providers, I finally found Vision Artistry. Their combination of technical skill and artistic talent is unmatched. The comfort and natural appearance of my prosthetic have exceeded all expectations.",
      date: "January 2024"
    },
    {
      name: "Sarah Williams",
      text: "The care and compassion shown by the entire team made my experience so much better than I expected. They guided me through every step with patience and understanding.",
      date: "December 2023"
    },
    {
      name: "Michael O'Connor",
      text: "Not only is the prosthetic perfect, but the ongoing support and maintenance service is outstanding. They truly care about their patients' long-term well-being.",
      date: "November 2023"
    },
    {
      name: "Lisa Zhang",
      text: "The attention to detail in matching the color and appearance of my natural eye was incredible. Dr. Mitchell's artistic background really shows in her work.",
      date: "October 2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#bddbed] to-[#d7e8bc] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Read about the experiences of our clients and their journeys with Vision Artistry.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;