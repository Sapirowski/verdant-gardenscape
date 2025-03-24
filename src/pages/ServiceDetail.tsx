
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { serviceItems } from '../components/services/ServicesData';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = serviceItems.find(item => item.slug === slug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl text-cerber-green-dark mb-4">Usługa nie znaleziona</h1>
          <Button 
            onClick={() => navigate('/')} 
            className="bg-cerber-green-medium hover:bg-cerber-green-dark text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Wróć do strony głównej
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-hidden">
      <NavBar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
          <img 
            src={service.imageSrc} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-cerber-green-dark/50 flex items-center justify-center">
            <div className="container-custom px-4 text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 animate-fade-in">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fade-in">
                {service.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="container-custom px-4 py-6 flex items-center text-cerber-green-medium">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center hover:text-cerber-green-dark transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Powrót do strony głównej
          </button>
          <span className="mx-2">/</span>
          <span className="text-cerber-green-dark font-medium">
            {service.title}
          </span>
        </div>
        
        {/* Service Description */}
        <section className="container-custom px-4 py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-cerber-green-dark mb-6">
                O usłudze
              </h2>
              {service.fullDescription.map((paragraph, index) => (
                <p key={index} className="mb-4 text-cerber-green-medium">
                  {paragraph}
                </p>
              ))}
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-cerber-green-dark mb-4">
                  Korzyści
                </h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-cerber-green-light shrink-0 mr-2 mt-0.5" />
                      <span className="text-cerber-green-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/#kontakt" 
                  className="inline-block bg-cerber-green-medium hover:bg-cerber-green-dark 
                  text-white font-medium py-3 px-6 rounded-md transition-all duration-300 
                  transform hover:scale-105 hover:shadow-lg"
                >
                  Skontaktuj się z nami
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src={service.imageSrc} 
                alt={service.title} 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="bg-cerber-green-pale/30 py-10 md:py-16">
          <div className="container-custom px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-cerber-green-dark mb-8 text-center">
              Jak realizujemy usługę
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {service.process.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow relative"
                >
                  <div className="w-12 h-12 rounded-full bg-cerber-green-medium text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-cerber-green-dark text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-cerber-green-medium text-center">
                    {step.description}
                  </p>
                  
                  {index < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-6 h-0.5 bg-cerber-green-light transform -translate-x-3 translate-y-4">
                      {/* Connector line */}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-10 md:py-16 text-center">
          <div className="container-custom px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-cerber-green-dark mb-4">
              Zainteresowany tą usługą?
            </h2>
            <p className="text-cerber-green-medium max-w-2xl mx-auto mb-8">
              Skontaktuj się z nami, aby omówić szczegóły realizacji lub umówić bezpłatną konsultację. 
              Odpowiemy na wszystkie Twoje pytania i przygotujemy indywidualną ofertę.
            </p>
            <a 
              href="/#kontakt" 
              className="inline-block bg-cerber-green-medium hover:bg-cerber-green-dark 
              text-white font-medium py-3 px-8 rounded-md transition-all duration-300 
              transform hover:scale-105 hover:shadow-lg text-lg"
            >
              Darmowa konsultacja
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
