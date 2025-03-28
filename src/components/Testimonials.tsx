
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "Właścicielka domu jednorodzinnego",
    testimonial: "Firma Cerber Ogrodnictwo zaprojektowała i wykonała dla nas piękny ogród, który stał się naszą dumą i miejscem relaksu. Profesjonalizm i zaangażowanie na każdym etapie prac były imponujące.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5
  },
  {
    name: "Michał Nowak",
    role: "Developer osiedla mieszkaniowego",
    testimonial: "Współpracujemy z Cerber Ogrodnictwo przy wielu naszych inwestycjach. Za każdym razem realizacje przekraczają nasze oczekiwania. Polecam tę firmę każdemu, kto ceni sobie jakość i terminowość.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Katarzyna Wiśniewska",
    role: "Dyrektor parku miejskiego",
    testimonial: "Innowacyjne podejście i dbałość o ekologiczne rozwiązania to coś, co wyróżnia Cerber Ogrodnictwo. Dzięki nim nasz park miejski przeszedł prawdziwą metamorfozę i cieszy się ogromnym zainteresowaniem mieszkańców.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="opinie" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title animate-fade-in">Co mówią nasi klienci</h2>
          <p className="section-subtitle animate-fade-in">
            Najlepsze opinie z Google Reviews od osób i firm, które nam zaufały
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-testimonial leaf-decoration animate-fade-in-right"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-cerber-green-light">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-cerber-green-dark">{testimonial.name}</h3>
                  <p className="text-sm text-cerber-green-medium">{testimonial.role}</p>
                </div>
              </div>
              
              {/* Google Rating Stars */}
              <div className="flex mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i}
                    className="fill-yellow-400 text-yellow-400 h-5 w-5"
                  />
                ))}
              </div>
              
              <p className="text-cerber-green-dark/90 relative">
                <span className="text-4xl font-serif text-cerber-green-light absolute -top-2 -left-1 opacity-20">"</span>
                {testimonial.testimonial}
                <span className="text-4xl font-serif text-cerber-green-light absolute -bottom-6 -right-1 opacity-20">"</span>
              </p>
              
              {/* Google Logo */}
              <div className="mt-4 flex justify-end">
                <div className="flex items-center text-xs text-gray-500">
                  <span>Zweryfikowana opinia</span>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/24px-Google_%22G%22_Logo.svg.png" 
                    alt="Google" 
                    className="ml-1 h-4 w-4"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a 
            href="https://g.page/r/CUVPVm4NVJ4EEBM/review" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button"
          >
            Napisz opinię w Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
