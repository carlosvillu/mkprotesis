import React from 'react';
import motoImage from '../../images/moto.jpeg';

interface PortfolioItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: motoImage,
    title: "Diseño Personalizado",
    description: "Nuestro proceso de diseño personalizado representa la excelencia en la artesanía de prótesis oculares."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
    title: "Ingeniería de Precisión",
    description: "Técnicas avanzadas que garantizan un ajuste y comodidad perfectos para cada paciente."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800",
    title: "Detalle Artístico",
    description: "Atención meticulosa al detalle en la creación de apariencias naturales."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
    title: "Tecnología Moderna",
    description: "Uso de tecnología de vanguardia para mediciones precisas y ajustes perfectos."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=800",
    title: "Atención al Paciente",
    description: "Cuidado y apoyo integral durante todo el proceso."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1576091160895-43b24b87da07?auto=format&fit=crop&w=800",
    title: "Innovación",
    description: "Pioneros en nuevas técnicas de prótesis oculares."
  }
];

const PortfolioGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
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
