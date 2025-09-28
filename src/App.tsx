import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/ContactNew";
import SocialMediaService from "./pages/services/SocialMediaService";
import NotFound from "./pages/NotFound";
import FloatingContactButtons from "./components/FloatingContactButtons";
import ScrollToTop from "./components/ScrollToTop";
import LeadsService from "./pages/services/LeadsService";
import PerformanceMarketingService from "./pages/services/PerformanceMarketingService";
import BrandingService from "./pages/services/BrandingService";
import WebDesignService from "./pages/services/WebDesignService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Global floating contact actions */}
        <FloatingContactButtons />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* Main five services */}
          <Route path="/services/social-media" element={<SocialMediaService />} />
          <Route path="/services/leads" element={<LeadsService />} />
          <Route path="/services/performance" element={<PerformanceMarketingService />} />
          <Route path="/services/branding" element={<BrandingService />} />
          <Route path="/services/web-design" element={<WebDesignService />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
