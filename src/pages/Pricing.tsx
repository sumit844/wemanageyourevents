import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/ui/PackageCard';
import CustomButton from '@/components/ui/CustomButton';
import { pricingPackages } from '@/lib/eventData';

const Pricing = () => {
  const navigate = useNavigate();
  const [activeEventType, setActiveEventType] = useState<string>('Religious');
  
  // Get unique event types
  const eventTypes = ['Religious', 'Wedding', 'Birthday', 'Corporate', 'Social'];
  
  // Filter packages based on active event type
  const filteredPackages = activeEventType
    ? pricingPackages.filter(pkg => pkg.eventType === activeEventType || !pkg.eventType)
    : pricingPackages.filter(pkg => pkg.eventType === 'Religious' || !pkg.eventType);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-block py-1 px-3 bg-secondary mb-4 text-xs font-medium rounded-full">
                Pricing
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Event-Specific Pricing Plans
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect package for your specific event type or let us create a custom solution 
                tailored to your needs.
              </p>
            </div>
            
            {/* Event Type Selector */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveEventType(type)}
                  className={`py-2 px-6 rounded-full text-sm font-medium transition-colors ${
                    activeEventType === type
                      ? 'bg-primary text-white'
                      : 'bg-secondary/30 text-muted-foreground hover:bg-secondary/50'
                  }`}
                >
                  {type} Events
                </button>
              ))}
            </div>
            
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg, index) => (
                <PackageCard
                  key={pkg.id}
                  id={pkg.id}
                  title={pkg.title}
                  price={pkg.price}
                  description={pkg.description}
                  features={pkg.features}
                  popular={pkg.popular}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-12 md:py-20 px-6 md:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Find answers to common questions about our services and pricing
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">What's included in each package?</h3>
                <p className="text-muted-foreground">
                  Each package includes varying levels of service specific to that event type. The features are listed under each package, 
                  but all packages include planning assistance, event coordination, and basic setup services.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Can I customize a package?</h3>
                <p className="text-muted-foreground">
                  Absolutely! While we offer standardized packages for convenience, we understand that 
                  every event is unique. Our Bespoke package allows for complete customization, or you 
                  can add specific services to any of our standard packages.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">Are there any additional costs?</h3>
                <p className="text-muted-foreground">
                  The package prices cover our planning and coordination services. Additional costs may 
                  include vendor services (catering, decorations, venue fees, etc.), which we will clearly 
                  outline in your custom quote and contract.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium mb-2">How do payments work?</h3>
                <p className="text-muted-foreground">
                  We typically require a 50% deposit to secure your date, with the remaining balance 
                  due two weeks before the event. For larger events, we can arrange a payment schedule 
                  that works for you. We accept bank transfers, credit cards, and digital payment methods.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 md:py-20 px-6 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss your event needs and get a personalized quote.
            </p>
            <CustomButton size="lg" onClick={() => navigate('/contact')}>
              Contact Us Now
            </CustomButton>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
