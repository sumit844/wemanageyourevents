import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EventCard from "./ui/EventCard";
import { events } from "@/lib/eventData";
import { Slider } from "@/components/ui/slider";
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
  Landmark,
} from "lucide-react";

const Hero = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(12);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const featuredEvents = events.slice(0, 3);
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };
  const calculateMonthlyPayment = () => {
    return Math.round(loanAmount / loanTerm);
  };
  return (
    <>
      <section
        id="home"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Background overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10"></div>

        {/* Parallax background image */}
        <div
          ref={parallaxRef}
          className="absolute inset-0 z-0 parallax-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2798&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "120%",
            width: "100%",
            top: "-10%",
          }}
        ></div>

        <div className="container relative z-20 px-6 md:px-10 mx-auto text-center text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6 animate-fade-in">
            Premium Event Management
          </span>

          <h1
            className="text-4xl md:text-5xl lg:text-heading-xl max-w-4xl mx-auto font-bold leading-tight mb-6 opacity-0 animate-slide-down"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            We Create Unforgettable{" "}
            <span className="text-gradient">Moments</span> For Your Special Day
          </h1>

          <p
            className="text-body-lg max-w-2xl mx-auto text-white/90 mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Specializing in weddings, religious ceremonies, birthdays, and more.
            We bring your vision to life with elegance and precision at the most
            economical rates.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <Link to="/events">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 button-glow"
              >
                Explore events
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              View Our Portfolio
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <button
            onClick={scrollToServices}
            aria-label="Scroll down"
            className="rounded-full p-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          >
            <ChevronDown className="h-6 w-6 text-white" />
          </button>
        </div>
      </section>
      <section>
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
                We make your special events affordable with our flexible
                financing options. Plan your marriage ceremonies and puja events
                without financial stress.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild className="hover-scale">
                  <Link to="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="hover-scale"
                >
                  <Link to="/pricing">View Packages</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Interactive Loan Calculator */}
          <div className="mb-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-all hover:shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-8">
              Event Loan Calculator
            </h2>
            <div className="md:flex gap-10">
              <div className="md:w-2/3 space-y-8">
                <div className="space-y-4">
                  <label className="font-medium">
                    Loan Amount: ₹{loanAmount.toLocaleString()}
                  </label>
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
                  <label className="font-medium">
                    Loan Term: {loanTerm} months
                  </label>
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
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Estimated Monthly Payment
                  </p>
                  <p className="text-4xl font-bold text-primary mt-2">
                    ₹{calculateMonthlyPayment().toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    *Zero interest, no hidden fees
                  </p>
                  <Button className="mt-6 w-full"><Link to="/contact">Apply Now</Link></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the variety of events we specialize in, from religious
              ceremonies to social gatherings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                description={event.description}
                imageSrc={event.imageSrc}
                category={event.category}
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button onClick={() => navigate("/events")}>View All Events</Button>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="inline-block py-1 px-3 bg-secondary mb-4 text-xs font-medium rounded-full">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Creating Memorable Experiences With Precision
              </h2>
              <p className="text-muted-foreground mb-8">
                At WeManageYourEvents, we believe that every special moment
                deserves exceptional attention to detail. Our dedicated team
                brings creativity, precision, and passion to every event we
                organize.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium">Experienced Team</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Our team has organized hundreds of successful events
                      across various categories
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium">
                      Personalized Service
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We create custom experiences tailored to your unique
                      vision and requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-base font-medium">
                      Attention to Detail
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We obsess over the small details that make an event truly
                      remarkable
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button onClick={() => navigate("/contact")}>
                  Get in Touch
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in">
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop"
                    alt="Event planning team working together"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 md:w-40 md:h-40 bg-primary/10 rounded-lg -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 md:w-40 md:h-40 bg-secondary/70 rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Let's work together to bring your vision to life. Contact us today
            to begin planning your exceptional event experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                navigate("/pricing");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
