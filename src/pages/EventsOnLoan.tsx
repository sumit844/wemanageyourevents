import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CalendarHeart, 
  PiggyBank, 
  Clock, 
  Check, 
  BadgeDollarSign, 
  ArrowRight, 
  Sparkle,
  Star,
  MapPin,
  Calendar,
  Heart,
  Landmark
} from 'lucide-react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { useToast } from "@/components/ui/use-toast";
const EventsOnLoan = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [userData,setUserData]=useState({formName:'loan',budget:'',eventDate:'',eventType:''})
  const eventTypes = [
    {
      title: "Wedding Ceremonies",
      description: "Create your dream wedding with flexible payment options. Our wedding packages include venue decoration, catering, photography, and more.",
      icon: <CalendarHeart className="w-10 h-10 text-primary" />,
      details: [
        "Professional venue styling and decoration",
        "Premium catering services with customized menu",
        "Professional photography and videography",
        "Wedding coordination and planning assistance",
        "Custom floral arrangements and bouquets"
      ]
    },
    {
      title: "Puja Ceremonies",
      description: "Organize traditional puja ceremonies with all necessary arrangements including pandit services, decoration, prasad, and ritual items.",
      icon: <Clock className="w-10 h-10 text-primary" />,
      details: [
        "Experienced pandit for conducting rituals",
        "Traditional decoration with flowers and rangoli",
        "High-quality prasad preparation",
        "Arrangement of all necessary puja items",
        "Audio setup for mantras and bhajans"
      ]
    }
  ];
const {toast}=useToast();
  const benefits = [
    "Zero-interest EMI options available",
    "Flexible repayment periods up to 24 months",
    "Quick loan approval process",
    "Transparent terms with no hidden charges",
    "Customizable packages to fit your budget"
  ];

  const testimonials = [
    {
      name: "Priya & Rahul",
      event: "Wedding Ceremony",
      quote: "Thanks to the Events on Loan program, we had our dream wedding without financial stress. The flexible payment plan was exactly what we needed!",
      rating: 5,
      location: "Mumbai"
    },
    {
      name: "Anil Sharma",
      event: "Griha Pravesh Puja",
      quote: "The puja ceremony for our new home was perfect. Every detail was taken care of, and the payment plan made it so affordable.",
      rating: 5,
      location: "Delhi"
    },
    {
      name: "Meera & Vikram",
      event: "Engagement Ceremony",
      quote: "We couldn't have asked for a better engagement ceremony. The financing options allowed us to have a grand celebration without compromising.",
      rating: 4,
      location: "Bangalore"
    }
  ];

  const calculateMonthlyPayment = () => {
    return Math.round(loanAmount / loanTerm);
  };

  const getValue=(e)=>{
 
  const localObject={};
  localObject[e.target.name]=e.target.value;

  setUserData({...userData,...localObject});
 
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    axios
      .post("https://40abacbbe202b37f1c7b6c7506602c13.m.pipedream.net", {
        body: userData,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you shortly!",
    });
  };
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950 dark:to-pink-950 overflow-hidden">
          <div className="absolute opacity-20 top-10 right-10">
            <Sparkle className="w-20 h-20 text-primary animate-pulse" />
          </div>
          <div className="absolute opacity-20 bottom-10 left-10">
            <Heart className="w-16 h-16 text-primary animate-pulse" />
          </div>
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white animate-fade-in">
                Celebrate Now, Pay Later
              </h1>
              <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                We make your special events affordable with our flexible financing options. 
                Plan your marriage ceremonies and puja events without financial stress.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="hover-scale">
                  <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="hover-scale">
                  <Link to="/pricing">View Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Interactive Loan Calculator */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all hover:shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8">Event Loan Calculator</h2>
            <div className="md:flex gap-10">
              <div className="md:w-2/3 space-y-8">
                <div className="space-y-4">
                  <label className="font-medium">Loan Amount: ₹{loanAmount.toLocaleString()}</label>
                  <Slider
                    defaultValue={[50000]}
                    max={500000}
                    step={5000}
                    value={[loanAmount]}
                    onValueChange={(val) => setLoanAmount(val[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm">
                    <span>₹25,000</span>
                    <span>₹500,000</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <label className="font-medium">Loan Term: {loanTerm} months</label>
                  <Slider
                    defaultValue={[12]}
                    max={24}
                    step={1}
                    value={[loanTerm]}
                    onValueChange={(val) => setLoanTerm(val[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm">
                    <span>6 Months</span>
                    <span>24 Months</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-8 md:mt-0 flex flex-col justify-center">
                <div className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300">Estimated Monthly Payment</p>
                  <p className="text-4xl font-bold text-primary mt-2">₹{calculateMonthlyPayment().toLocaleString()}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">*Zero interest, no hidden fees</p>
                  <Button className="mt-6 w-full"><Link to="/contact">Apply Now</Link></Button>
                </div>
              </div>
            </div>
          </div>

          {/* Event Types Tabs */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Events We Finance</h2>
            <Tabs defaultValue="wedding" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="wedding">Wedding Ceremonies</TabsTrigger>
                <TabsTrigger value="puja">Puja Ceremonies</TabsTrigger>
              </TabsList>
              
              {eventTypes.map((event, index) => (
                <TabsContent key={index} value={event.title === "Wedding Ceremonies" ? "wedding" : "puja"} className="mt-8">
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/2">
                        <div className="mb-4">{event.icon}</div>
                        <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">{event.description}</p>
                        <Button asChild>
                          <Link to="/contact">Book Consultation</Link>
                        </Button>
                      </div>
                      <div className="md:w-1/2">
                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                          <h4 className="font-medium mb-4">What's Included:</h4>
                          <ul className="space-y-3">
                            {event.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Choose Your Package",
                  description: "Select from our pre-designed packages or customize one to fit your needs and budget.",
                  icon: <Calendar className="h-8 w-8 text-primary" />
                },
                {
                  step: 2,
                  title: "Apply for Financing",
                  description: "Complete a simple application with minimal documentation for quick approval.",
                  icon: <Landmark className="h-8 w-8 text-primary" />
                },
                {
                  step: 3,
                  title: "Enjoy Your Event",
                  description: "We handle all the arrangements while you focus on making memories.",
                  icon: <Heart className="h-8 w-8 text-primary" />
                }
              ].map((step, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover-scale">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="relative mb-4 mx-auto">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          {step.icon}
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                          {step.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonials Slider */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
            <div className="relative bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 p-8 rounded-xl">
              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className={`transition-all duration-500 ${
                        activeTestimonial === index 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 absolute top-0 left-0 translate-x-8'
                      }`}
                    >
                      <div className="text-center">
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                        <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.event}</div>
                        <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" /> {testimonial.location}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeTestimonial === index 
                          ? 'bg-primary scale-125' 
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      onClick={() => setActiveTestimonial(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Financing Benefits */}
          <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 md:p-12">
            <div className="md:flex items-start gap-12">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold mb-6">Financing Benefits</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Our financing options make it easy to plan the perfect event without compromising on quality or your vision. 
                  We offer transparent terms and flexible payment plans.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
                <div className="flex justify-center mb-6">
                  <PiggyBank className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-6">Get a Quick Quote</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="event-type" className="block text-sm font-medium mb-1">
                      Event Type
                    </label>
                    <select 
                      id="event-type" 
                      name="eventType"
                      onChange={getValue}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2"
                    >
                      <option>Wedding Ceremony</option>
                      <option>Puja Ceremony</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-1">
                      Estimated Budget
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <BadgeDollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <Input
                        type="number"
                        id="budget"
                        name="budget"
                        className="w-full rounded-md border border-gray-300 dark:border-gray-700 pl-10 pr-4 py-2 bg-white dark:bg-gray-800"
                        placeholder="5000"
                        onChange={getValue}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="event-date" className="block text-sm font-medium mb-1">
                      Event Date
                    </label>
                    <Input
                      type="date"
                      id="event-date"
                      name="eventDate"
                      className="w-full"
                      onChange={getValue}
                    />
                  </div>
                  <Button className="w-full mt-4 hover-scale" onClick={handleSubmit}>Request Financing Options</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Event?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
              Contact us today to learn more about our event financing options and how we can help make your special day memorable without financial stress.
            </p>
            <Button size="lg" asChild className="hover-scale">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventsOnLoan;