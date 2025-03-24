
import React from 'react';
import { Shovel, TreeDeciduous, Flower2, Shrub, WateringCan } from 'lucide-react';

const serviceItems = [
  {
    title: "Kompleksowa aranżacja ogrodów",
    description: "Projektujemy i realizujemy kompleksowe projekty ogrodów, terenów zielonych i przestrzeni publicznych.",
    icon: TreeDeciduous,
  },
  {
    title: "Pielęgnacja trawników i żywopłotów",
    description: "Regularne strzyżenie, nawożenie, wertykulacja, aeracja i odchwaszczanie trawników oraz żywopłotów.",
    icon: Shrub,
  },
  {
    title: "Usługi minikoparką i frezem",
    description: "Profesjonalne prace ziemne, wykopy, wyrównanie terenu, usuwanie pni za pomocą specjalistycznego sprzętu.",
    icon: Shovel,
  },
  {
    title: "Opieka nad ogrodami cmentarnymi",
    description: "Kompleksowa pielęgnacja, porządkowanie, sadzenie roślin i dbanie o ogrody cmentarne przez cały rok.",
    icon: WateringCan,
  },
  {
    title: "Innowacyjne rozwiązania dla parków",
    description: "Wdrażanie nowoczesnych rozwiązań dla przestrzeni publicznych, parków i skwerów miejskich.",
    icon: Flower2,
  }
];

const Services = () => {
  return (
    <section id="oferta" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title animate-fade-in">Nasza oferta</h2>
          <p className="section-subtitle animate-fade-in">
            Szeroki zakres usług ogrodniczych realizowanych z pasją i profesjonalizmem
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="card-service animate-scale-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-cerber-green-pale p-3 mr-4">
                  <service.icon className="h-7 w-7 text-cerber-green-dark" />
                </div>
                <h3 className="text-lg font-semibold text-cerber-green-dark">
                  {service.title}
                </h3>
              </div>
              <p className="text-cerber-green-medium text-sm lg:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#kontakt" className="cta-button">
            Zamów bezpłatną wycenę
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
