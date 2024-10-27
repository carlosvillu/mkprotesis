import React from 'react';
import { CheckCircle, Info } from 'lucide-react';

const PricingPage = () => {
  const services = [
    {
      name: "Initial Consultation",
      price: "$250",
      description: "Comprehensive evaluation and treatment planning"
    },
    {
      name: "Custom Prosthetic Eye",
      price: "$3,000 - $4,500",
      description: "Includes fitting, creation, and follow-up appointments"
    },
    {
      name: "Annual Maintenance",
      price: "$350",
      description: "Polish and professional cleaning"
    },
    {
      name: "Replacement Service",
      price: "$2,800",
      description: "For returning patients needing a replacement"
    }
  ];

  const subsidySteps = [
    {
      number: "01",
      title: "Check Eligibility",
      description: "Determine if you qualify for government or private insurance coverage. Check the official Medicare Benefits Schedule at",
      link: "http://www.mbsonline.gov.au",
      linkText: "Medicare Benefits Schedule"
    },
    {
      number: "02",
      title: "Documentation",
      description: "Gather medical records and referral from your ophthalmologist."
    },
    {
      number: "03",
      title: "Submit Application",
      description: "We'll help you complete and submit all necessary paperwork."
    },
    {
      number: "04",
      title: "Approval Process",
      description: "Average processing time is 2-4 weeks for most applications."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#bddbed] to-[#d7e8bc] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Pricing & Subsidies</h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Transparent pricing and guidance on available subsidies to help you access the care you need.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section>
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-800">{service.name}</h3>
                    <span className="text-lg font-bold text-[#ffb990]">{service.price}</span>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">Subsidy Guide</h2>
            <div className="space-y-8">
              {subsidySteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl font-bold text-[#ffb990] leading-none">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-gray-600">
                          {step.description}
                          {step.link && (
                            <>
                              {" "}
                              <a
                                href={step.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#ffb990] hover:underline"
                              >
                                {step.linkText}
                              </a>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  {index < subsidySteps.length - 1 && (
                    <div className="absolute left-[2.5rem] top-full h-8 w-px bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 bg-[#bddbed] bg-opacity-20 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <Info className="h-6 w-6 text-[#ffb990] flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  We work with various insurance providers and government programs. Contact us to
                  discuss your specific situation and available funding options.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;