
import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center px-4">
        <a href="#" className="flex items-center gap-2">
          <Leaf className={`h-6 w-6 sm:h-7 sm:w-7 ${isScrolled ? 'text-cerber-green-dark' : 'text-cerber-green-light'} animate-leaf-sway`} />
          <span className={`font-serif font-bold text-lg sm:text-xl ${isScrolled ? 'text-cerber-green-dark' : 'text-white'} truncate`}>
            Cerber Ogrodnictwo
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 lg:space-x-8">
          {['O nas', 'Oferta', 'Realizacje', 'Opinie', 'Kontakt'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`${
                isScrolled ? 'text-cerber-green-dark' : 'text-white'
              } hover:text-cerber-green-light font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cerber-green-light after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-sm lg:text-base`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-cerber-green-dark' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-cerber-green-dark' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`absolute top-full left-0 w-full bg-white shadow-md overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-4 flex flex-col space-y-4 px-4">
          {['O nas', 'Oferta', 'Realizacje', 'Opinie', 'Kontakt'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-cerber-green-dark hover:text-cerber-green-light font-medium transition-colors duration-300 border-b border-cerber-green-pale pb-2"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="#kontakt" 
            className="cta-button mt-2 w-full text-center" 
            onClick={() => setIsOpen(false)}
          >
            Darmowa konsultacja
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
