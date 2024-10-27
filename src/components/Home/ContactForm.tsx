import React, {useState} from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold mb-8">Contact Us</h3>
      <form action="https://api.staticforms.xyz/submit" method="post" className="space-y-6">
        <input type="hidden" name="accessKey" value="ca5e8941-351a-433c-acc8-018bc3e7cf62" />
        <input type="hidden" name="redirectTo" value="http://mkprotesis.com/contact-success" />
        <input type="hidden" name="replyTo" value="@" />
        <input type="hidden" name="subject" value="Nuevo contacto desde - mkprotesis.com" />

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-[#ffb990] focus:ring focus:ring-[#ffb990] focus:ring-opacity-50"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-[#ffb990] focus:ring focus:ring-[#ffb990] focus:ring-opacity-50"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email (Optional)
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-[#ffb990] focus:ring focus:ring-[#ffb990] focus:ring-opacity-50"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 block w-full p-3 rounded-md border border-gray-300 shadow-sm focus:border-[#ffb990] focus:ring focus:ring-[#ffb990] focus:ring-opacity-50"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#ffb990] text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 mt-8"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
