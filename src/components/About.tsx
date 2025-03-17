
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-24 px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white section-fade-in"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary/90 text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-heading-md font-bold mb-6">
              Creating <span className="text-gradient">Perfect Memories</span> Since 2023
            </h2>
            <p className="text-gray-600 mb-6">
              At <span className="font-semibold">wemanageyourevents</span>, we believe that every celebration should be as unique as the people behind it. Our mission is to create meaningful, memorable experiences that reflect your personal style and vision.
            </p>
            <p className="text-gray-600 mb-6">
              What sets us apart is our commitment to combining elegance with affordability. We understand that creating beautiful events shouldn't break the bank, and our team works diligently to offer premium experiences at the most economical rates possible.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-secondary/50 rounded-lg p-4 text-center">
                <h4 className="text-3xl font-bold text-primary mb-1">200+</h4>
                <p className="text-sm text-gray-600">Events Managed</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 text-center">
                <h4 className="text-3xl font-bold text-primary mb-1">98%</h4>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
            </div>
            <Button className="bg-primary text-white hover:bg-primary/90 button-glow">
              Learn More
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2798&auto=format&fit=crop"
                alt="Event planning team"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-white p-4 shadow-lg rounded-lg glass-card animate-pulse-slow">
              <p className="text-sm font-medium">
                "Our passion is turning your vision into reality, one event at a time."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
