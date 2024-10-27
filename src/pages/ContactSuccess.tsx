import React from 'react';
import {CheckCircle} from 'lucide-react';
import {Link} from 'react-router-dom';

const ContactSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-[#ffb990] mx-auto mb-6" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          ¡Mensaje enviado con éxito!
        </h1>
        <p className="text-gray-600 mb-8">
          Gracias por contactar con nosotros. Nos pondremos en contacto contigo lo antes posible.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#ffb990] text-white py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default ContactSuccess;
