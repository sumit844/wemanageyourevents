import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { MapPin, Users, Clock, Star } from 'lucide-react';

const VenueShowcase = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  
  const venues = [
    {
      id: 'golden-palace',
      name: 'The Golden Palace',
      type: 'banquet',
      capacity: '300-500',
      location: 'Mumbai Central',
      rating: 4.8,
      description: 'An elegant banquet hall with state-of-the-art facilities, perfect for grand weddings and corporate galas.',
      imageSrc: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop',
      features: ['Valet Parking', 'In-house Catering', 'Professional Sound System', 'Customizable Lighting']
    },
    {
      id: 'garden-greens',
      name: 'Garden Greens',
      type: 'outdoor',
      capacity: '100-250',
      location: 'Goregaon East',
      rating: 4.6,
      description: 'A picturesque outdoor venue surrounded by lush greenery, ideal for daytime events and nature-themed celebrations.',
      imageSrc: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073&auto=format&fit=crop',
      features: ['Open-air Setup', 'Natural Backdrop', 'Tent Options Available', 'Ample Parking']
    },
    {
      id: 'metro-conference',
      name: 'Metro Conference Center',
      type: 'corporate',
      capacity: '50-200',
      location: 'Bandra Kurla Complex',
      rating: 4.9,
      description: 'A modern conference center with cutting-edge technology and flexible meeting spaces for professional events.',
      imageSrc: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2069&auto=format&fit=crop',
      features: ['High-speed Internet', 'Video Conferencing', 'Breakout Rooms', 'Executive Catering']
    },
    {
      id: 'heritage-hall',
      name: 'Heritage Hall',
      type: 'banquet',
      capacity: '150-300',
      location: 'Colaba',
      rating: 4.7,
      description: 'A historic venue with classical architecture and elegant interiors, perfect for traditional ceremonies and formal gatherings.',
      imageSrc: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop',
      features: ['Ornate Décor', 'Grand Entrance', 'Heritage Architecture', 'Dedicated Event Planner']
    },
    {
      id: 'sky-lounge',
      name: 'Sky Lounge',
      type: 'rooftop',
      capacity: '50-120',
      location: 'Lower Parel',
      rating: 4.5,
      description: 'A stunning rooftop venue offering panoramic city views, ideal for cocktail parties and intimate celebrations.',
      imageSrc: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7?q=80&w=2070&auto=format&fit=crop',
      features: ['Panoramic Views', 'Open-air Bar', 'Mood Lighting', 'Weather Contingency Plan']
    },
    {
      id: 'riverside-retreat',
      name: 'Riverside Retreat',
      type: 'outdoor',
      capacity: '80-200',
      location: 'Thane West',
      rating: 4.4,
      description: 'A serene venue by the riverside offering a peaceful backdrop for ceremonies and relaxed gatherings.',
      imageSrc: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2073&auto=format&fit=crop',
      features: ['Waterfront Setting', 'Covered Areas Available', 'Natural Acoustics', 'Sunset Views']
    },
  ];
  
  const venueTypes = [
    { id: 'all', label: 'All Venues' },
    { id: 'banquet', label: 'Banquet Halls' },
    { id: 'outdoor', label: 'Outdoor Venues' },
    { id: 'corporate', label: 'Corporate Spaces' },
    { id: 'rooftop', label: 'Rooftop Venues' },
  ];
  
  const filteredVenues = activeTab === 'all' 
    ? venues 
    : venues.filter(venue => venue.type === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block py-1 px-3 bg-secondary mb-4 text-xs font-medium rounded-full">
                Partner Venues
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Explore Our Venue Collection
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our carefully selected collection of premium venues perfect for all types 
                of events, from intimate gatherings to grand celebrations.
              </p>
            </div>
            
            {/* Venue Filters */}
            <div className="mb-12">
              <Tabs defaultValue="all" onValueChange={setActiveTab}>
                <TabsList className="w-full md:w-auto flex justify-start overflow-auto pb-2">
                  {venueTypes.map(type => (
                    <TabsTrigger key={type.id} value={type.id}>
                      {type.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            
            {/* Venues Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredVenues.map((venue, index) => (
                <div 
                  key={venue.id}
                  className="group rounded-lg overflow-hidden border bg-white shadow-sm transition-all duration-300 hover:shadow-md flex flex-col h-full"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={venue.imageSrc} 
                      alt={venue.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 rounded-full py-1 px-2 flex items-center">
                      <Star className="h-3.5 w-3.5 text-yellow-500 mr-1" fill="currentColor" />
                      <span className="text-xs font-medium">{venue.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{venue.name}</h3>
                    
                    <div className="flex flex-wrap gap-y-2 mb-4">
                      <div className="w-1/2 flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {venue.location}
                      </div>
                      <div className="w-1/2 flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        {venue.capacity} guests
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {venue.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                        {venue.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mr-1.5"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full mt-auto"
                      onClick={() => navigate('/contact')}
                    >
                      Inquire About This Venue
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="bg-secondary/30 rounded-lg p-8 flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold mb-3">Looking for a Specific Venue?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl">
                If you don't see what you're looking for or need help finding the perfect venue for your event,
                our team can help with personalized recommendations.
              </p>
              <Button onClick={() => navigate('/contact')}>
                Contact Our Venue Specialists
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VenueShowcase;