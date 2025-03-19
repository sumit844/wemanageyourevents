import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CustomButton from '@/components/ui/CustomButton';
import { events } from '@/lib/eventData';

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState(events.find(e => e.id === id));
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    setIsLoading(true);
    setTimeout(() => {
      const foundEvent = events.find(e => e.id === id);
      setEvent(foundEvent);
      setIsLoading(false);
      
      if (!foundEvent) {
        navigate('/events', { replace: true });
      }
    }, 500);
  }, [id, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="flex space-x-2">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!event) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-80 md:h-96 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={event.imageSrc} 
              alt={event.imageAlt} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-end pb-12">
            <div className="inline-block py-1 px-3 bg-white/20 backdrop-blur-sm mb-4 text-sm font-medium rounded-full text-white">
              {event.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {event.title}
            </h1>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-12 md:py-20 px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {event.fullDescription.split('\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('-')) {
                  const listItems = event.fullDescription
                    .split('\n')
                    .filter(line => line.trim().startsWith('-'))
                    .map(line => line.trim().substring(1).trim());
                  
                  if (index === event.fullDescription.split('\n').findIndex(line => line.trim().startsWith('-'))) {
                    return (
                      <ul className="mt-6 space-y-2" key={index}>
                        {listItems.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-flex items-center justify-center w-6 h-6 mr-2 bg-primary/10 rounded-full">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                } else if (paragraph.trim() && !paragraph.trim().startsWith('-')) {
                  return <p key={index} className="mb-4 text-muted-foreground">{paragraph}</p>;
                }
                return null;
              })}
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <CustomButton size="lg" onClick={() => navigate('/contact')}>
                Request This Event
              </CustomButton>
              <CustomButton size="lg" variant="outline" onClick={() => navigate('/pricing')}>
                View Pricing
              </CustomButton>
            </div>
          </div>
        </section>
        
        {/* Related Events */}
        <section className="py-12 md:py-20 px-6 md:px-8 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Similar Events</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore other events that might interest you
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events
                .filter(e => e.category === event.category && e.id !== event.id)
                .slice(0, 3)
                .map((relatedEvent, index) => (
                  <div 
                    key={relatedEvent.id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <img 
                      src={relatedEvent.imageSrc} 
                      alt={relatedEvent.imageAlt} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{relatedEvent.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{relatedEvent.description}</p>
                      <CustomButton 
                        variant="outline" 
                        onClick={() => navigate(`/events/${relatedEvent.id}`)}
                      >
                        Learn More
                      </CustomButton>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventDetail;
