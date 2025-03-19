import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { BadgeCheck, Phone, Mail, ExternalLink } from 'lucide-react';

const VendorsAndServices = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all');
  
  const vendorCategories = [
    { id: 'all', label: 'All Vendors' },
    { id: 'catering', label: 'Catering' },
    { id: 'decoration', label: 'Decoration & Decor' },
    { id: 'photography', label: 'Photography & Video' },
    { id: 'entertainment', label: 'Entertainment' },
    { id: 'transport', label: 'Transportation' },
  ];
  
  const vendors = [
    {
      id: 'royal-caterers',
      name: 'Royal Caterers',
      category: 'catering',
      description: 'Award-winning catering service specializing in multi-cuisine menus for all event types.',
      highlights: ['Customizable Menus', 'Dietary Accommodations', 'Live Cooking Stations', 'Full Service Staff'],
      contact: { phone: '+91 98765 43210', email: 'info@royalcaterers.com' },
      imageSrc: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop',
      verified: true
    },
    {
      id: 'elegant-decor',
      name: 'Elegant Decor Solutions',
      category: 'decoration',
      description: 'Creative decor specialists offering themed designs and customized event aesthetics.',
      highlights: ['Theme Development', 'Floral Arrangements', 'Lighting Design', 'Table Settings'],
      contact: { phone: '+91 98765 12345', email: 'contact@elegantdecor.com' },
      imageSrc: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?q=80&w=2069&auto=format&fit=crop',
      verified: true
    },
    {
      id: 'capture-moments',
      name: 'Capture Moments Photography',
      category: 'photography',
      description: 'Professional photography and videography team capturing special moments with artistic flair.',
      highlights: ['Event Photography', 'Cinematic Videos', 'Drone Coverage', 'Same-Day Edits'],
      contact: { phone: '+91 87654 32109', email: 'book@capturemoments.com' },
      imageSrc: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2138&auto=format&fit=crop',
      verified: true
    },
    {
      id: 'rhythm-entertainment',
      name: 'Rhythm Entertainment',
      category: 'entertainment',
      description: 'Versatile entertainment provider offering music, performances, and interactive activities.',
      highlights: ['Live Bands', 'DJs & Emcees', 'Cultural Performances', 'Interactive Games'],
      contact: { phone: '+91 76543 21098', email: 'bookings@rhythm-entertainment.com' },
      imageSrc: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop',
      verified: false
    },
    {
      id: 'spice-route',
      name: 'Spice Route Catering',
      category: 'catering',
      description: 'Specialized in authentic regional cuisines from across India with modern presentation.',
      highlights: ['Regional Specialties', 'Modern Presentation', 'Organic Ingredients', 'Buffet & Plated Options'],
      contact: { phone: '+91 65432 10987', email: 'orders@spiceroute.com' },
      imageSrc: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop',
      verified: true
    },
    {
      id: 'premier-transport',
      name: 'Premier Transportation',
      category: 'transport',
      description: 'Luxury transportation services for guests and VIPs with punctual and professional drivers.',
      highlights: ['Luxury Fleet', 'Chauffeur Service', 'Group Transportation', 'Airport Transfers'],
      contact: { phone: '+91 54321 09876', email: 'reservations@premiertransport.com' },
      imageSrc: 'https://images.unsplash.com/photo-1608363808031-d31de88be788?q=80&w=2070&auto=format&fit=crop',
      verified: false
    },
    {
      id: 'creative-sounds',
      name: 'Creative Sounds',
      category: 'entertainment',
      description: 'Complete sound and lighting solutions with technical expertise for events of all sizes.',
      highlights: ['Sound Engineering', 'Lighting Design', 'AV Equipment', 'Technical Support'],
      contact: { phone: '+91 43210 98765', email: 'tech@creativesounds.com' },
      imageSrc: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop',
      verified: true
    },
    {
      id: 'blossom-decor',
      name: 'Blossom Decor',
      category: 'decoration',
      description: 'Specializing in floral designs and natural element decorations for a fresh aesthetic.',
      highlights: ['Floral Designs', 'Sustainable Options', 'Seasonal Themes', 'Custom Installations'],
      contact: { phone: '+91 32109 87654', email: 'flowers@blossomdecor.com' },
      imageSrc: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2080&auto=format&fit=crop',
      verified: true
    },
  ];
  
  const filteredVendors = activeTab === 'all' 
    ? vendors 
    : vendors.filter(vendor => vendor.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="py-12 md:py-20 px-6 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-block py-1 px-3 bg-secondary mb-4 text-xs font-medium rounded-full">
                Trusted Partners
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Premier Vendors & Services
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've partnered with the best vendors in the industry to ensure your event 
                has access to quality services across all categories.
              </p>
            </div>
            
            {/* Vendor Filters */}
            <div className="mb-12">
              <Tabs defaultValue="all" onValueChange={setActiveTab}>
                <TabsList className="w-full md:w-auto flex justify-start overflow-auto pb-2">
                  {vendorCategories.map(category => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
            
            {/* Vendors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredVendors.map((vendor) => (
                <Card key={vendor.id} className="overflow-hidden h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={vendor.imageSrc} 
                      alt={vendor.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    {vendor.verified && (
                      <div className="absolute top-3 right-3 bg-primary/90 text-white rounded-full py-1 px-2 flex items-center text-xs">
                        <BadgeCheck className="h-3.5 w-3.5 mr-1" />
                        Verified Partner
                      </div>
                    )}
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {vendor.name}
                    </CardTitle>
                    <CardDescription>
                      {vendor.category.charAt(0).toUpperCase() + vendor.category.slice(1)}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground mb-4">
                      {vendor.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Services:</h4>
                      <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                        {vendor.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary mr-1.5"></span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Contact:</h4>
                      <div className="space-y-1">
                        <p className="text-xs flex items-center text-muted-foreground">
                          <Phone className="h-3.5 w-3.5 mr-1.5" />
                          {vendor.contact.phone}
                        </p>
                        <p className="text-xs flex items-center text-muted-foreground">
                          <Mail className="h-3.5 w-3.5 mr-1.5" />
                          {vendor.contact.email}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full"
                      onClick={() => navigate('/contact')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Request Through Us
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {/* CTA Section */}
            <div className="bg-secondary/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-3">Need a Special Vendor?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you're looking for a specific service not listed here, our team can connect you with 
                specialized vendors based on your unique requirements.
              </p>
              <Button onClick={() => navigate('/contact')}>
                Request Vendor Recommendations
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VendorsAndServices;