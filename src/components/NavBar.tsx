
import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

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

  const menuItems = ['O nas', 'Oferta', 'Realizacje', 'Opinie', 'Kontakt'];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 z-20">
          <Leaf 
            className={`h-6 w-6 md:h-7 md:w-7 ${
              isScrolled ? 'text-cerber-green-dark' : 'text-cerber-green-light'
            } animate-leaf-sway`} 
          />
          <span 
            className={`font-serif font-bold text-lg md:text-xl ${
              isScrolled ? 'text-cerber-green-dark' : 'text-white'
            } truncate`}
          >
            Cerber Ogrodnictwo
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`${
                isScrolled ? 'text-cerber-green-dark' : 'text-white'
              } text-sm lg:text-base hover:text-cerber-green-light font-medium transition-colors duration-300 
              relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
              after:bottom-0 after:left-0 after:bg-cerber-green-light after:origin-bottom-right 
              after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              {item}
            </a>
          ))}
          
          <a 
            href="#kontakt" 
            className="bg-cerber-green-medium hover:bg-cerber-green-dark text-white 
            font-medium py-2 px-4 rounded-md transition-all duration-300 transform 
            hover:scale-105 hover:shadow-lg text-sm lg:text-base"
          >
            Darmowa konsultacja
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-20 p-2"
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
        className={`fixed inset-0 bg-white/95 z-10 flex flex-col items-center justify-center transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-5 px-4 w-full max-w-sm">
          {menuItems.map((item, index) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="animate-fade-in text-cerber-green-dark text-xl font-medium py-3 border-b border-cerber-green-pale w-full text-center"
            >
              {item}
            </a>
          ))}
          
          <a 
            href="#kontakt" 
            className="cta-button mt-4 w-full justify-center"
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
