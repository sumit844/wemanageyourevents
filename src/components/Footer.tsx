import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter, Linkedin, Heart } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {

  const navigate = useNavigate();
  
  const handleEventTypeClick = (eventType: string) => {
    navigate('/events');
    // Use setTimeout to ensure navigation completes before trying to click the button
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const button = document.querySelector(`button[value="${eventType.toLowerCase()}"]`) as HTMLButtonElement;
      if (button) button.click();
    }, 100);
  };
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">wemanageyourevents</h3>
            <p className="text-gray-400 mb-4">
              Creating perfect memories through flawless events that celebrate life's special moments.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-full"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-full"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-full"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-primary transition-colors p-2 rounded-full"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Events</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/events"
                  onClick={() => handleEventTypeClick('religious')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Religious Ceremonies
                </Link>
              </li>
              <li>
                <Link 
                  to="/events"
                  onClick={() => handleEventTypeClick('wedding')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Weddings
                </Link>
              </li>
              <li>
                <Link 
                  to="/events"
                  onClick={() => handleEventTypeClick('birthday')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Birthdays
                </Link>
              </li>
              <li>
                <Link 
                  to="/events"
                  onClick={() => handleEventTypeClick('corporate')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link 
                  to="/events"
                  onClick={() => handleEventTypeClick('social')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Social Gatherings
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on our latest event planning tips and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input
                placeholder="Your email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} wemanageyourevents. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-primary mx-1" /> for special moments
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;