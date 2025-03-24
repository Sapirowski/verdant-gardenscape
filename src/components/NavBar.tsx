
import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { serviceItems } from './services/ServicesData';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navigate = useNavigate();

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

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const handleServiceClick = (slug: string) => {
    navigate(`/uslugi/${slug}`);
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'O nas', href: '#o-nas' },
    { name: 'Oferta', href: '#oferta', hasDropdown: true },
    { name: 'Realizacje', href: '#realizacje' },
    { name: 'Opinie', href: '#opinie' },
    { name: 'Kontakt', href: '#kontakt' }
  ];

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
            item.hasDropdown ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <a 
                    href={item.href}
                    className={`${
                      isScrolled ? 'text-cerber-green-dark' : 'text-white'
                    } text-sm lg:text-base hover:text-cerber-green-light font-medium transition-colors duration-300 flex items-center gap-1`}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </a>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white shadow-lg rounded-md p-2 min-w-[200px]">
                  {serviceItems.map((service) => (
                    <DropdownMenuItem 
                      key={service.slug}
                      className="hover:bg-cerber-green-pale rounded-md p-2 cursor-pointer"
                      onClick={() => navigate(`/uslugi/${service.slug}`)}
                    >
                      <div className="flex items-center gap-2">
                        <service.icon className="h-4 w-4 text-cerber-green-dark" />
                        <span className="text-cerber-green-dark">{service.title}</span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a 
                key={item.name} 
                href={item.href}
                className={`${
                  isScrolled ? 'text-cerber-green-dark' : 'text-white'
                } text-sm lg:text-base hover:text-cerber-green-light font-medium transition-colors duration-300 
                relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 
                after:bottom-0 after:left-0 after:bg-cerber-green-light after:origin-bottom-right 
                after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {item.name}
              </a>
            )
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
            item.hasDropdown ? (
              <div 
                key={item.name} 
                className="w-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button 
                  onClick={toggleServices}
                  className="animate-fade-in text-cerber-green-dark text-xl font-medium py-3 border-b border-cerber-green-pale w-full text-center flex items-center justify-center gap-2"
                >
                  {item.name}
                  {servicesOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                
                {servicesOpen && (
                  <div className="mt-2 w-full">
                    {serviceItems.map((service) => (
                      <button
                        key={service.slug}
                        onClick={() => handleServiceClick(service.slug)}
                        className="flex items-center gap-2 py-2 px-4 w-full hover:bg-cerber-green-pale/30 rounded-md text-cerber-green-dark"
                      >
                        <service.icon className="h-5 w-5" />
                        <span>{service.title}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a 
                key={item.name} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-fade-in text-cerber-green-dark text-xl font-medium py-3 border-b border-cerber-green-pale w-full text-center"
              >
                {item.name}
              </a>
            )
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
