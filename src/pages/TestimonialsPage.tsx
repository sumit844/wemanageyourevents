import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Container } from "lucide-react";

const TestimonialsPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize intersection observers for animations
    const sections = document.querySelectorAll(".section-fade-in");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    sections.forEach((section) => {
      observer.observe(section);
    });
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      event: "Wedding",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop",
      testimonial: "The team at WeManageYourEvents made our wedding day absolutely perfect! From the initial planning stages to the day of execution, they handled everything with professionalism and care. Our guests are still talking about how beautiful and well-organized everything was."
    },
    {
      id: 2,
      name: "Rahul Verma",
      event: "Corporate Conference",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop",
      testimonial: "We hired WeManageYourEvents for our annual corporate conference, and they exceeded our expectations. The attention to detail, technological setup, and coordination were flawless. They truly understood our brand and brought our vision to life."
    },
    {
      id: 3,
      name: "Priya and Karthik",
      event: "Baby Shower",
      rating: 5,
      image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1400&auto=format&fit=crop",
      testimonial: "Our baby shower was a dream come true thanks to the amazing team at WeManageYourEvents. The decorations were exactly what we envisioned, and all our guests felt so welcomed and comfortable. Thank you for making our special day so memorable!"
    },
    {
      id: 4,
      name: "Vikram Singh",
      event: "Birthday Party",
      rating: 4,
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1400&auto=format&fit=crop",
      testimonial: "I was impressed by the creativity and efficiency of the WeManageYourEvents team. They transformed a simple birthday party idea into an unforgettable experience. Their ability to work within my budget while still delivering excellence was remarkable."
    },
    {
      id: 5,
      name: "Meera Patel",
      event: "Religious Ceremony",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1400&auto=format&fit=crop",
      testimonial: "The team's understanding of our cultural traditions and requirements for our religious ceremony was impressive. They coordinated everything respectfully and beautifully, allowing our family to focus on the spiritual aspects of the event."
    },
    {
      id: 6,
      name: "Arjun Mehta",
      event: "Corporate Dinner",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1400&auto=format&fit=crop",
      testimonial: "WeManageYourEvents handled our corporate dinner flawlessly. From venue selection to menu planning and entertainment, everything was top-notch. They understand the professionalism required for corporate events and delivered beyond expectations."
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
      />
    ));
  };
  return (
    <div className="min-h-screen flex flex-col" ref={pageRef}>
      <Navbar />
      <div className="pt-20"> {/* Added padding to account for fixed navbar */}
        <Testimonials />
      </div>
      
      <div className="grid container grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow duration-300">
                <CardContent className="flex-grow p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                      <div className="flex mt-1">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                  </div>
                  <blockquote className="italic text-muted-foreground">
                    "{testimonial.testimonial}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="bg-secondary/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Create Your Perfect Event?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our long list of satisfied clients and let us help you create an unforgettable experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Get Started
              </a>
              <a href="/events" className="bg-white border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors">
                Explore Our Services
              </a>
            </div>
          </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TestimonialsPage;