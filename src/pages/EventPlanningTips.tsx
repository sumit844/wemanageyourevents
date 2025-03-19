import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Users, MapPin, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const EventPlanningTips = () => {
  const navigate = useNavigate();
  
  const tipCategories = [
    {
      title: "Venue Selection",
      icon: <MapPin className="h-10 w-10 text-primary" />,
      tips: [
        "Consider the event size when choosing a venue",
        "Check venue availability several months in advance",
        "Verify venue amenities and accessibility options",
        "Ask about available parking and transportation options",
        "Visit the venue in person before making a final decision"
      ]
    },
    {
      title: "Guest Management",
      icon: <Users className="h-10 w-10 text-primary" />,
      tips: [
        "Send invitations at least 6-8 weeks in advance",
        "Create a comprehensive guest list with contact information",
        "Plan for dietary restrictions and special needs",
        "Consider assigned seating for formal events",
        "Create name tags for networking events"
      ]
    },
    {
      title: "Timing & Scheduling",
      icon: <Clock className="h-10 w-10 text-primary" />,
      tips: [
        "Create a detailed event timeline",
        "Allow buffer time between activities",
        "Communicate schedule to all vendors and staff",
        "Have a backup plan for delays",
        "Start formal events on time, social events 15-30 minutes after stated time"
      ]
    },
    {
      title: "Event Planning Checklist",
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      tips: [
        "Start planning at least 3-6 months before the event",
        "Establish your event budget early",
        "Book key vendors as soon as possible",
        "Send a final confirmation to all vendors one week before",
        "Prepare an emergency kit with essentials"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block py-1 px-3 bg-secondary mb-4 text-xs font-medium rounded-full">
                Expert Advice
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Event Planning Tips & Guidelines
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our professional insights and practical recommendations to help you plan 
                and execute successful events.
              </p>
            </div>
            
            {/* Calendar CTA */}
            <div className="bg-secondary/30 rounded-lg p-8 mb-16 flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h2 className="text-2xl font-bold mb-2">Need Help Planning Your Event?</h2>
                <p className="text-muted-foreground mb-4">
                  Schedule a free consultation with our event planning experts.
                </p>
                <Button 
                  onClick={() => navigate('/contact')}
                  className="flex items-center"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book a Consultation
                </Button>
              </div>
              <div className="shrink-0">
                <Calendar className="h-24 w-24 text-primary opacity-80" />
              </div>
            </div>
            
            {/* Tips Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              {tipCategories.map((category, idx) => (
                <div 
                  key={category.title} 
                  className="bg-white rounded-lg p-8 shadow-sm border transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-xl font-semibold ml-4">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.tips.map((tip, tipIdx) => (
                      <li key={tipIdx} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium mr-3 mt-0.5">
                          {tipIdx + 1}
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Final CTA */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Planning Your Event?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Whether you're organizing a corporate gathering, wedding, or special celebration, 
                our team is here to help make your event exceptional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => navigate('/events')}>
                  Explore Our Services
                </Button>
                <Button variant="outline" onClick={() => navigate('/contact')}>
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventPlanningTips;
