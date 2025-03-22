import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Events from "./pages/events";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Pricing from "./pages/Pricing";
import PlanDetail from "./pages/PlanDetail";
import VenueShowcase from "./pages/VenueShowCase";
import VendorsAndServices from './pages/VendorsAndServices'
import EventPlanningTips from "./pages/EventPlanningTips";
import ScrollToTopNew from "./components/ScrollToTopNew";
import EventDetail from "./pages/EventDetail";
import FAQ from "./components/FAQ";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
     
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTopNew/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing/:id" element={<PlanDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/venue-showcase" element={<VenueShowcase />} />
          <Route path="/vendors-and-services" element={<VendorsAndServices />} />
          <Route path="/event-planning-tips" element={<EventPlanningTips />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/all" element={<Index />} /> {/* Keeping the original Index page as /all for reference */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
