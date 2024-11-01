import React from 'react';
import Hero from '../components/Home/Hero';
import ImageCarousel from '../components/Home/ImageCarousel';
import TestimonialCard from '../components/Home/TestimonialCard';
import ContactForm from '../components/Home/ContactForm';

const Home = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The attention to detail and care I received was exceptional. My new prosthetic eye looks completely natural!",
      date: "March 2024"
    },
    {
      name: "Michael Chen",
      text: "Life-changing experience. The team's expertise and compassion made all the difference in my journey.",
      date: "February 2024"
    },
    {
      name: "Emma Thompson",
      text: "I couldn't be happier with the results. The prosthetic is so comfortable, I sometimes forget it's there.",
      date: "January 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-16">
        <ImageCarousel />
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Clinic</h2>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  title="Location Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.888773847414!2d2.0106030761391933!3d41.571651784545324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a492c5d029973b%3A0x62154570f82a5495!2sCarrer%20de%20Catalunya%2C%2060%2C%2008225%20Terrassa%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1730040983443!5m2!1ses!2ses"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
