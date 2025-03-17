
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Music, Sparkles, Users, UtensilsCrossed, Gift } from "lucide-react";

const services = [
  {
    title: "Weddings & Engagements",
    description: "Create the wedding of your dreams with our comprehensive planning services, from venue selection to day-of coordination.",
    icon: <Calendar className="h-8 w-8 text-primary" />,
  },
  {
    title: "Religious Ceremonies",
    description: "We respect and understand the importance of traditions for Ashtyaj Puja, Parthy Puja, and other religious events.",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
  },
  {
    title: "Birthday Celebrations",
    description: "Make your special day memorable with custom themes, decorations, entertainment, and catering tailored to your preferences.",
    icon: <Gift className="h-8 w-8 text-primary" />,
  },
  {
    title: "Catering Services",
    description: "Delight your guests with exquisite cuisine options ranging from traditional delicacies to modern fusion dishes.",
    icon: <UtensilsCrossed className="h-8 w-8 text-primary" />,
  },
  {
    title: "Entertainment",
    description: "From live music and DJs to cultural performances, we provide entertainment solutions that elevate your event.",
    icon: <Music className="h-8 w-8 text-primary" />,
  },
  {
    title: "Guest Management",
    description: "Comprehensive guest list management, invitations, and coordination to ensure everyone's comfort and enjoyment.",
    icon: <Users className="h-8 w-8 text-primary" />,
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 px-6 md:px-10 bg-gradient-to-b from-white to-gray-50 section-fade-in"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary/90 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-heading-md font-bold mb-4">
            Expert Event Management <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-body-md text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of services designed to make your special occasions truly memorable. Here's how we can help you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover-scale overflow-hidden border-none">
              <CardContent className="p-8">
                <div className="mb-6 rounded-full bg-primary/10 p-3 w-14 h-14 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
