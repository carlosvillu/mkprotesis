import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  text: string;
  date: string;
}

const TestimonialCard = ({ name, text, date }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Quote className="h-8 w-8 text-[#ffb990] mb-4" />
      <div className="h-48 overflow-y-auto mb-4 custom-scrollbar">
        <p className="text-gray-600 italic">{text}</p>
      </div>
      <div className="border-t pt-4">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;