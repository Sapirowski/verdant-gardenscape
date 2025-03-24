
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" 
      }}
    >
      <div className="container-custom text-center text-white z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif animate-fade-in">
          Projektujemy i tworzymy <span className="text-cerber-green-light">wymarzone ogrody</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Kompleksowa aranżacja ogrodów, terenów zielonych i innowacyjne rozwiązania dla każdej przestrzeni
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a href="#kontakt" className="cta-button">
            Bezpłatna konsultacja
          </a>
          <a href="#oferta" className="secondary-button">
            Poznaj nasze usługi
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#o-nas" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <ArrowDown className="h-8 w-8" />
        </a>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-cerber-green-dark/20 to-cerber-green-dark/70 mix-blend-multiply pointer-events-none"></div>
    </section>
  );
};

export default Hero;
