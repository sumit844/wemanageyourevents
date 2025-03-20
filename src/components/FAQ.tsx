import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FAQ = () => {
  const navigate = useNavigate();
  
  const generalFaqs = [
    {
      question: "What types of events do you plan?",
      answer: "We plan a wide range of events including weddings, corporate functions, religious ceremonies, birthdays, anniversaries, and social gatherings. Our team is experienced in handling events of various sizes and cultural backgrounds."
    },
    {
      question: "How far in advance should I book your services?",
      answer: "For larger events like weddings and corporate conferences, we recommend booking 6-12 months in advance. For smaller events, 3-6 months notice is generally sufficient. However, we occasionally have availability for last-minute events, so don't hesitate to inquire."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on the type of event, number of guests, services required, and season. We offer various packages to suit different budgets and requirements. Please visit our Pricing page or contact us for a customized quote."
    },
    {
      question: "Do you offer partial planning services?",
      answer: "Yes, we offer full planning, partial planning, and day-of coordination services. You can select the level of assistance that best fits your needs and budget."
    }
  ];
  
  const weddingFaqs = [
    {
      question: "Do you handle destination weddings?",
      answer: "Yes, we have experience planning destination weddings across India and internationally. Our team can handle all logistics, vendor coordination, and travel arrangements for you and your guests."
    },
    {
      question: "Can you accommodate cultural and religious wedding traditions?",
      answer: "Absolutely! We have extensive experience with various cultural and religious ceremonies. Our team takes time to understand your specific traditions and ensures they are incorporated respectfully and authentically."
    },
    {
      question: "How involved will I be in the planning process?",
      answer: "As involved as you want to be! Some clients prefer to be hands-on with every decision while others prefer to leave the details to us. We adapt our process to your preferences while always keeping you informed of important developments."
    }
  ];
  
  const corporateFaqs = [
    {
      question: "Can you handle technical requirements for corporate events?",
      answer: "Yes, we have dedicated technical teams who manage audio-visual equipment, live streaming, presentations, and other technical aspects of corporate events."
    },
    {
      question: "Do you offer branding options for corporate events?",
      answer: "Absolutely. We can incorporate your company branding into all aspects of the event, from digital displays to printed materials, decor, and even custom experiences that reflect your brand values."
    },
    {
      question: "Can you arrange speakers or entertainment for our corporate event?",
      answer: "Yes, we have an extensive network of speakers, entertainers, and performers suitable for corporate events. We can suggest and book options that align with your event objectives and company culture."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block py-1 px-3 bg-secondary mb-4 text-xs font-medium rounded-full">
              Your Questions Answered
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Frequently Asked Questions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our event planning services, process, and policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-semibold mb-4 text-primary">General Questions</h2>
            <Accordion type="single" collapsible className="mb-8">
              {generalFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Wedding Questions</h2>
            <Accordion type="single" collapsible className="mb-8">
              {weddingFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`wedding-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <h2 className="text-2xl font-semibold mb-4 text-primary">Corporate Event Questions</h2>
            <Accordion type="single" collapsible className="mb-8">
              {corporateFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`corporate-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="bg-secondary/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you couldn't find the answer to your question, please feel free to contact us directly.
              Our team is always happy to provide the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/contact')}>
                Contact Us
              </Button>
              <Button variant="outline" onClick={() => navigate('/pricing')}>
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
