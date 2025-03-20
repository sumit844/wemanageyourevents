import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
  const isMobile = useIsMobile();
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedSubmenu(null);
  }, [location.pathname]);

  const toggleSubmenu = (key: string) => {
    setExpandedSubmenu(prevState => prevState === key ? null : key);
  };

  const resourcesSubmenu = [
    { name: "Event Planning Tips", path: "/event-planning-tips" },
    { name: "Venues", path: "/venues" },
    { name: "Vendors & Services", path: "/vendors" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
  ];

  const aboutSubmenu = [
    { name: "About Us", path: "/about" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Careers", path: "/careers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about", submenu: true },
    { name: "Testimonials", href: "/testimonials", submenu: true },
    { name: "Contact", href: "/contact" },
  ];

  // Determine if current path matches link
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleConsultationClick = () => {
    navigate("/contact");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span
            className={cn(
              "text-lg md:text-xl font-semibold transition-colors duration-300",
              isScrolled ? "text-primary" : "text-primary"
            )}
          >
            WeManageYourEvents
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-primary",
                isScrolled ? "text-gray-800" : "text-black",
                isActive(link.href) && "text-primary font-semibold"
              )}
            >
              {link.name}
            </Link>
          ))} */}
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((item) =>
                item.submenu ? (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium">
                      {item.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {(item.name === "Resources"
                          ? resourcesSubmenu
                          : aboutSubmenu
                        ).map((subitem) => (
                          <li key={subitem.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={subitem.path}
                                className="block hover:text-primary select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm hover:text-primary font-medium leading-none">
                                  {subitem.name}
                                </div>
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
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "text-sm px-3 space-x-6 font-medium transition-colors duration-300 hover:text-primary",
                        isScrolled ? "text-gray-800" : "text-black",
                        isActive(item.href) && "text-primary font-semibold"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            onClick={handleConsultationClick}
            className="bg-primary text-white hover:bg-primary/90 button-glow"
          >
            Book a Consultation
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "md:hidden p-2 rounded-full transition-colors",
            isScrolled ? "text-gray-800" : "text-white"
          )}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] z-50 md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="bg-white shadow-lg rounded-b-lg mx-4 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-gray-800 font-medium py-2 transition-colors hover:text-primary",
                  isActive(link.href) && "text-primary font-semibold"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button
              onClick={handleConsultationClick}
              className="w-full bg-primary text-white hover:bg-primary/90 button-glow"
            >
              Book a Consultation
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
