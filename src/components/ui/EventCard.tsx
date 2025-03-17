import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  index?: number;
}

const EventCard = ({ id, title, description, imageSrc, category, index = 0 }: EventCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
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
  
  return (
    <div ref={cardRef} className="opacity-0 translate-y-8">
      <Link 
        to={`/events/${id}`}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md h-full",
        )}
      >
        <div className="aspect-[16/9] overflow-hidden bg-gray-100">
          <img 
            src={imageSrc} 
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <div className="flex-1 p-6">
          <div className="mb-3">
            <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary">
              {category}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold tracking-tight mb-2">{title}</h3>
          
          <p className="line-clamp-3 text-muted-foreground text-sm">
            {description}
          </p>
        </div>
        
        <div className="p-6 pt-0">
          <div className="flex items-center text-sm font-medium text-primary">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default EventCard;