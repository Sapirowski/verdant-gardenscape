
import React from 'react';
import ServiceCard from './services/ServiceCard';
import { serviceItems } from './services/ServicesData';

const Services = () => {
  return (
    <section id="oferta" className="section-padding bg-white">
      <div className="container-custom px-3 sm:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title animate-fade-in">Nasza oferta</h2>
          <p className="section-subtitle animate-fade-in">
            Szeroki zakres usług ogrodniczych realizowanych z pasją i profesjonalizmem
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {serviceItems.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              slug={service.slug}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#kontakt" className="cta-button">
            Zamów bezpłatną wycenę
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
