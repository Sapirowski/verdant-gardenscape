
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  index: number;
}

const ServiceCard = ({ title, description, icon: Icon, slug, index }: ServiceCardProps) => {
  const navigate = useNavigate();
  
  return (
    <div 
      className="card-service animate-scale-in cursor-pointer hover:shadow-md transition-all duration-300 relative pb-10"
      style={{ animationDelay: `${0.1 * index}s` }}
      onClick={() => navigate(`/uslugi/${slug}`)}
    >
      <div className="flex items-center mb-4">
        <div className="rounded-full bg-cerber-green-pale p-2 sm:p-3 mr-3 sm:mr-4">
          <Icon className="h-5 w-5 sm:h-7 sm:w-7 text-cerber-green-dark" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-cerber-green-dark">
          {title}
        </h3>
      </div>
      <p className="text-cerber-green-medium text-sm lg:text-base mb-4">
        {description}
      </p>
      <div className="absolute bottom-2 right-2 flex items-center text-cerber-green-dark font-medium text-sm">
        <span>Dowiedz się więcej</span>
        <ArrowRight className="ml-1 h-4 w-4" />
      </div>
    </div>
  );
};

export default ServiceCard;
