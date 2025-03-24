
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const About = () => {
  const teamQuotes = [
    {
      name: "Jan",
      quote: "Kocham to co robię, a uśmiech na twarzy klienta jest dla mnie najcenniejszym wynagrodzeniem za moją pracę",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Rafał",
      quote: "Cenię doskonałą komunikację i współpracę w zespole, bo tylko zgrany zespół jest zdolny do największych projektów.",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <NavBar />
      
      <main className="pt-24 pb-12">
        <section className="container-custom mb-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-cerber-green-dark mb-6 text-center">
              O nas
            </h1>
            
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl text-cerber-green-medium italic font-serif">
                "Wszystko co robisz ma sens, kiedy wkładasz w to serce"
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-cerber-green-dark/90">
              <p className="mb-6">
                Rozpoczęliśmy swoją działalność w 2023 roku jako mała, rodzinna firma ogrodnicza ze Śląska Cieszyńskiego.
              </p>
              
              <p className="mb-6">
                Początkowo zajmowaliśmy się głównie pracami ogrodniczymi takimi jak przycinanie krzewów, pielęgnacja i koszenie trawników w obiektach kultu religijnego i poświęconych pamięci bliskim, którzy odeszli. Aranżowaliśmy zieleń cmentarną, łącząc estetykę z funkcjonalnością, a przede wszystkim z szacunkiem dla miejsca spoczynku.
              </p>
              
              <p className="mb-6">
                Nasze projekty miały na celu stworzenie spokojnych, pięknych i pełnych refleksji przestrzeni, które sprzyjają wspomnieniom i upamiętnieniu zmarłych z naszych rodzin, przyjaciół i znajomych. Tworzyliśmy miejsca harmonijne i spójne z tradycją, historią oraz charakterem cmentarza.
              </p>
              
              <p className="mb-6">
                Dzięki zaangażowaniu i rzetelności szybko dostrzegli nas inni klienci i dzięki temu rozszerzyliśmy swoją działalność o ofertę kompleksowego pielęgnowanie ogrodów, przestrzeni parków i skwerów miejskich. Zainwestowaliśmy w doskonały sprzęt, szkolenia oraz najnowocześniejsze technologie, co pozwoliło nam na tworzenie unikalnych, dostosowanych do indywidualnych potrzeb klientów projektów. Wsłuchujemy się w potrzeby naszych klientów. Nasz zespół wspólnie z klientami tworzy piękne i funkcjonalne przestrzenie wokół domów jak również w parkach i innych terenów zielonych.
              </p>
              
              <p className="mb-6">
                Nieustannie się rozwijamy, dbając o najwyższą jakość usług i satysfakcję naszych klientów, a to co nas wyróżnia, to nasza pasja, doświadczenie i zaangażowanie w każdy, nawet najmniejszy projekt, który realizujemy.
              </p>
            </div>
          </div>
        </section>
        
        <section className="bg-cerber-green-pale/30 py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-serif font-bold text-cerber-green-dark mb-10 text-center">
              Nasz zespół
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {teamQuotes.map((member, index) => (
                <Card key={index} className="shadow-md bg-white border-0 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <Avatar className="h-24 w-24 mb-4 border-4 border-cerber-green-light">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="bg-cerber-green-medium text-white text-xl">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      
                      <h3 className="text-xl font-bold text-cerber-green-dark mb-2">{member.name}</h3>
                      
                      <p className="text-cerber-green-dark/90 italic relative">
                        <span className="text-4xl font-serif text-cerber-green-light absolute -top-4 -left-1 opacity-20">"</span>
                        {member.quote}
                        <span className="text-4xl font-serif text-cerber-green-light absolute -bottom-6 -right-1 opacity-20">"</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
