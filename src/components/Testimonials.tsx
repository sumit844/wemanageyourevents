import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Priya & Raj",
    role: "Wedding Ceremony",
    content: "The team at wemanageyourevents turned our dream wedding into reality. Every detail was perfect, and they managed everything within our budget. Cannot recommend them enough!",
    image: "https://images.unsplash.com/photo-1604004555489-723a93d6ce74?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Amit Shah",
    role: "Birthday Celebration",
    content: "Absolutely incredible service! They organized my 50th birthday celebration and it was beyond my expectations. The attention to detail and professionalism was outstanding.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "The Sharma Family",
    role: "Puja Ceremony",
    content: "We were impressed by how well they understood the cultural significance of our Ashtyaj Puja. Everything was arranged with respect to our traditions while adding modern touches.",
    image: "https://images.unsplash.com/photo-1581579438747-95e1143e7706?q=80&w=1790&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 px-6 md:px-10 bg-gradient-to-b from-white to-primary/5 section-fade-in mb-20px"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-primary/90 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-heading-md font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-body-md text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the people who have experienced our services firsthand.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-500 relative inset-0 mb-5",
                activeIndex === index
                  ? "opacity-100 translate-x-0 z-10"
                  : index < activeIndex
                  ? "opacity-0 -translate-x-full z-0 hidden"
                  : "opacity-0 translate-x-full z-0 hidden"
              )}
            >
              <Card className="glass-card border-none shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 relative h-80 md:h-auto overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r md:from-black/40 md:to-transparent"></div>
                    </div>
                    <div className="md:col-span-3 p-8 flex flex-col justify-center">
                      <Quote className="h-10 w-10 text-primary/20 mb-4" />
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* Testimonial navigation dots */}
          <div className="flex justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full mx-1 transition-all",
                  activeIndex === index
                    ? "bg-primary scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
