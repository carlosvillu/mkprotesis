import React from 'react';

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800",
    title: "Custom Prosthetic Design",
    description: "Our custom prosthetic design process represents the pinnacle of ocular prosthetic craftsmanship. Each prosthetic eye is meticulously crafted through a combination of advanced digital imaging technology and traditional artistic techniques. We begin with precise measurements and detailed color matching, using specialized equipment to capture the exact patterns and subtle variations in the iris. Our team then hand-paints each prosthetic, layering different pigments to achieve depth and authenticity. The process involves multiple fitting sessions to ensure perfect comfort and alignment. We pay particular attention to the natural movement and positioning of the prosthetic, working closely with each patient to achieve the most lifelike result possible. This attention to detail and personalized approach has made us leaders in the field of ocular prosthetics."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
    title: "Precision Engineering",
    description: "Advanced techniques ensuring perfect fit and comfort for each patient."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800",
    title: "Artistic Detail",
    description: "Meticulous attention to detail in creating lifelike appearances."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
    title: "Modern Technology",
    description: "Using cutting-edge technology for precise measurements and perfect fits."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800",
    title: "Patient Care",
    description: "Comprehensive care and support throughout the entire process."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1576091160895-43b24b87da07?auto=format&fit=crop&w=800",
    title: "Innovation",
    description: "Pioneering new techniques in ocular prosthetics."
  }
];

const PortfolioGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-xl font-semibold mb-2">{item.title}</h3>
              <div className="text-gray-200 text-sm max-h-32 overflow-y-auto custom-scrollbar pr-2">
                {item.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioGrid;