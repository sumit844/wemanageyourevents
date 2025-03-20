
import { useEffect, useRef,useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleChange = (e) => {
    
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
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

    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)
    axios
      .post("https://40abacbbe202b37f1c7b6c7506602c13.m.pipedream.net", {
        body: formData,
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
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-6 md:px-10 bg-primary/5 section-fade-in"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary/90 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-heading-md font-bold mb-4">
            Let's Discuss Your <span className="text-gradient">Special Event</span>
          </h2>
          <p className="text-body-md text-gray-600 max-w-2xl mx-auto">
            Ready to create unforgettable memories? Contact us today to schedule a consultation and learn how we can make your event extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-6 rounded-xl flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                <p className="text-gray-600">
                  New Ashok Nagar<br />
                  New Delhi 110096, Delhi, India
                </p>
              </div>
            </div>
            
            {/* <div className="glass-card p-6 rounded-xl flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Contact Info</h3>
                <p className="text-gray-600">
                  +91 98765 43210<br />
                  +91 91234 56789
                </p>
              </div>
            </div> */}
            
            <div className="glass-card p-6 rounded-xl flex items-start space-x-4">
              <div className="bg-primary/10 rounded-full p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-gray-600">
                  wemanageyourevents@gmail.com<br />
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full"
                    required
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full"
                    required
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="Your phone"
                    className="w-full"
                    onChange={handleChange} 
                  />
                </div>
                <div>
                  <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Event Type
                  </label>
                  <select
                    id="eventType"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    onChange={handleChange} >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="puja">Religious Ceremony</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your event..."
                  className="w-full min-h-[120px]"
                  required
                  onChange={handleChange} 
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white button-glow">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
