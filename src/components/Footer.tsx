
import React from 'react';
import { Leaf, Facebook, Instagram, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cerber-green-dark text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-7 w-7 text-cerber-green-light animate-leaf-sway" />
              <span className="font-serif font-bold text-xl">
                Cerber Ogrodnictwo
              </span>
            </div>
            <p className="text-cerber-green-pale text-sm mb-4">
              Profesjonalna aranżacja i pielęgnacja ogrodów, terenów zielonych oraz innowacyjne rozwiązania dla każdej przestrzeni.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="bg-cerber-green-medium hover:bg-cerber-green-light p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-cerber-green-medium hover:bg-cerber-green-light p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="mailto:kontakt@cerberogrodnictwo.pl" 
                className="bg-cerber-green-medium hover:bg-cerber-green-light p-2 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 font-serif">Szybkie linki</h3>
            <ul className="space-y-2">
              {['O nas', 'Oferta', 'Realizacje', 'Opinie', 'Kontakt'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-cerber-green-pale hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 font-serif">Usługi</h3>
            <ul className="space-y-2">
              {[
                'Kompleksowa aranżacja ogrodów',
                'Pielęgnacja trawników',
                'Usługi minikoparką',
                'Ogrody cmentarne',
                'Rozwiązania dla parków'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#oferta"
                    className="text-cerber-green-pale hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4 font-serif">Godziny pracy</h3>
            <ul className="space-y-2 text-cerber-green-pale">
              <li className="flex justify-between">
                <span>Poniedziałek - Piątek:</span>
                <span>8:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sobota:</span>
                <span>9:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span>Niedziela:</span>
                <span>Zamknięte</span>
              </li>
            </ul>
            
            <h3 className="font-bold text-lg mt-6 mb-2 font-serif">Kontakt</h3>
            <p className="text-cerber-green-pale">+48 123 456 789</p>
            <p className="text-cerber-green-pale">kontakt@cerberogrodnictwo.pl</p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-cerber-green-medium/30 text-center text-cerber-green-pale text-sm">
          <p>© {new Date().getFullYear()} Cerber Ogrodnictwo. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
