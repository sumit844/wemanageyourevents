import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { pricingPackages, PricingPackage } from '@/lib/eventData';
import PlanApplicationForm from '@/components/ui/PlanApplicationForm';

const PlanDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [plan, setPlan] = useState<PricingPackage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the package with the matching id
    const foundPlan = pricingPackages.find(pkg => pkg.id === id);
    
    if (foundPlan) {
      setPlan(foundPlan);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-center py-12">Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center py-12">
              <h1 className="text-3xl font-bold mb-4">Package Not Found</h1>
              <p className="mb-6">Sorry, we couldn't find the package you're looking for.</p>
              <Button onClick={() => navigate('/pricing')}>
                Return to Pricing
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <Button 
            variant="ghost" 
            className="mb-6" 
            onClick={() => navigate('/pricing')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Pricing
          </Button>
          
          {/* Plan details section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className={`rounded-xl border ${plan.popular ? 'border-primary' : 'border-border'} p-6 shadow-sm sticky top-24`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                    Popular
                  </div>
                )}
                
                <div className="text-center">
                  <h2 className="text-2xl font-bold">{plan.title}</h2>
                  <div className="mt-4 flex items-baseline justify-center">
                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      {plan.price !== 'Custom' ? '/event' : ''}
                    </span>
                  </div>
                  <p className="mt-4 text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      <span className="ml-3 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div>
                <h1 className="text-3xl font-bold mb-6">Apply for {plan.title}</h1>
                <p className="text-muted-foreground mb-8">
                  Please fill out the form below to get started with our {plan.title} package. 
                  Our team will contact you shortly to discuss your event requirements in detail.
                </p>
                
                <PlanApplicationForm planTitle={plan.title} planId={plan.id} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PlanDetail;
