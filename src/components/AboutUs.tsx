
import React from 'react';
import { Leaf, TreeDeciduous, Heart } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="o-nas" className="section-padding bg-cerber-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title animate-fade-in">O nas</h2>
          <p className="section-subtitle animate-fade-in">Poznaj naszą historię, misję i wartości</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
                alt="Zespół Cerber Ogrodnictwo przy pracy" 
                className="w-full h-auto image-hover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-cerber-green-pale rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-cerber-beige rounded-full -z-10"></div>
          </div>
          
          <div className="animate-fade-in-right" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-4 text-cerber-green-dark font-serif">Rodzinna pasja do ogrodnictwa</h3>
            <p className="mb-6 text-cerber-green-dark/90">
              Cerber Ogrodnictwo to firma z wieloletnim doświadczeniem, założona z pasji do natury i kreowania pięknych przestrzeni. Od początku działalności kierujemy się filozofią, że każdy ogród powinien być nie tylko estetyczny, ale również funkcjonalny i harmonijnie wkomponowany w otoczenie.
            </p>
            <p className="mb-8 text-cerber-green-dark/90">
              Nasz zespół składa się z doświadczonych specjalistów, którzy łączą wiedzę praktyczną z nieustannym rozwojem i śledzeniem najnowszych trendów w branży ogrodniczej.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Leaf className="h-10 w-10 mx-auto text-cerber-green-medium mb-3 animate-leaf-sway" />
                <h4 className="font-bold text-cerber-green-dark">Pasja</h4>
                <p className="text-sm text-cerber-green-medium">Kochamy to, co robimy</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <TreeDeciduous className="h-10 w-10 mx-auto text-cerber-green-medium mb-3" />
                <h4 className="font-bold text-cerber-green-dark">Doświadczenie</h4>
                <p className="text-sm text-cerber-green-medium">Lata praktyki i wiedzy</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <Heart className="h-10 w-10 mx-auto text-cerber-green-medium mb-3" />
                <h4 className="font-bold text-cerber-green-dark">Precyzja</h4>
                <p className="text-sm text-cerber-green-medium">Dbałość o detale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
