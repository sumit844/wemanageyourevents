import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EventCard from '@/components/ui/EventCard';
import { events } from '@/lib/eventData';


const Events = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [filteredEvents, setFilteredEvents] = useState(events);
  
  const categories = ['all', ...Array.from(new Set(events.map(event => event.category.toLowerCase())))];
  
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => 
        event.category.toLowerCase() === activeFilter
      ));
    }
  }, [activeFilter]);

  const appendSelectedFilter=(category:any)=>{
    setActiveFilter(category)

  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block py-1 px-3 bg-secondary mb-4 text-xs font-medium rounded-full">
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Explore Our Event Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our range of specialized event services designed to create 
                memorable experiences for any occasion.
              </p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  value={category}
                  onClick={() => appendSelectedFilter(category)}
                  className={`py-2 px-4 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category
                      ? 'bg-primary text-white'
                      : 'bg-secondary hover:bg-secondary/70'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  description={event.description}
                  imageSrc={event.imageSrc}
                  category={event.category}
                  index={index}
                />
              ))}
            </div>
            
            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No events found in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
