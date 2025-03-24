
import React, { useState } from 'react';
import { X } from 'lucide-react';

const portfolioItems = [
  {
    title: "Nowoczesny ogród miejski",
    category: "Projekty",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Aranżacja ogrodu przydomowego",
    category: "Realizacje",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  },
  {
    title: "Taras z elementami zieleni",
    category: "Projekty",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Pielęgnacja terenów zielonych",
    category: "Usługi",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  },
  {
    title: "Skwer miejski",
    category: "Realizacje",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  },
  {
    title: "Ogród w stylu japońskim",
    category: "Projekty",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  }
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("Wszystkie");
  
  const categories = ["Wszystkie", ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  
  const filteredItems = filter === "Wszystkie" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="realizacje" className="section-padding bg-cerber-green-pale/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title animate-fade-in">Nasze realizacje</h2>
          <p className="section-subtitle animate-fade-in">
            Galeria wybranych prac i projektów zrealizowanych przez naszą firmę
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-cerber-green-medium text-white shadow-md'
                    : 'bg-white text-cerber-green-dark hover:bg-cerber-green-pale'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md group animate-scale-in cursor-pointer"
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-cerber-green-dark/0 group-hover:bg-cerber-green-dark/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center px-4">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm mt-2">{item.category}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4">
                <h3 className="font-semibold text-cerber-green-dark">{item.title}</h3>
                <p className="text-sm text-cerber-green-medium">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full animate-scale-in">
              <button 
                className="absolute -top-12 right-0 text-white hover:text-cerber-green-light transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-8 w-8" />
              </button>
              <img 
                src={selectedImage} 
                alt="Powiększone zdjęcie" 
                className="w-full h-auto max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
