import React, { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  index?: number;
  id: string;
}

const PackageCard = ({
  title,
  price,
  description,
  features,
  popular = false,
  index = 0,
  id
}: PackageCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
              observer.unobserve(entry.target);
            }, index * 100);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  const handleGetStarted = () => {
    navigate(`/pricing/${id}`);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative rounded-xl border bg-white p-6 shadow-sm transition-all duration-300 opacity-0 translate-y-10",
        popular && "border-primary before:absolute before:-top-4 before:left-0 before:right-0 before:mx-auto before:w-fit before:rounded-full before:bg-primary before:px-3 before:py-1 before:text-xs before:font-medium before:text-white before:content-['Popular']"
      )}
    >
      <div className="text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="mt-4 flex items-baseline justify-center">
          <span className="text-3xl font-bold tracking-tight">{price}</span>
          <span className="ml-1 text-sm text-muted-foreground">
            {price !== 'Custom' ? '/event' : ''}
          </span>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{description}</p>
      </div>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <Check className="h-5 w-5 shrink-0 text-primary" />
            <span className="ml-3 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Button 
          className="w-full" 
          variant={popular ? 'default' : 'outline'}
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default PackageCard;
