import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

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

  return (
    <div className="min-h-screen flex flex-col" ref={pageRef}>
      <Navbar />
      <div className="pt-20"> {/* Added padding to account for fixed navbar */}
        <Testimonials />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TestimonialsPage;