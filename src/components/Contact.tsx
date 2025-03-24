
import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Kompleksowa aranżacja ogrodów'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'Kompleksowa aranżacja ogrodów'
      });
      
      // Reset the success message after some time
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="kontakt" className="section-padding bg-cerber-beige/60 overflow-hidden">
      <div className="container-custom px-3 sm:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title animate-fade-in">Skontaktuj się z nami</h2>
          <p className="section-subtitle animate-fade-in">
            Jesteśmy gotowi odpowiedzieć na Twoje pytania i rozpocząć współpracę
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-start">
          <div className="animate-fade-in-right w-full">
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-cerber-green-dark font-serif">Wyślij zapytanie</h3>
              
              {isSubmitted ? (
                <div className="flex items-center p-4 bg-cerber-green-pale rounded-lg text-cerber-green-dark">
                  <CheckCircle className="h-5 w-5 mr-2 md:h-6 md:w-6 md:mr-3 text-cerber-green-medium" />
                  <p className="text-sm md:text-base">Dziękujemy za wiadomość! Skontaktujemy się z Tobą jak najszybciej.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-cerber-green-dark mb-2 font-medium text-sm md:text-base">
                      Imię i nazwisko
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 border border-cerber-green-pale rounded-md focus:outline-none focus:ring-2 focus:ring-cerber-green-light"
                      placeholder="Twoje imię i nazwisko"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="email" className="block text-cerber-green-dark mb-2 font-medium text-sm md:text-base">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 md:px-4 py-2 border border-cerber-green-pale rounded-md focus:outline-none focus:ring-2 focus:ring-cerber-green-light"
                        placeholder="Twój adres email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-cerber-green-dark mb-2 font-medium text-sm md:text-base">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2 border border-cerber-green-pale rounded-md focus:outline-none focus:ring-2 focus:ring-cerber-green-light"
                        placeholder="Twój numer telefonu"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="service" className="block text-cerber-green-dark mb-2 font-medium text-sm md:text-base">
                      Interesująca usługa
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 border border-cerber-green-pale rounded-md focus:outline-none focus:ring-2 focus:ring-cerber-green-light bg-white"
                    >
                      <option value="Kompleksowa aranżacja ogrodów">Kompleksowa aranżacja ogrodów</option>
                      <option value="Pielęgnacja trawników i żywopłotów">Pielęgnacja trawników i żywopłotów</option>
                      <option value="Usługi minikoparką i frezem">Usługi minikoparką i frezem</option>
                      <option value="Opieka nad ogrodami cmentarnymi">Opieka nad ogrodami cmentarnymi</option>
                      <option value="Innowacyjne rozwiązania dla parków">Innowacyjne rozwiązania dla parków</option>
                      <option value="Inne">Inne</option>
                    </select>
                  </div>
                  
                  <div className="mb-5 md:mb-6">
                    <label htmlFor="message" className="block text-cerber-green-dark mb-2 font-medium text-sm md:text-base">
                      Wiadomość
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 border border-cerber-green-pale rounded-md focus:outline-none focus:ring-2 focus:ring-cerber-green-light"
                      placeholder="Opisz swoje potrzeby lub zadaj pytanie"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="cta-button w-full flex justify-center items-center"
                  >
                    Wyślij zapytanie
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
          
          <div className="animate-fade-in-right w-full" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-cerber-green-dark font-serif">Informacje kontaktowe</h3>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <div className="bg-cerber-green-pale p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-cerber-green-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cerber-green-dark text-sm md:text-base">Telefon</h4>
                    <p className="text-cerber-green-medium text-sm md:text-base">+48 123 456 789</p>
                    <p className="text-xs md:text-sm text-cerber-green-medium/70">Pon-Pt: 8:00-18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cerber-green-pale p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-cerber-green-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cerber-green-dark text-sm md:text-base">Email</h4>
                    <p className="text-cerber-green-medium text-sm md:text-base break-words">kontakt@cerberogrodnictwo.pl</p>
                    <p className="text-xs md:text-sm text-cerber-green-medium/70">Odpowiadamy w ciągu 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cerber-green-pale p-2 md:p-3 rounded-full mr-3 md:mr-4 flex-shrink-0">
                    <MapPin className="h-4 w-4 md:h-5 md:w-5 text-cerber-green-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-cerber-green-dark text-sm md:text-base">Obszar działania</h4>
                    <p className="text-cerber-green-medium text-sm md:text-base">Warszawa i okolice do 50 km</p>
                    <p className="text-xs md:text-sm text-cerber-green-medium/70">Możliwość realizacji zleceń w całej Polsce</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg overflow-hidden">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-cerber-green-dark font-serif">Znajdź nas na mapie</h3>
              <div className="h-48 md:h-64 w-full rounded-lg overflow-hidden">
                {/* Placeholder for Google Maps */}
                <div className="w-full h-full bg-cerber-green-pale/50 flex items-center justify-center">
                  <p className="text-cerber-green-dark font-medium text-sm md:text-base">Mapa lokalizacji</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
