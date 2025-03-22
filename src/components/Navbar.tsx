
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from '@/hooks/use-mobile';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', key: 'resources', submenu: true },
    { name: 'About', key: 'about', submenu: true },
    { name: 'Contact', path: '/contact' },
  ];

  const resourcesSubmenu = [
    { name: 'Event Planning Tips', path: '/event-planning-tips' },
    { name: 'Venues', path: '/venue-showcase' },
    { name: 'Vendors & Services', path: '/vendors-and-services' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
  ];

  const aboutSubmenu = [
    { name: 'About Us', path: '/about' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
  ];
  const handleConsultationClick = () => {
    navigate("/contact");
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedSubmenu(null);
  }, [location.pathname]);

  const toggleSubmenu = (key: string) => {
    setExpandedSubmenu(prevState => prevState === key ? null : key);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8 py-4',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-semibold tracking-tight transition-all duration-300"
        >
          WeManageYourEvents
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavigationMenu>
            <NavigationMenuList>
              {mainNavItems.map((item) => (
                item.submenu ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="px-3 hover:text-primary text-sm font-medium">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {(item.name === 'Resources' ? resourcesSubmenu : aboutSubmenu).map((subitem) => (
                          <li key={subitem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={subitem.path}
                                className="block hover:text-primary select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium hover:text-primary leading-none">{subitem.name}</div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      to={item.path}
                      className={cn(
                        'nav-item hover:text-primary px-3 py-2 text-sm font-medium transition-colors',
                        location.pathname === item.path
                          ? 'text-primary'
                          : 'text-foreground/80'
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                )
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            onClick={handleConsultationClick}
            className="bg-primary text-white hover:bg-primary/90 button-glow"
          >
            Book a Consultation
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg md:hidden animate-fade-in shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="py-4 px-6 flex flex-col space-y-4">
            {mainNavItems.map((item) => (
              item.submenu ? (
                <div key={item.name} className="py-2">
                  <button 
                    onClick={() => toggleSubmenu(item.key || '')}
                    className="w-full flex items-center justify-between px-4 py-2 font-medium rounded-md hover:bg-secondary/50 transition-colors"
                    aria-expanded={expandedSubmenu === item.key}
                  >
                    <span>{item.name}</span>
                    {expandedSubmenu === item.key ? (
                      <ChevronDown className="h-4 w-4 transition-transform" />
                    ) : (
                      <ChevronRight className="h-4 w-4 transition-transform" />
                    )}
                  </button>
                  {expandedSubmenu === item.key && (
                    <div className="mt-2 pl-4 border-l-2 border-secondary/50 space-y-2 animate-fade-in">
                      {(item.name === 'Resources' ? resourcesSubmenu : aboutSubmenu).map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.path}
                          className="block py-2 px-4 rounded-md transition-colors text-foreground/80 hover:bg-secondary/50 hover:text-foreground"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    'py-2 px-4 rounded-md transition-colors',
                    location.pathname === item.path
                      ? 'bg-secondary text-primary font-medium'
                      : 'text-foreground/80 hover:bg-secondary/50 hover:text-foreground'
                  )}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
